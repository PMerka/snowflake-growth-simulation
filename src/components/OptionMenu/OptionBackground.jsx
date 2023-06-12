import React from 'react'
import { useState } from 'react'
import './OptionElement.css'


function OptionBackground({initValue, initRandomness, setValueFunction, rangeMin, rangeMax, step}) {

  const title = "Background value"
  const symbol = "β"
  const [optionValue, setOptionValue] = useState(initValue)
  const [randomness, setRandomness] = useState(initRandomness)

  const handleSetValue = (value) => {
    setOptionValue(value)
    setValueFunction(Number(optionValue), Number(randomness))
    
  }

  const handleSetRandomness = (value) => {
    setRandomness(value)
    setValueFunction(Number(optionValue), Number(randomness))
    
  }

  return (
    <div className='option-element'>
      <div className='option-row'>
        {title}        
      </div>
      
      <div className='option-row'>
        {symbol} = 
        <input className='number-input width-2' type="number" onChange={(e) => handleSetValue(e.target.value)} min={rangeMin} max={rangeMax} step={step} value={parseFloat(optionValue).toFixed(2)}/>
      </div>

      <div className='option-row'>
        <input type="range" onChange={(e) => handleSetValue(e.target.value)} min={rangeMin} max={rangeMax} step={step} value={optionValue}/>
      </div>

      <div className='option-row'>
        <i>{symbol} <sub>random</sub> =
        <input className='number-input width-3' type="number" onChange={(e) => handleSetRandomness(e.target.value)} min={rangeMin} max={rangeMax} step={step} value={parseFloat(randomness).toFixed(3)}/></i>
      </div>

      <div className='option-row'>
        <input type="range" onChange={(e) => handleSetRandomness(e.target.value)} min={0} max={0.1} step={0.001} value={randomness}/>
      </div>
    
    </div>
  )
}

export default OptionBackground
