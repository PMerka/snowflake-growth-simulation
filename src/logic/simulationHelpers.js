/**
 * Returns squere grid of numbers coresponding to initial background
 * @param {number} size 
 * @param {number} initValue 
 * @param {number} randomness 
 * @returns Array of arrays
 */
function getGrid(size, initValue, randomness){
  if(initValue+randomness>1){
    console.error("Bad initial condition! (initValue + randomness) is bigger than 1!")
    return null
  }

  let grid = [];
  for (let row = 0; row < size; row += 1) {
    let newRow = [];
    for (let cell = 0; cell < size; cell += 1) {
      newRow.push(initValue + randomness * Math.random());
    }
    grid.push(newRow);
  }
  return grid
}

function getZeroMatrix(size){
  var snowPart = [];
  for (let i = 0; i < size; i += 1) {
    const newArr = new Array(size).fill(0);
    snowPart.push(newArr);
  }
  return snowPart
}


function copyNeighbours(row, collumn, from, to, add = 0) {
    if (row % 2 === 0) {
      //odd row
      to[row - 1][collumn] = from[row - 1][collumn] + add;
      to[row - 1][collumn + 1] = from[row - 1][collumn + 1] + add;
      to[row][collumn - 1] = from[row][collumn - 1] + add;
      to[row][collumn] = from[row][collumn] + add;
      to[row][collumn + 1] = from[row][collumn + 1] + add;
      to[row + 1][collumn] = from[row + 1][collumn] + add;
      to[row + 1][collumn + 1] = from[row + 1][collumn + 1] + add;
    } else {
      //even row
      to[row - 1][collumn] = from[row - 1][collumn] + add;
      to[row - 1][collumn - 1] = from[row - 1][collumn - 1] + add;
      to[row][collumn - 1] = from[row][collumn - 1] + add;
      to[row][collumn] = from[row][collumn] + add;
      to[row][collumn + 1] = from[row][collumn + 1] + add;
      to[row + 1][collumn] = from[row + 1][collumn] + add;
      to[row + 1][collumn - 1] = from[row + 1][collumn - 1] + add;
    }
}

function deleteNeighbours(row, collumn, to) {
    if (row % 2 === 0) {
      //liché
      to[row - 1][collumn] = 0;
      to[row - 1][collumn + 1] = 0;
      to[row][collumn - 1] = 0;
      to[row][collumn] = 0;
      to[row][collumn + 1] = 0;
      to[row + 1][collumn] = 0;
      to[row + 1][collumn + 1] = 0;
    } else {
      to[row - 1][collumn] = 0;
      to[row - 1][collumn - 1] = 0;
      to[row][collumn - 1] = 0;
      to[row][collumn] = 0;
      to[row][collumn + 1] = 0;
      to[row + 1][collumn] = 0;
      to[row + 1][collumn - 1] = 0;
    }
}

function update(row, collumn, grid, ice, vapor, diffusionParams = {a: 1/12, b: 6/12}) {
    // blurr consants
    /*
    const alpha = 1.5
    const a = 1 / 12 * alpha;
    const b = 1 - 6 / 12 * alpha;
    */
    const {a, b} = diffusionParams
  
    if (row % 2 === 0) {
      //liché
      grid[row][collumn] =
        a * vapor[row - 1][collumn] +
        a * vapor[row - 1][collumn + 1] +
        a * vapor[row][collumn - 1] +
        b * vapor[row][collumn] +
        a * vapor[row][collumn + 1] +
        a * vapor[row + 1][collumn] +
        a * vapor[row + 1][collumn + 1] +
        ice[row][collumn];
    } else {
      grid[row][collumn] =
        a * vapor[row - 1][collumn] +
        a * vapor[row - 1][collumn - 1] +
        a * vapor[row][collumn - 1] +
        b * vapor[row][collumn] +
        a * vapor[row][collumn + 1] +
        a * vapor[row + 1][collumn] +
        a * vapor[row + 1][collumn - 1] +
        ice[row][collumn];
    }
}

function changeBackgroundValue(grid, size, newValue, randomness){
  if(newValue+randomness>1){
    console.error("Bad initial condition! (initValue + randomness) is bigger than 1!")
    return null
  }

  let newgrid = [];
  for (let row = 0; row < size; row += 1) {
    let newRow = [];
    for (let cell = 0; cell < size; cell += 1) {
      if (grid[row][cell]<1) {
        newRow.push(newValue + randomness * Math.random());
      }
      else{
        newRow.push(grid[row][cell])
      }
      
    }
    newgrid.push(newRow);
  }
  return newgrid
}

export {copyNeighbours, deleteNeighbours, update, getGrid, getZeroMatrix, changeBackgroundValue}