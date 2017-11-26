import { combineReducers } from 'redux';
import GenerationReducer from './reducer_generation';
import CellsReducer from './reducer_cells';

const rootReducer = combineReducers({
  generation:GenerationReducer,
  cells:CellsReducer
});

export default rootReducer;
