import React from 'react'
import games, { getGamesObject } from '../GamesList/games'
import './GamePage.css'

const GamePage = ({
   match,
   gamesObject = getGamesObject(games),
}) => {
   const id = match.params.id;
   return (
      <div className='gamepage-body'>
         <div className='gamepage-container'>
            <div className='gamepage-wrapper'>
               <h1 className='gamepage-title'>{gamesObject[id].name}</h1>
               <iframe width="550" height="315" src={gamesObject[id].video} className='gamepage-video' title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               <p className='gamepage-description'>{gamesObject[id].description}</p>
               <div className='picture-wrapper'><img className='gamepage-picture' src={gamesObject[id].picture}/></div>
               <button className='gamepage-button'>Buy {gamesObject[id].name}</button>
            </div>
         </div>
      </div>

   )
}

export default GamePage