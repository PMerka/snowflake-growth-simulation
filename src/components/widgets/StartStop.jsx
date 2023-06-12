import StopIcon from "./svgs/stop.svg"
import StartIcon from "./svgs/play.svg"
import React, { useState } from 'react'
import './Btn.css'

function StartStop({start, stop, intervalID}) {
  const [running, setRunning] = useState(false)

  if (intervalID === null){
    return(
      <button className="btn-round" onClick={() => start()}>
        <img className="icon" src={StartIcon} alt="start" />
      </button>
    )
  }

  return(
    <button className="btn-round" onClick={() => stop()}>
      <img className="icon" src={StopIcon} alt="stop" />
    </button>
  )
}

export default StartStop
