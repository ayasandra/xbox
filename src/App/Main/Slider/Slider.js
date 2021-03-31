import React , { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Slider.css'
import {Link} from 'react-router-dom'

import BattlefrontImg from '../Slider/Battlefront.png'
import CallofDutyImg from '../Slider/CallofDuty.png'
import motosportImg from '../Slider/motosport.png'

export default class Slider extends Component {
   render () {
      return ( 
      <Carousel className='slider__body'>
         <Carousel.Item>
            <img
               className='d-block w-100'
               src={ BattlefrontImg }
               alt='battlefront-pic'
            />
            <Carousel.Caption>
               <div className='description'>
                  <h3>Star Wars: Battlefront II</h3>
                  <button className='button-watch'>Watch Trailer</button>
                  <button className='button-explore'><Link to='/games-list'>Explore Games</Link></button>
               </div>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className='d-block w-100'
               src={ CallofDutyImg }
               alt='battlefront-pic'
            />
            <Carousel.Caption>
               <div className='description'>
                  <h3>Call of Duty: WWII</h3>
                  <button className='button-watch'>Watch Trailer</button>
                  <button className='button-explore'>Explore Games</button>
               </div>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className='d-block w-100'
               src={ motosportImg }
               alt='battlefront-pic'
            />
            <Carousel.Caption>
               <div className='description'>
                  <h3>Forza Motosport 7</h3>
                  <button className='button-watch'>Watch Trailer</button>
                  <button className='button-explore'>Explore Games</button>
               </div>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   )
   }
   
}

 