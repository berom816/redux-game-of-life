import { combineReducers } from 'redux';
import GenerationReducer from './reducer_generation';
import CellsReducer from './reducer_cells/reducer_cells';
import GameOnReducer from './reducer_game_on';
import TimerReducer from './reducer_timer';

const rootReducer = combineReducers({
  generation:GenerationReducer,
  cells:CellsReducer,
  gameON:GameOnReducer,
  timer:TimerReducer
});

export default rootReducer;
