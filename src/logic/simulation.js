import { getGrid, changeBackgroundValue } from "./simulationHelpers.js"
import {snowGrowth} from "./snowGrowth.js"
import rectMap from "./rectMap.js"

export const defaultSetting = {
    size: 400,
    backgroundValue: 0.4, //beta
    backgroundRandomness: 0, //beta_random
    addConstant: 0.001, //gama
    alpha: 1, //difusion
}

/**
 * Main class - controls simulation and store the canvas grid
 */
class Simulation{
    constructor({size, backgroundValue, backgroundRandomness, addConstant, alpha}){
        this.size = size
        this.initValue = backgroundValue
        this.randomness = backgroundRandomness
        this.addConstant = addConstant
        this.alpha = alpha

        this.grid = getGrid(size, backgroundValue, backgroundRandomness)
        this.calcDifusionParams()
        const center = [Math.floor(size / 2), Math.floor(size / 2)];
        this.grid[center[1]][center[0]] = 1;
    }

    /**
     * Updates grid size to newSize
     * @param {number} newSize 
     */
    changeResolution = (newSize) => {
        this.size = newSize
        this.grid = getGrid(this.size, this.initValue, this.randomness)
        const center = [Math.floor(this.size / 2), Math.floor(this.size / 2)];
        this.grid[center[1]][center[0]] = 1;
        this.display = new rectMap(this.canvasRef, this.size)
    }

    changeDiffusion = (newAlpha) => {
        this.alpha = newAlpha
        this.calcDifusionParams()
    }

    changeAddConstant = (newAddConstant) => {
        this.addConstant = newAddConstant
    }

    changeBackground = (newValue, randomness = 0) => {
        this.grid = changeBackgroundValue(this.grid, this.size, newValue, randomness)
    }

    calcDifusionParams(){
        this.diffusionParams = {a: 1 / 12 * this.alpha, b: 1 - 6 / 12 * this.alpha}
    }

    setCanvasRef(canvasRef){
        this.canvasRef = canvasRef
        this.display = new rectMap(this.canvasRef, this.size)
    }

    newIteration(){
        snowGrowth(this.grid, this.size, this.display, this.addConstant, this.diffusionParams)
    }
}

export const mainSimulation = new Simulation(defaultSetting)