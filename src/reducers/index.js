import { combineReducers } from 'redux';
import GenerationReducer from './reducer_generation';
import CellsReducer from './reducer_cells';
// import {NUMBER_OF_ROWS, NUMBER_OF_COLUMNS, getLeftEdgeCellsIndexes, getRightEdgeCellsIndexes} from './reducer_edge_cells';

const rootReducer = combineReducers({
  generation:GenerationReducer,
  cells:CellsReducer
  // rows:NUMBER_OF_ROWS,
  // columns:NUMBER_OF_COLUMNS,
  // leftEdgeCellsIndexes:getLeftEdgeCellsIndexes,
  // rightEdgeCellsIndexes:getRightEdgeCellsIndexes,
});

export default rootReducer;
