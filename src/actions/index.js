export const CHANGE_CELL_ALIVENESS = 'CHANGE_CELL_ALIVENESS';
export const TO_NEXT_GENERATION = 'TO_NEXT_GENERATION';
export const CLEAR_CELLS = 'CLEAR_CELLS';
export const TURN_ON_OFF = 'TURN_ON_OFF';
export const CREATE_TIMER = 'CREATE_TIMER';
export const CLEAR_TIMER = 'CLEAR_TIMER';

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

export function turnOnOff(onOff){
  return {
    type:TURN_ON_OFF,
    payload:onOff
  }
}

export function createTimer(timerID){
  return {
    type:CREATE_TIMER,
    payload:timerID
  }
}

export function clearTimer(timerID){
  clearInterval(timerID);
  return {
    type:CLEAR_TIMER,
    payload:null
  }
}
