import create from "zustand";

import { devtools } from "zustand/middleware";

import { buildingDimensions, buildingStats } from "../../../server/gameplay/building_stats";

// #region UTILS:

const getDimensions = ({special, type, dimensions}, arg) => {
  if(special) {
    return [0, 0];
  }
  else {
    let list = buildingDimensions.get(type);
    if(arg === 0) {
      return list[0];
    }
    let index;
    buildingDimensions.get(type).forEach((element, i) => {
      if(element[0] == dimensions[0] && element[1] == dimensions[1]) {
        index = i;
      }
    })
    index += arg;
    index = (index + list.length) % list.length;
    return list[index];
  }
}

// #endregion


const buildingStore = (set) => ({
  // #region City data
  staticData: {
    id: -1,
    owner: '0x00',
    created: true,
    initialized: true,
    theme: 0,
  },
  buildings: [],
  specialBuildings: [],
  dynamicData: {
    specialBuildingCash: [],
    money: 0,
    incomesReceived: 0,
    buildingId: 0,
    sepcialBuildingId: 0,
    normal: 0,
    educated: 0,
    normalWorkers: 0,
    educatedWorkers: 0,
    achievementList: [],
    income: 0,
    score: 0,
  },
  changeStaticData: changes => set( state => ({
    staticData: { ...state.staticData, ...changes }
  })),
  setBuildings: list => set( state => {
    let buildingList = {};
    list.forEach(building => {
      buildingList[`${building.start.x}_${building.start.y}`] = { building, status: 'built' };
    });

    return {
      buildings: list,
      ...buildingList
    }
  }),
  setSpecialBuildings: list => set( state => {
    let buildingList = {};
    list.forEach(building => {
      // buildingList[`${building.start.x}_${building.start.y}`] = { building, status: 'building' };
    });

    return {
      specialBuildings: list,
      ...buildingList
    }
  }),
  changeDynamicData: changes => set( state => ({
    dynamicData: { ...state.dynamicData, ...changes }
  })),
  changeCoordinate: (x, y, newValue) => set( state => {
    let obj = {};
    obj[`${x}_${y}`] = newValue;
    return {
      ...obj
    }
  }),

  // IMPORTANT - there will be entries with the keys with format 'x_y', the value of those entries are objects containing information about the building that has the specified start coordinates and the status of the building (possible values are 'building', 'built', 'removing', 'upgrading',...)

  // #endregion
  
  // #region Hovering
  hoverCurr: { x: 0, y: 0 },
  hoverPrev: { x: 0, y: 0 },
  setHover: (x, y) => set( state => ({
    hoverPrev: state.hoverCurr,
    hoverCurr: { x, y },
  })),
  selectedBuildingType: { special: null, type: null, dimensions: [ 0, 0 ] },
  changeDimensions: (arg) => set( state => ({
    // arg: 1 -> next, -1 -> previous
    selectedBuildingType: { ...state.selectedBuildingType, dimensions: getDimensions(state.selectedBuildingType, arg) }
  })),
  setSelectedBuildingType: (special, type) => set( state => ({
    selectedBuildingType: { special, type, dimensions: type?getDimensions({ special, type }, 0):[0,0] },
    floatingMenu: null
    // rotationIndex: 0
  })),
  rotationIndex: 0,
  incrementRotationIndex: (d) => set( state => ({
    rotationIndex: state.rotationIndex + d
  })),
  resetRotationIndex: () => set( state => ({
    rotationIndex: 0
  })),
  // #endregion

  // #region Instructions
  instructions: [],
  addBuilding: (building, price) => set( state => {
    if(price > state.dynamicData.money) {
      return ({ 
        error: { message: `Not enough money to build a ${building.type}`, type: 'popup-msg', options: { duration: '2s' } } 
      });
    }
    else {
      let newBuildingCoordinate = {};
      newBuildingCoordinate[`${building.start.x}_${building.start.y}`] = { building, status: 'building' };
      return ({
        buildings: [ ...state.buildings, building ],
        instructions: [ ...state.instructions, { instruction: 'build', body: { building } } ],
        dynamicData: {
          ...state.dynamicData,
          money: state.dynamicData.money - price
        },
        ...newBuildingCoordinate
      });
    }
  }),
  addSpecialBuilding: (building, price) => set( state => {
    if(price > state.dynamicData.money) {
      return ({ 
        error: { message: `Not enough money to build a ${building.type}`, type: 'popup-msg', options: { duration: '2s' } } 
      });
    }
    else {
      let newBuildingCoordinate = {};
      newBuildingCoordinate[`${building.start.x}_${building.start.y}`] = { building, status: 'building' };
      return ({
        specialBuildings: [ ...state.specialBuildings, building ],
        instructions: [ ...state.instructions, { instruction: 'buildspecial', body: { building } } ],
        dynamicData: {
          ...state.dynamicData,
          money: state.dynamicData.money - price
        },
        ...newBuildingCoordinate
      });
    }
  }),
  upgradeBuilding: (building, price) => set( state => {
    // checking if there is enough money to perform the upgrade
    if(price > state.dynamicData.money) {
      return {
        error: { message: `Not enough money to upgrade the ${building.type}`, type: 'popup-msg', options: { duration: '2s' }}
      };
    }
    if(building.level + 1 === buildingStats.get(building.type).length) {
      return {
        error: { message: 'Already at max level', type: 'popup-msg', options: { duration: '2s' }}
      };
    }

    // preparing to change the value of the x_y field in the state
    let buildingCoordinate = {};
    buildingCoordinate[`${building.start.x}_${building.start.y}`] = { building: { ...building, level: building.level+1 }, status: 'upgrading' };

    // copying the content of the building list, only changing this one level
    let newList = state.buildings.map(element => {
      if(JSON.stringify(element) === JSON.stringify(building)) {
        return {
          ...building,
          level: building.level+1
        }
      }
      return element;
    })

    // returning all the changes to the global state
    return {
      buildings: newList,
      instructions: [ ...state.instructions, { instruction: 'upgrade', body: { building } } ],
      dynamicData: {
        ...state.dynamicData,
        money: state.dynamicData.money - price
      },
      ...buildingCoordinate
    }
  }),
  removeBuilding: (building, moneyValue) => set( state => {
    // preparing to change the value of the x_y field in the state
    let buildingCoordinate = {};
    buildingCoordinate[`${building.start.x}_${building.start.y}`] = { building, status: 'removing' };

    // copying the content of the building list, only changing this one level
    let newList = state.buildings.filter(element => JSON.stringify(element) !== JSON.stringify(building));

    // returning all the changes to the global state
    return {
      buildings: newList,
      instructions: [ ...state.instructions, { instruction: 'remove', body: { building } } ],
      dynamicData: {
        ...state.dynamicData,
        money: state.dynamicData.money + moneyValue
      },
      ...buildingCoordinate
    }
  }),
  rotateBuilding: (building, rotation) => set( state => {
    // preparing to change the value of the x_y field in the state
    let buildingCoordinate = {};
    buildingCoordinate[`${building.start.x}_${building.start.y}`] = { building: { ...building, orientation: rotation===0?4:rotation }, status: 'rotating' };

    // copying the content of the building list, only changing the orientation
    let newList = state.buildings.map(element => {
      if(JSON.stringify(element) === JSON.stringify(building)) {
        return {
          ...building,
          orientation: rotation===0?4:rotation
        }
      }
      return element;
    })

    let isNewInstruction = true;
    let newInstructions = state.instructions.map(instruction => {
      if(
        JSON.stringify(instruction.body.building) === JSON.stringify({ ...building, orientation: instruction.body.building?.orientation }) && 
        instruction.instruction === 'rotate'
      ) {
        isNewInstruction = false;
        return {
          instruction: 'rotate',
          body: {
            building: instruction.body.building,
            rotation: rotation
          }
        }
      }
      return instruction;
    });
    console.log(newInstructions);
    newInstructions = newInstructions.filter(instruction => !(instruction.instruction === 'rotate' && instruction.body.building.orientation === instruction.body.rotation))
    if(isNewInstruction) {
      newInstructions = [ ...newInstructions, { instruction: 'rotate', body: { building, rotation } } ];
    }

    // returning all the changes to the global state
    return {
      buildings: newList,
      instructions: newInstructions,
      ...buildingCoordinate
    }
  }),
  // #endregion

  // #region Floating module
  floatingMenu: null,
  setFloatingMenu: fm => set( state => (
    JSON.stringify(fm) === JSON.stringify(state.floatingMenu) ?
    { floatingMenu: null } : 
    { floatingMenu: fm, selectedBuildingType: { special: null, type: null, dimensions: [ 0, 0 ] } }
  )),
  // #endregion

  // #region error handling
  error: {},
  setError: e => set( state => ({
    error: e
  }))
  // #endregion
});

const useBuildingStore = create(devtools(buildingStore));

export { useBuildingStore };