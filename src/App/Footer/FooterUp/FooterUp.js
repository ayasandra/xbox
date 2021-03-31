import React from 'react'
import './FooterUp.css'

import XboxFooter from './XboxFooter/XboxFooter'
import DevelopersFooter from './DevelopersFooter/DevelopersFooter'
import SocialNetworksFooter from './SocialNetworksFooter/SocialNetworksFooter'

const FooterUp = () => {
   return (
      <>
         <div className='footer__first'>
            <div className='footer__xbox'>
               <XboxFooter />
            </div>
            <div className='footer__developers'>
               <DevelopersFooter />
            </div>
            <div className='footer__social'>
               <SocialNetworksFooter />
            </div>
         </div>
      </>
   )
}

export default FooterUp