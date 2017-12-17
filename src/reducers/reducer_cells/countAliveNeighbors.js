//calculate how many alive neighbors around a cell
export default function countAliveNeighbors(cells, index, numberOfRows, numberOfColumns, leftEdgeCellsIndexes, rightEdgeCellsIndexes){
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
