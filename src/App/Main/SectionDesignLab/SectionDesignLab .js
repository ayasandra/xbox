import React from 'react'
import './SectionDesignLab.css'

const SectionDesignLab = () => {
   return (
      <div className="design-lab">
         <div className="design-lab__body">
            <div className="design-lab__container">
               <div className="design-lab__title">
                  <h1>Xbox Design Lab</h1>
               </div>
               <div className="design-lab__text">
                  <p>Make yours one in a billion with new colors,<br/> metallic finishes and rubberized grips.</p>
               </div>
               <div className="design-lab__buttons">
                  <button className="btn-design">Design Yours</button>
                  <button className="btn-expl">Explore Consoles & Accessories</button>
               </div>
            </div>
         </div>
     </div>
   )
}

export default SectionDesignLab