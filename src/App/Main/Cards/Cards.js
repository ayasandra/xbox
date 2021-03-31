import './Cards.css'
import React, { Component } from "react";
import games from '../GamesList/games'
import GameListItem from '../GamesList/GameListItem'

let str = ''

class Cards extends Component {
   state = {
      str: '',
   };

   filterGames = (text) => {
      this.setState(() => ({
         str: text,
      }));
      console.log(this.state.str);
   };
   render() {

      return (
         <div className='cards__body'>
            <div className='cards__container'>
               <h2>Exclusive games on XBOX</h2>
               <h4>Choose your category</h4>
               <div className='selected-category'>
                  <button onClick={() => this.filterGames('')}>All</button>
                  <button onClick={(e) => this.filterGames(e.target.innerText)}>Sports</button>
                  <button onClick={(e) => this.filterGames(e.target.innerText)}>Racing</button>
                  <button onClick={(e) => this.filterGames(e.target.innerText)}>Shooter</button>
                  <button onClick={(e) => this.filterGames(e.target.innerText)}>Action-adventure</button>
               </div>
               <div className='cards__wrapper'>
                  {
                     games.filter((item) =>
                        item.category.includes(this.state.str)
                     ).map(({
                        id,
                        name,
                        type,
                        image,
                        category
                     }) => (
                        <div className="game-card" >
                           <div className="game-card__one" key={id}>
                              <GameListItem
                                 id={id}
                                 name={name}
                                 type={type}
                                 image={image}
                                 category={category}
                              />
                           </div>
                        </div>
                     ))
                  }
               </div>

               <div className="cards__button">
                  <button>XBOX Store</button>
               </div>
            </div>
         </div>
      );
   }

}
export default Cards



