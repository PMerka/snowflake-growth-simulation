import RestartIcon from "./svgs/restart.svg"
import React from 'react'
import './Btn.css'

function Restart({onClick}) {
  return (
    <button onClick={onClick} className="btn-round btn-sm">
      <img className="icon" src={RestartIcon} alt="stop" /> 
    </button> 
  )
}

export default Restart
