const buildingsModule = require('./building_stats');
const buildingTypes = buildingsModule.buildingTypes;
const buildingStats = buildingsModule.buildingStats;

const achievementModule = require('../blockchain_api/achievements');

const mapModule = require('./map');
const peopleModule = require('./people');

const incomeRate = {
    educated: 10000,
    normal: 5000,
    gymIncomePerPerson: 150,
    restaurantIncomePerPerson: 200
}; // plate ljudi u gradu i zarada teretane i restorana (moglo bi da predstavlja na mesecnom nivou)

// #region utils

function sortMap(map) {
    return new Map([...map.entries()].sort((a,b) => b[0] - a[0]));
} // pomocna funkcija koja sortira mapu

function inRange(gym, building) {
    if(Math.min(Math.abs(gym.start.x - building.end.x), Math.abs(gym.end.x - building.start.x)) <= buildingStats.get(gym.type)[0].range 
    && Math.min(Math.abs(gym.start.y - building.end.y), Math.abs(gym.end.y - building.start.y)) <= buildingStats.get(gym.type)[0].range) {
        return true;
    }
    return false;
} // funkcija odredjuje da li je building u range-u teretane, a to je neophodno za racunanje zarade teretane

function gymIncome(gym, buildings) {
    var r = 0;
    buildings.forEach((element) => {
        if(inRange(gym, element)) {
            r += (buildingStats.get(element.type)[0].normalPeople + buildingStats.get(element.type)[0].educatedPeople) * incomeRate.gymIncomePerPerson;
        }
    });
    return r;
} // funkcija koja racuna zaradu teretane u zavisnosti od toga koliko je ljudi u range-u

function restaurantIncome(people, n) {
    var numOfPeople = 0;
    [...people.normalPeople.values()].forEach((element) => {
        numOfPeople += element;
    });
    [...people.educatedPeople.values()].forEach((element) => {
        numOfPeople += element;
    });

    return numOfPeople * incomeRate.restaurantIncomePerPerson;
} // racuna se zarada restorana koja je proporcionalna broju gradjana u celom gradu

function calculate(peopleArg, buildings) {
    var educatedIncome = 0;
    var normalIncome = 0;
    var people = {
        normalPeople: new Map([...peopleArg.normalPeople]),
        educatedPeople: new Map([...peopleArg.educatedPeople]),
        manualWorkers: peopleArg.manualWorkers,
        officeWorkers: peopleArg.officeWorkers
    }; // kopiraju se vrednosti iz glavnog peopleArg objekta da se on ne bi promenio
    var temp = [...people.educatedPeople][0];
    
    // racuna se zarada radnika u kancelarijama
    while(people.officeWorkers > 0 && temp !== undefined) {
        if(people.officeWorkers < temp[1]) {
            educatedIncome += incomeRate.educated * people.officeWorkers * temp[0];
            people.educatedPeople.set(temp[0], temp[1] - people.officeWorkers);
            people.officeWorkers = 0;
        }
        else {
            educatedIncome += incomeRate.educated * temp[1] * temp[0];
            people.officeWorkers -= temp[1];
            people.educatedPeople.delete(temp[0]);
        }
        temp = [...people.educatedPeople][0];
    }
    // racuna se zarada fizikalaca
    // ako su preostali neki edukovani ljudi oni mogu i da fizikalisu 
    temp = [...people.educatedPeople][0];
    while(temp !== undefined) {
        if(people.normalPeople.has(temp[0])) {
            temp[1] += people.normalPeople.get(temp[0]);
            people.normalPeople.delete(temp[0]);
            people.normalPeople.set(temp[0], temp[1]);
        }
        else {
            people.normalPeople.set(temp[0], temp[1]);
        }
        people.educatedPeople.delete(temp[0]);
        temp = [...people.educatedPeople][0];
    } // dodaju se edukovani ljudi na listu needukovanih
    people.normalPeople = sortMap(people.normalPeople);
    temp = [...people.normalPeople][0];
    while(people.manualWorkers > 0 && temp !== undefined) {
        if(people.manualWorkers < temp[1]) {
            normalIncome += incomeRate.normal * people.manualWorkers * temp[0];
            people.normalPeople.set(temp[0], temp[1] - people.manualWorkers);
            people.manualWorkers = 0;
        }
        else {
            normalIncome += incomeRate.normal * temp[1] * temp[0];
            people.manualWorkers -= temp[1];
            people.normalPeople.delete(temp[0]);
        }
        temp = [...people.normalPeople][0];
    }

    // racuna se zarada objekata koji donose novac (teretane i restorani)
    var buildingsIncome = 0;
    var numOfRestaurants = 0;
    buildings.normal.forEach((element) => {
        switch(element.type) {
            case buildingTypes.Gym:
                buildingsIncome += gymIncome(element, buildings);
                break;
            case buildingTypes.Parking: break;
            case buildingTypes.Restaurant:
                buildingsIncome += restaurantIncome(peopleArg, numOfRestaurants);
                numOfRestaurants++;
                break;
        }
    });

    return Math.floor(normalIncome + educatedIncome + buildingsIncome);
        // vraca se zbir zarada obicnih i edukovanih ljudi i objekata koji donose novac
        // 'floor' da bi brojevi bili lepsi
}

// #endregion

function calculateIncome(city, achievementsArg) {
    let achievements;
    if(achievementsArg) {
        achievements = {};
        achievementsArg.forEach((element) => {
            achievements[element.key] = { 
                completed: element.completed,
                rewardType: achievementModule.achievements[element.key].rewardType,
                rewardValue: achievementModule.achievements[element.key].rewardValue
            };
        });
    }

    let map = mapModule.initializeMap({ normal: city.buildings } , mapModule.mapDimensions);
    let people = peopleModule.countPeople({ normal: city.buildings } , map);
    let income = calculate(people, { normal: city.buildings });

    // taking into consideration the achievements that give an income boost
    Object.values(achievements).forEach(element => {
        if(element.completed === true && element.rewardType === achievementModule.rewardTypes.boost) {
            income *= element.rewardValue;
        }
    })

    return income;
}

exports.calculateIncome = calculateIncome;