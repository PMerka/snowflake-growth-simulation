import React from 'react'
import { useState } from 'react'
import './OptionElement.css'


function OptionAddConstant({initValue, setValueFunction, rangeMin, rangeMax, step}) {
  const decimalPlaces = -Math.log10(step)
  const rangeMinExponent = Math.log10(rangeMin)
  const rangeMaxExponent = Math.log10(rangeMax)

  const title="Add constant"
  const symbol="γ"

  const [optionValueExp, setOptionValueExp] = useState(Math.log10(initValue))
  const [optionValue, setOptionValue] = useState(initValue)

  const handleRangeSetValue = (value) => {
    const exponent = Number(value)
    const zeroCutoff = step
    setOptionValueExp(exponent)
    if (10**exponent<zeroCutoff){
      setValueFunction(0)
      setOptionValue(0)
      return
    }
    const newValue = 10**Number(value)
    setValueFunction(newValue)
    setOptionValue(newValue)
  }

  const handleSetValue = (value) => {
    const newValue = Number(value)
    if (newValue>rangeMax){
      return
    }
    const zeroCutoff = step
    setOptionValue(newValue)
    setValueFunction(newValue)
    if(newValue<zeroCutoff){
      setOptionValueExp(rangeMinExponent)
      return
    }
    const exponent = Math.log10(newValue)
    setOptionValueExp(exponent)
  }

  return (
    <div className='option-element'>
      <div className="option-row">{title}</div>
      
      <div className='option-row'>
        {symbol} =
        <input type="number" 
        onChange={(e) => handleSetValue(e.target.value)} 
        className='number-input width-4' min={rangeMin} max={rangeMax} step={step} value={parseFloat(optionValue).toFixed(decimalPlaces)}/>
      </div>
      
      <div className='option-row'>
        <input type="range" 
        onChange={(e) => handleRangeSetValue(e.target.value)} 
        min={rangeMinExponent} max={rangeMaxExponent} step={step} value={optionValueExp}/> 
      </div>

    </div>
  )
}

export default OptionAddConstant
