import React from 'react'
import DownloadIcon from "./svgs/download.svg"

function DownloadCanvasImg({canvasRef, imgName='Img' }) {

    const download = () => {
        console.log(canvasRef)
        const link = document.createElement('a');
        link.download = `${imgName}.png`;
        link.href = canvasRef.current.toDataURL()
        link.click();
    }

  return (
    <button className={`btn-round btn-sm`} onClick={() => download()}>
      <img className="icon" src={DownloadIcon} alt="Full screen" /> 
    </button> 
  )
}

export default DownloadCanvasImg
