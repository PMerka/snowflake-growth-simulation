import React from 'react'
import './Btn.css'

function TextButton({children, onClick}) {
  return (
    <button onClick={onClick} className={"btn-text"}>
        {children}
    </button>
  )
}

export default TextButton
