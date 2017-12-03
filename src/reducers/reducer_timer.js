import {CREATE_TIMER} from '../actions';
import {CLEAR_TIMER} from '../actions';


export default function(state = null, action){
  switch (action.type) {
    case CREATE_TIMER:
      return action.payload;
    case CLEAR_TIMER:
      return null;
    default:
      return state;
  }
}
