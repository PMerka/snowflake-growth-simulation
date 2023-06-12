import React from 'react'
import './OptionsMenu.css'

function OptionsMenu({children}) {
  return (
    <div className='options-menu-wrapper'>
      <h3 className='setting-title'>Settings</h3>
      <div className="option-menu-list">
        {children}
      </div>
    </div>
  )
}

export default OptionsMenu
