import React from 'react'
import { useState, useEffect } from 'react';
import { ethers } from "ethers";

import styles from './htmlContent.module.css';

import { useBuildingStore } from '../BuildingStore';

import Hover from '../../universal/hover/Hover';
import MoneyIcon from '../../universal/icons/MoneyIcon';
import IncomeIcon from '../../universal/icons/IncomeIcon';
import EducatedCityIcon from '../../universal/icons/achievement_icons/EducatedCityIcon';
import AchievementFrame from '../../universal/icons/achievement_icons/AchievementFrame';
import ArrowIcon from '../../universal/icons/ArrowIcon';

import PopupModule from '../../universal/PopupModule';
import AchievementList from '../../achievements/AchievementList';

import { buildingDimensions, specialBuildingDimensions, buildingStats, specialPrices } from '../../../../server/gameplay/building_stats';
import { formatNumber } from '../../utils/numFormat';

const BuildingButton = ({ special, selected, type, changeType, element }) => {

  const changeDimensions = useBuildingStore(state => state.changeDimensions);
  const specialTypeData = useBuildingStore(state => state[`type_${element}`]);
  const changeSpecialBuildingData = useBuildingStore(state => state.changeSpecialBuildingData);
  const setPopup = useBuildingStore(state => state.setPopup);

  const changeDimensionsClick = (e, arg) => {
    e.stopPropagation();
    changeDimensions(arg);
  }

  // console.log({type: element, ...specialTypeData});
  let _cost = specialTypeData?.soldOut ? 'Make Offer' : (special ? specialPrices.get(element) : buildingStats.get(element)[0].cost);
  if(element === 'building' || element === 'park') {
    if(type.type === element) {
      _cost *= type.dimensions[0] * type.dimensions[1];
    }
    else {
      _cost *= buildingDimensions.get(element)[0][0] * buildingDimensions.get(element)[0][1];
    }
  }
  const [cost, setCost] = useState(_cost);

  const delay = async (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  const updateCost = async () => {
    // play animation changing the cost
    
    // wait x amount of time
    await delay(5000 * (1 + Math.random()));

    // #region get the new cost
    let _data = await (await fetch(`http://localhost:8000/specialtype/${element}`)).json();
    changeSpecialBuildingData(_data, element);
    let newPrice;
    if(_data.soldOut) {
      // finding the highest offer value
      newPrice = _data.offers.reduce(
        (prev, curr) => {
          if(curr.value > prev) {
            return curr.value;
          }
          else {
            return prev;
          }
        },
        0
      )
    }
    else {
      newPrice = specialPrices.get(element);
    }
    setCost[newPrice];
    // #endregion
  }

  useEffect(() => {
    if(special) {
      // only calling this function if it is a speical building, because the cost of normal buildings is always fixed
      // updateCost();
    }
  }, [ cost ]);

  const onClick = () => {
    if(specialTypeData?.soldOut !== true) {
      changeType(special, element);
    } 
    else {
      setPopup({ type: 'make-offer', options: { type: element, ...specialTypeData } });
    }
  }

  let moreOptions = selected && ((!special && buildingDimensions.get(element).length > 1) || (special && specialBuildingDimensions.get(element).length > 1));
  return (
    <button onClick={onClick} style={selected ? { backgroundColor: 'var(--primary)' }:{}}>
      <div>
        {element}
      </div>
      <div>
        {
          selected && !special ?
          <div>
            {
              moreOptions ?
              <div onClick={(e) => changeDimensionsClick(e, -1)}>
                <ArrowIcon direction={3} />
              </div> :
              <></>
            }
            <span style={{ fontSize: '.8rem' }}>
              {element}
              <br />
              {type.dimensions[0]}x{type.dimensions[1]}
            </span>
            {
              moreOptions ?
              <div onClick={(e) => changeDimensionsClick(e, 1)}>
                <ArrowIcon direction={1} />
              </div> :
              <></>
            }
          </div> :
          special ?
          <div>
            <span style={{ fontSize: '.75rem' }}>
              {
                specialTypeData?.soldOut === true ?
                <span style={{ fontSize: '.9rem' }}>Sold out</span> :
                <>
                  {element} <br /> 
                  <span style={{ fontSize: '.9rem' }}>{specialTypeData?.count} left</span>
                </>
              }
            </span>
          </div> :
          <div />
        }
        <span>
          {
            typeof cost === 'number' ? 
            <>
              <MoneyIcon /> {formatNumber(cost)}
            </> : 
            cost // in this case the cost variable contains the message "Make Offer"
          }
        </span>
      </div>
    </button>
  )
}

const SaveBtn = ({ id }) => {

  const instructions = useBuildingStore(state => state.instructions);
  const setPopup = useBuildingStore(state => state.setPopup);

  const saveChanges = async () => {
    if(instructions.length === 0) return;

    if(!window.ethereum) {
      setPopup({
        message: 'User does not have the Metamask extensions installed',
        type: 'error-popup-widget'
      });
      return;
    }

    const message = `Save changes in City #${id} (unique ID - ${Math.floor(Math.random()*999999999)})`;

    let signature;
    try {
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      signature = await signer.signMessage(message);
    } 
    catch (error) {
      setPopup({ 
        message: error.message, 
        type: 'error-pupup-msg' 
      });
      return;
    }

    let body = {
      instructions: instructions, // the list of instructions to be performed
      message: message, // this is a unique message that is never going to be the same for the same person
      signature: signature, // this is the signature of the user
    }
    
    const response = await fetch(`http://localhost:8000/cities/${id}/instructions`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
    });
    console.log(response);
  }

  return (
    <button className={styles.saveBtn} onClick={saveChanges} style={ instructions.length>0 ? {backgroundColor: 'var(--primary)'} : {} }>
      Save changes
    </button>
  )
}

const HTMLContent = ({ id }) => {

  const [ achievementPopup, setAchievementPopup ] = useState(false);
  const setPopup = useBuildingStore(state => state.setPopup);

  const dynamicData = useBuildingStore(state => state.dynamicData);
  const staticData = useBuildingStore(state => state.staticData);
  
  const selectedBuildingType = useBuildingStore(state => state.selectedBuildingType);
  const setSelectedBuildingType = useBuildingStore(state => state.setSelectedBuildingType);

  const toggleProductivityMap = useBuildingStore(state => state.toggleProductivityMap);
  const showProductivityMap = useBuildingStore(state => state.showProductivityMap);

  const [openedMenu, setOpenedMenu] = useState(null);

  const changeOpenedMenu = (om) => {
    setSelectedBuildingType(null, null);
    if(openedMenu === om) {
      setOpenedMenu(null);
    }
    else {
      setOpenedMenu(om);
    }
  }

  const changeSelectedBuildingType = (special, sbt) => {
    if(sbt === selectedBuildingType.type) {
      setSelectedBuildingType(null, null, [0, 0]);
    }
    else {
      setSelectedBuildingType(special, sbt);
    }
  }

  const normalBuildingButtons = [ 'house', 'building', 'factory', 'office', 'store', /* 'superMarket', 'gym', */ 'park' ];
  const specialBuildingButtons = [ 'statue', 'fountain', 'stadium', 'school', 'shoppingmall', 'promenade', 'townhall' ];

  if(staticData.owner === '0x00') return <></>
  else return (
    <div className={styles.contentWrapper}>
      {/* <PopupModule open={achievementPopup} width={75} height={85} unit={'%'} >
        <AchievementList id={id} closePopup={() => setAchievementPopup(false)} />
      </PopupModule> */}
      <div className={styles.topData}>
        <Hover info='Money' underneath={true} childWidth='10em' specialId='Money' sidePadding='0.5em' >
          <div className={styles.topDataElement}>
            <MoneyIcon /> 
            <div>{dynamicData.money.toLocaleString('en-US')}</div>
          </div>
        </Hover>
        <Hover info='Income' underneath={true} childWidth='10em' specialId='Income' sidePadding='0.5em' >
          <div className={styles.topDataElement}>
            <IncomeIcon /> 
            <div>{dynamicData.income.toLocaleString('en-US')}</div>
          </div>
        </Hover>
        <Hover info='Educated' underneath={true} childWidth='10em' specialId='Educated' sidePadding='0.5em' >
          <div className={styles.topDataElement}>
            <EducatedCityIcon size={1} unit="em" /> {/* TODO This is temporary (make new icons) */} 
            <div>{dynamicData.educated}/{dynamicData.educatedWorkers}</div>
          </div>
        </Hover>
        <Hover info='Uneducated' underneath={true} childWidth='10em' specialId='Uneducated' sidePadding='0.5em' >
          <div className={styles.topDataElement}>
            <EducatedCityIcon size={1} unit="em" /> {/* TODO This is temporary (make new icons) */} 
            <div>{dynamicData.normal}/{dynamicData.normalWorkers}</div>
          </div>
        </Hover>
        <div>Income in 54m</div>
        <SaveBtn id={id} />
      </div>
      <div className={styles.middleUI}>
        <label className={styles.productivityMap}>
          Productivity Map
          <input type="checkbox" checked={showProductivityMap===true} onChange={() => toggleProductivityMap(!(showProductivityMap===true))} />
        </label>
      </div>
      <div className={styles.bottomUI}>
        <div className={styles.buildingListGroup}>
          {/* <button onClick={() => setAchievementPopup(true)}> */}
          <button onClick={() => setPopup({ type: 'achievements' })}>
            <AchievementFrame backgroundColor='transparent' size={5} unit='em' />
            Achievements
          </button>
        </div>
        <div className={`${styles.buildingListGroup} ${openedMenu === 'normal' ? styles.expandedBuildingMenu : ''}`} style={ openedMenu === 'normal' ? { width: `${(normalBuildingButtons.length+1)*7.5-0.5}em` } : {}}> {/* if changing the width of the elements change the number 7.5 to width+0.5 */}
          <button onClick={() => changeOpenedMenu('normal')}>normal</button>
          {
            normalBuildingButtons.map((element, index) => (
              <BuildingButton 
                key={index}
                special={false} 
                selected={selectedBuildingType.type === element && !selectedBuildingType.special} 
                type={selectedBuildingType} 
                changeType={changeSelectedBuildingType} 
                element={element} 
              />
            ))
          }
        </div>
        <div className={`${styles.buildingListGroup} ${openedMenu === 'special' ? styles.expandedBuildingMenu : ''}`} style={ openedMenu === 'special' ? { width: `${(specialBuildingButtons.length+1)*7.5-0.5}em` } : {}}>
          <button onClick={() => changeOpenedMenu('special')}>special</button>
          {
            specialBuildingButtons.map((element, index) => (
              <BuildingButton 
                key={index}
                special={true} 
                selected={selectedBuildingType.type === element && selectedBuildingType.special} 
                type={selectedBuildingType} 
                changeType={changeSelectedBuildingType} 
                element={element}
              />
            ))
          }
        </div>
      </div>

      {/* <button onClick={() => console.log('button click')}>Dugme</button> */}
    </div>
  )
}

export default HTMLContent