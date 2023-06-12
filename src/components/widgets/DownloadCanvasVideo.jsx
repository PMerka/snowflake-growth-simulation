import React, { useEffect } from 'react'
import DownloadIcon from "./svgs/download.svg"
import canvasRecorder from '../../logic/recorder'


function DownloadCanvasVideo({canvasRef, imgName='snowflake' }) {

  useEffect(() => {
    //const canvas = canvasRef.current;
    //canvasRecorder.setCanvasRef(canvas)
  }, [])

  const start = () => {
    const canvas = canvasRef.current;
    canvasRecorder.setCanvasRef(canvas)
    canvasRecorder.start()
  }

  const stop = () => {
    canvasRecorder.stop()
  }

  const download = () => {
    canvasRecorder.download()
  }

  return (
    <>
      <button onClick={() => start()}>
        start
      </button> 
      <button onClick={() => stop()}>
        stop
      </button> 
      <button onClick={() => download()}>
        save
      </button> 
    </>
  )
}

export default DownloadCanvasVideo
