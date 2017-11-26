export const NEXT_GENERATION = 'NEXT_GENERATION';
export const CHANGE_CELL_ALIVENESS = 'CHANGE_CELL_ALIVENESS';

export function toNextGeneration(){
  return {
    type:NEXT_GENERATION,
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
