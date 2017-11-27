import {TO_NEXT_GENERATION} from '../actions';
import {CLEAR_CELLS} from '../actions';

export default function(state = 0, action){
  switch (action.type) {
    case TO_NEXT_GENERATION:
      const nextGeneration = state + 1;
      return nextGeneration;
    case CLEAR_CELLS:
      return 0;
    default:
      return state;
  }
}
