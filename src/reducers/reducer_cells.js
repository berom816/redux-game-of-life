import _ from 'lodash';
import {CHANGE_CELL_ALIVENESS} from '../actions';
import {TO_NEXT_GENERATION} from '../actions';
import {CLEAR_CELLS} from '../actions';

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

//calculate how many alive neighbors around a cell
function getAliveNeighbors(cells, index, numberOfRows, numberOfColumns, leftEdgeCellsIndexes, rightEdgeCellsIndexes){
  let aliveNeighbors = 0;

  //look at top-left neighbor, won't have top left neighbor if current cell is on left-most column or top row
  if(index - numberOfColumns - 1 >= 0 && !leftEdgeCellsIndexes.includes(index)){
    if(cells[index - numberOfColumns - 1].alive){
      aliveNeighbors++;
    }
  }

  //look at top neighbor, won't have top neighbor if current cell is on top-most row
  if(index - numberOfColumns >= 0){
    if(cells[index - numberOfColumns].alive){
      aliveNeighbors++;
    }
  }

  //look at top-right neighbor, won't have top right neighbor if current cell is on right-most column or top row
  if(index - numberOfColumns + 1 >= 0 && !rightEdgeCellsIndexes.includes(index)){
    if(cells[index - numberOfColumns + 1].alive){
      aliveNeighbors++;
    }
  }
  //look at left neighbor, won't have left neighbor if current cell is on left-most column
  if(!leftEdgeCellsIndexes.includes(index)){
    if(cells[index-1].alive){
      aliveNeighbors++;
    }
  }

  //look at right neighbor, won't have right neighbor if current cell is on right-most column
  if(!rightEdgeCellsIndexes.includes(index)){
    if(cells[index+1].alive){
      aliveNeighbors++;
    }
  }

  //look at bottom-left neighbor, won't have bottom-left neighbor if current cell is on left-most column or lowest row
  if(index + numberOfColumns - 1 < numberOfRows * numberOfColumns && !leftEdgeCellsIndexes.includes(index)){
    if(cells[index + numberOfColumns - 1].alive){
      aliveNeighbors++;
    }
  }

  //look at bottom neighbor, won't have bottom neighbor if current cell is on lowest row
  if(index + numberOfColumns < numberOfRows * numberOfColumns){
    if(cells[index + numberOfColumns].alive){
      aliveNeighbors++;
    }
  }

  //look at bottom-right neighbor, won't have bottom-right neighbor if current cell is on right-most column or lowest row
  if((index + numberOfColumns + 1 < numberOfRows * numberOfColumns) && !rightEdgeCellsIndexes.includes(index)){
    if(cells[index + numberOfColumns + 1].alive){
      aliveNeighbors++;
    }
  }

  return aliveNeighbors;
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
        let aliveNeighbors = getAliveNeighbors(currentGenCells, key.index, NUMBER_OF_ROWS, NUMBER_OF_COLUMNS, leftEdgeCellsIndexes, rightEdgeCellsIndexes);
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
