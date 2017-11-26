import {CHANGE_CELL_ALIVENESS} from '../actions';

const cells = {};

for(let a = 0; a<1500; a++){
  cells[a] = {
    index:a,
    alive:true
  }
}

export default function(state = cells, action){
  switch (action.type) {
    case CHANGE_CELL_ALIVENESS:
      const changedCell = action.payload.cell;
      const newState = {...state};
      newState[changedCell.index] = changedCell;
      return newState;
    default:
      return state;
  }
}
