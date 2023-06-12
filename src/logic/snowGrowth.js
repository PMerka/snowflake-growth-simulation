import {
  copyNeighbours,
  deleteNeighbours,
  update,
  getZeroMatrix
} from "./simulationHelpers.js";


export function snowGrowth(grid, size, display, addConstant, diffusionParams) {
    console.log(display)
    var startTime = performance.now()
  
    //init receptive and nonreceptive part
    let nonreceptive = structuredClone(grid);
    let receptive = getZeroMatrix(size)
  
    // cells with value > 1 are consider as ice
    // ice cell and its neighbours are copied to the receptive part + const is added
    // in nonreceptive part are ice cells removed
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        if (grid[i][j] >= 1) {
          copyNeighbours(i, j, grid, receptive, addConstant);
          deleteNeighbours(i, j, nonreceptive);
        }
      }
    }
  
    //calculate diffusion on nonreceptive part, add receptive part and update grid
    for (let i = 1; i < size - 1; i += 1) {
      for (let j = 1; j < size - 1; j += 1) {
        update(i, j, grid, receptive, nonreceptive, diffusionParams);
      }
    }
    var endTime = performance.now()
    console.log(`Time to calculate one iteration ${endTime - startTime} milliseconds`)
    
    startTime = performance.now()
    display.update(grid)
    endTime = performance.now()
    console.log(`Time to display one iteration ${endTime - startTime} milliseconds`)
}