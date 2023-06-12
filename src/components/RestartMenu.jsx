import React, { useState } from 'react'
import Close from './widgets/Close'
import TextButton from './widgets/TextButton'
import './PopUp.css'
import './RestartMenu.css'

function RestartMenu({restartFunction, setVisible}) {
  const [resolution, setResolution] = useState(500)

  const handleResolution = (resolutionValue) => {
    setResolution(resolutionValue)
  }

  const handleRestart = () => {
    const newResolution = parseFloat(resolution)
    console.log(typeof(newResolution) )
    restartFunction(newResolution)
    setVisible(false)
  }

  return (
    <>
        <h3 className='title'>Start new simulation</h3>
        
        <div className='resolution'>
            <div className='restart-menu-option-title'> Resolution: {resolution}×{resolution} </div>
            <input type="range" min={200} max={600} step={20} value={resolution} onChange={(e) => handleResolution(e.target.value)} />
        </div>

      <div className='restart-menu-confirm'>
        <TextButton onClick={() => setVisible(false)}>
          Cancel
        </TextButton>

        <TextButton onClick={() => handleRestart()}>
          Create
        </TextButton>  
      </div>      
    </>

  )
}

export default RestartMenu
