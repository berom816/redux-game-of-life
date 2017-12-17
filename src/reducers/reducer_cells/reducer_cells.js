import _ from 'lodash';
import {CHANGE_CELL_ALIVENESS} from '../../actions';
import {TO_NEXT_GENERATION} from '../../actions';
import {CLEAR_CELLS} from '../../actions';
import countAliveNeighbors from './countAliveNeighbors';

const NUMBER_OF_ROWS = 30;
const NUMBER_OF_COLUMNS = 50;
let leftEdgeCellsIndexes = getLeftEdgeCellsIndexes(NUMBER_OF_ROWS, NUMBER_OF_COLUMNS);;
let rightEdgeCellsIndexes = getRightEdgeCellsIndexes(NUMBER_OF_ROWS, NUMBER_OF_COLUMNS);;
const initialCells = {};

//build initial cell population
for(let a = 0; a < NUMBER_OF_ROWS * NUMBER_OF_COLUMNS; a++){
  let aliveRandom = Math.floor(((Math.random()) * a)) % 2 === 0;
  initialCells[a] = {
    index:a,
    alive:aliveRandom
  }
}

//get the indexes of cells on the left most edge of board
function getLeftEdgeCellsIndexes(rows, columns){
  // console.log('in left edge indexes');
  const leftEdgeCellsIndexes = [];
  for(let i = 0; i < rows * columns; i+=columns){
    leftEdgeCellsIndexes.push(i);
  }
  return leftEdgeCellsIndexes;
}

//get the indexes of cells on the right most edge of board
function getRightEdgeCellsIndexes(rows, columns){
  const rightEdgeCellsIndexes = [];
  for(let i = columns - 1; i < rows * columns; i+=columns){
    rightEdgeCellsIndexes.push(i);
  }
  return rightEdgeCellsIndexes;
}

//cell population reducer
export default function(state = initialCells, action){
  switch (action.type) {
    case CHANGE_CELL_ALIVENESS:
      const changedCell = action.payload.cell;
      const newState = {...state};
      newState[changedCell.index] = changedCell;
      return newState;
    case TO_NEXT_GENERATION:
      const currentGenCells = {...state};
      const nextGenCells = {};
      //iterate through currentGenCells and make the next generation cells
      _.forOwn(currentGenCells, (key, value)=>{
        //referencing key holds the value, not through referencing value...
        nextGenCells[key.index] = {
          index:key.index
        }
        let aliveNeighbors = countAliveNeighbors(currentGenCells, key.index, NUMBER_OF_ROWS, NUMBER_OF_COLUMNS, leftEdgeCellsIndexes, rightEdgeCellsIndexes);
        if(key.alive){
          nextGenCells[key.index]['alive'] = (aliveNeighbors === 2 || aliveNeighbors === 3)?true:false;
        }else{
          nextGenCells[key.index]['alive'] = (aliveNeighbors === 3)?true:false;
        }
      });
      return nextGenCells;
    case CLEAR_CELLS:
      const allEmptyCells = {};

      //build cell population with all cells not alive
      for(let a = 0; a < NUMBER_OF_ROWS * NUMBER_OF_COLUMNS; a++){
        allEmptyCells[a] = {
          index:a,
          alive:false
        }
      }
      return allEmptyCells;
    default:
      return state;
  }
}
