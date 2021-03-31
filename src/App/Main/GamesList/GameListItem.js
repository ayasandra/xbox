import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './GameListItem.css'

class GameListItem extends Component {
   render() {
      const {
         id,
         name,
         type,
         image,
         category
      } = this.props;
      return (
         <>
            <div className='game-img'><img src={image} alt={name} /></div>
            <div className='game-name'>
               <Link to={`/games/${id}`}>
                  {name}
               </Link>
            </div>
            <div className='game-text'>{type}</div>
            <div className='game-button'><button><Link to={`/games/${id}`}>See details</Link></button></div>
         </>
      )
   }

}

GameListItem.propTypes = {
   name: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   image: PropTypes.string,
   picture: PropTypes.string,
}

export default GameListItem