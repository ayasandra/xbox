import React from 'react'
import './Footer.css'

import FooterUp from './FooterUp/FooterUp'
import FooterDown from './FooterDown/FooterDown'

const Footer = () => {
   return (
      <div className="footer__body">
         <div className="footer__container">
            <>
               <FooterUp />
            </>
            <>
               <FooterDown />
            </>
         </div>
      </div>
   )
}

export default Footer