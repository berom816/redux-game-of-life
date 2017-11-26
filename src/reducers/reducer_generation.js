import {NEXT_GENERATION} from '../actions';

export default function(state = 0, action){
  switch (action.type) {
    case NEXT_GENERATION:
        const nextGeneration = state + 1;
        return nextGeneration;
    default:
      return state;
  }
}
