import React from 'react'
import './FlexContainer.css'

function FlexContainer({children}) {
  return (
    <div className='flex-container'>
      {children}
    </div>
  )
}

export default FlexContainer
