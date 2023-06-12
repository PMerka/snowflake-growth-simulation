import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import './Canvas.css'
import FullScreen from './widgets/FullScreen'
import DownloadCanvasImg from './widgets/DownloadCanvasImg'
import DownloadCanvasVideo from './widgets/DownloadCanvasVideo'


function Canvas({mainSimulation, controls}) {
  const canvasRef = useRef(null)
  const canvasComponentRef = useRef(null)
  useEffect(() => {
    console.log(canvasRef.current)
    const canvas = canvasRef.current;
    mainSimulation.setCanvasRef(canvas)
  }, [])
  
  return (
      <div ref={canvasComponentRef} className='canvasWrapper'>
          <canvas ref={canvasRef} id="main-canvas" />

        <div className='options'>

            <div>
              <DownloadCanvasImg canvasRef={canvasRef} imgName={"snowflake"} />
            </div>
            
            <div>
              <FullScreen elementRef={canvasComponentRef}/>
            </div>

            {controls.map((element, index) => {return (<div key={index} >{element}</div>)} )}
        </div>      
      </div>
  )
}

export default Canvas
