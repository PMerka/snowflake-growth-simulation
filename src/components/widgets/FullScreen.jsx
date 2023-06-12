import React, { useState } from 'react'
import FullScreenIcon from "./svgs/fullscrean.svg"

function FullScreen({elementRef, className}) {
    const [isFullscreen, setIsFullscreen]  = useState(false)

    const fullScreen = () => {
        console.log(isFullscreen)
        if (!isFullscreen){
              elementRef.current.requestFullscreen();
              setIsFullscreen(true)
              return
        }
        document.webkitExitFullscreen()
        setIsFullscreen(false)
    }; 
  
    return (
    <button onClick={() => fullScreen()} className={`btn-round btn-sm ${className}`}>
      <img className="icon" src={FullScreenIcon} alt="Full screen" /> 
    </button> 
  )
}

export default FullScreen
