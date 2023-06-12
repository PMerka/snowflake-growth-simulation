import CloseIcon from "./svgs/close.svg"
import React from 'react'
import './Btn.css'

function Close({onClick, className}) {
  const runing = false
  return (
    <button onClick={onClick} className={`btn-round btn-sm ${className}`}>
      <img className="icon" src={CloseIcon} alt="stop" /> 
    </button> 
  )
}

export default Close
