import { combineReducers } from 'redux';
// import GenerationReducer from './reducer_generation';
import GenerationReducer from './generationTemp.js';


const rootReducer = combineReducers({
  generation:GenerationReducer
});

export default rootReducer;
