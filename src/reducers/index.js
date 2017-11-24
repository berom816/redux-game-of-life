import { combineReducers } from 'redux';
import GenerationReducer from './reducer_generation';

const rootReducer = combineReducers({
  generation:GenerationReducer
});

export default rootReducer;
