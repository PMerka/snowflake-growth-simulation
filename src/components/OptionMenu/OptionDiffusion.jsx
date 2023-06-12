import React from "react";
import { useState } from "react";
import "./OptionElement.css";

function OptionDiffusion({
  title,
  symbol,
  initValue,
  setValueFunction,
  rangeMin,
  rangeMax,
  step,
}) {
  const decimalPlaces = 2;
  const [optionValue, setOptionValue] = useState(initValue);

  const handleSetValue = (value) => {
    setValueFunction(Number(value));
    setOptionValue(value);
  };

  return (
    <div className="option-element">
      <div className="option-row">{title}</div>

      <div className="option-row">
        {symbol} =
        <input
          type="number"
          className="number-input width-2"
          onChange={(e) => handleSetValue(e.target.value)}
          min={rangeMin}
          max={rangeMax}
          step={step}
          value={parseFloat(optionValue).toFixed(decimalPlaces)}
        />
      </div>

      <div className="option-row">
        <input
          type="range"
          onChange={(e) => handleSetValue(e.target.value)}
          min={rangeMin}
          max={rangeMax}
          step={step}
          value={optionValue}
        />
      </div>
    </div>
  );
}

export default OptionDiffusion;
