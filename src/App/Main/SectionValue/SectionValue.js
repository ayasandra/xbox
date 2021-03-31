import React from 'react'

import './SectionValue.css'

import SectionValueTitle from './SectionValueTitle/SectionValueTitle'
import SectionValueFirst from './SectionValueFirst/SectionValueFirst'
import SectionValueSecond from './SectionValueSecond/SectionValueSecond'
import SectionValueThird from './SectionValueThird/SectionValueThird';

const SectionValue = () => {
   return (
      <div className='value-body'>
         <div className='value-title'>
            <SectionValueTitle />
         </div>
         <div className='cards-body'>
            <div className='value-card'>
               <SectionValueFirst />
            </div>
            <div className='value-card'>
               <SectionValueSecond />
            </div>
            <div className='value-card'>
               <SectionValueThird />
            </div>
         </div>
      </div>
      
   )
}

export default SectionValue