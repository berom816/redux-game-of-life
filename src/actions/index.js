// export const NEXT_GENERATION = 'NEXT_GENERATION';
export const CHANGE_CELL_ALIVENESS = 'CHANGE_CELL_ALIVENESS';
export const TO_NEXT_GENERATION = 'TO_NEXT_GENERATION';
export const CLEAR_CELLS = 'CLEAR_CELLS';

export function toNextGeneration(){
  return {
    type:TO_NEXT_GENERATION,
    payload:null
  }
}

export function changeCellAliveness(index, alive){
  const changedCell = {
    index:index,
    alive:!alive
  }

  return {
    type:CHANGE_CELL_ALIVENESS,
    payload:{
      cell:changedCell
    }
  }
}

export function clearCells(){
  return {
    type:CLEAR_CELLS,
    payload:null
  }
}
