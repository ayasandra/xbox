import React from 'react'

import Slider from './Slider/Slider'
import SectionValue from './SectionValue/SectionValue'
import Cards from './Cards/Cards'
import SectionDesignLab from './SectionDesignLab/SectionDesignLab '
import Community from '../Components/Community'
import Consoles from '../Components/Consoles'
import { Route } from 'react-router-dom'
import GamePage from './GamePage/GamePage'
import Games from '../Components/Games/Games'
import Comments from '../Components/Comments/Comments'




const Main = () => {
   return (
      <main className='main'>
            <div className='slider'>
               <Route path='/xbox/' exact component={Slider} />
            </div>
            <div className='section-value'>
               <Route path='/xbox/' exact component={SectionValue} />
            </div>
            <div className='section-cards'>
               <Route path='/xbox/' exact component={Cards} />
            </div>
            <div className='section-lab'>
               <Route path='/xbox' exact component={SectionDesignLab} />
            </div>
            <Route path="/games/:id" component={GamePage} />
            <Route path="/games-list" component={Games} />
            <Route path="/community" component={Community} />
            <Route path="/consoles" component={Consoles} />
            <Route path='/reviews' component={Comments}/>
      </main>
   )
}

export default Main