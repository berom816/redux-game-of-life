import { combineReducers } from 'redux';
import GenerationReducer from './reducer_generation';
import CellsReducer from './reducer_cells';
import GameOnReducer from './reducer_game_on';
import TimerReducer from './reducer_timer';
// import {NUMBER_OF_ROWS, NUMBER_OF_COLUMNS, getLeftEdgeCellsIndexes, getRightEdgeCellsIndexes} from './reducer_edge_cells';

const rootReducer = combineReducers({
  generation:GenerationReducer,
  cells:CellsReducer,
  gameON:GameOnReducer,
  timer:TimerReducer
});

export default rootReducer;
