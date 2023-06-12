import React from 'react'
import { useState } from 'react'
import './PopUp.css'
import Close from './widgets/Close'
import Restart from './widgets/Restart'


function PopUp({children, onOpen}) {
    const [visible, setVisible] = useState(false) 

    const handlePopUp = () => {
      setVisible(!visible)
      if (onOpen){
        onOpen()
      }
      
    }

  return (
    <>
    <Restart onClick={() => handlePopUp()} />
    {
    visible ?
    <div className='pop-up'>
        <div className='popup-window'>
          <Close onClick={() => setVisible(!visible)} className={"left-corner"}/>
            {React.cloneElement(children, {setVisible: setVisible})}
        </div>  
    </div> : ""
    }
    </>
  )
}

export default PopUp
