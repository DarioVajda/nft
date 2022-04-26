import { generateUUID } from 'three/src/math/MathUtils'
import create from 'zustand'
import {gridDimensions,gridSize,plotSize} from './GridData'


const useBuildingStore = create((set) => ({
    buildings: [],
    grid: Array(gridSize*gridSize).fill(null,0,gridSize*gridSize),
    uuid: generateUUID(),
    selectedBuilding: null,
    buildMode:true,
    hoveredXYCurrent:{x:0,y:0},
    hoveredXYPrevious:{x:0,y:0},
    selectBuilding: (type) => set(() => ({selectedBuilding:type})),
    setBuildMode: (mode)=>  set(()=>  ({buildMode:mode})),
    setHoveredXY: (x,y)=> set((state)=>  ({hoveredXYPrevious:state.hoveredXYCurrent,hoveredXYCurrent:{x:x,y:y}})),
    addBuilding: ([x0,y0],[x1,y1], type) => set((state) => ({ uuid:generateUUID(),
                                                              buildings: [...state.buildings, {start:[x0,y0],end:[x1,y1],type:type,uuid:state.uuid}],
                                                              grid: buildingToGrid([x0,y0],[x1,y1],state.uuid,state.grid)})),
    removeBuilding: (uuid) => set((state) => ({buildings: state.buildings.filter(building => building.uuid!=uuid),
                                               grid: removeBuildingFromGrid(state.grid,uuid)}))
  }))


//Function to add building to grid
function buildingToGrid([x0,y0],[x1,y1],uuid,grid){ 
    for (let i = x0; i <= x1; i++) {
      for (let j = y0; j <= y1; j++) {
        grid[i*gridSize+j]=uuid;
      }
    }
    return grid;
  }

function removeBuildingFromGrid(grid,uuid){
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if(grid[i*gridSize+j]==uuid){
        grid[i*gridSize+j]=null;
      }
    }
  }
  return grid;
}



export {useBuildingStore};