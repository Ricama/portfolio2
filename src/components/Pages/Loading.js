import React from 'react'
import logo from '../../ressources/images/logo.png'

export default function Loading() {
  return (
    <div>
      <div className='contenu'>
        <div className='Loading'>
          <img src={logo} alt=''/>
          <div className='contenu_barre'>
            <div className='barre'></div>
        </div>
        </div>
        </div>
    </div>
  )
}
