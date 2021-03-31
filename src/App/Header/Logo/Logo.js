import React from 'react'

import '../Logo/Logo.css'
import logo from './xbox.png'

import {Link} from 'react-router-dom'

const Logo = () => {
   return (
      <div className='logo-image'>
         <div><Link to='/xbox/'><img src={logo} alt="logo-xbox"/></Link></div>
         <div className="header__burger">
            <span></span>
         </div>
      </div>
   )
}

export default Logo