import React from 'react'
import './SectionValueTitle.css'
import SectionValue from '../SectionValue'

const SectionValueTitle = () => {
   return (
      <div className='title-box'>
         <div className="value-cards__logo">
            <img src="https://github.com/ayasandra/xbox/blob/master/img/xbox-icon2.png?raw=true"/>
         </div>
         <div className="value-cards__title">
            <h1>The best value</h1>
         </div>
         <div className="value-cards__subtitle">
            <p>in games and entertainment</p>
         </div>
      </div>
   )
}

export default SectionValueTitle