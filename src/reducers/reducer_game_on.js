import {TURN_ON_OFF} from '../actions';

export default function(state = true, action){
  switch(action.type) {
    case TURN_ON_OFF:
      return action.payload;
    default:
      return state;
  }
}
