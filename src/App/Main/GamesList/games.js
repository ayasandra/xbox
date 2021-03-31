const games = [ 
   {
      id: 1,
      name: "Call of Duty: WWII",
      type: "Single player/Multiplayer",
      category: "Shooter",
      image: "https://github.com/ayasandra/xbox/blob/master/public/img/callofdutycard.jpg?raw=true",
      description: <div className='game-page'>
                        Call of Duty: WWII is a first-person shooter video
                        game developed by Sledgehammer Games for the Xbox One, PlayStation 4 and Windows. 
                        Leaked concept art for the game was initially found in late March 2017, a month 
                        before the official reveal on April 26th, 2017. The game was released on November 3rd,
                        2017. Call of Duty: WWII is the fourteenth game in the Call of Duty franchise and
                        Sledgehammer Games' second to be developed in a three-year development cycle. 
                     </div>,
      picture: "https://github.com/ayasandra/xbox/blob/master/public/img/img-games/pic1.jpg?raw=true",
      video: "https://www.youtube.com/embed/D4Q_XYVescc"
   },

   {
      id: 2,
      name: "Destiny 2: New Light",
      type: "Multiplayer",
      category: "Shooter",
      image: "https://github.com/ayasandra/xbox/blob/master/public/img/destiny-card.jpg?raw=true",
      description: <div className='game-page'>
                        What is Destiny 2 New Light? Again, New Light is a free-to-play entry point for Destiny 2.
                        It's not a demo or a trial. It's a free, tailor-made version of the full game which focuses
                        on content released before Destiny 2: Shadowkeep, the major expansion paired with New Light.
                     </div>,
      picture: 'https://github.com/ayasandra/xbox/blob/master/public/img/img-games/destiny2-newlight.jpg?raw=true',
      video: 'https://www.youtube.com/embed/8KLHUzQDfbE',
   },

   {
      id: 3,
      name: "STEEP",
      type: "Single player/Multiplayer",
      category: "Sports",
      image: "https://github.com/ayasandra/xbox/blob/master/public/img/steep-card.jpg?raw=true",
      description: <div className='game-page'>
                        Steep is an online multiplayer extreme sports game set in an open world environment of the Alps,
                        centered on the Mont Blanc, the tallest mountain in Europe, which can be explored freely by
                        players. The four main activities available in the game include skiing, wingsuit flying, 
                        snowboarding, and paragliding.
                     </div>,
      video: 'https://www.youtube.com/embed/XznTHeUkGXA',
      picture: 'https://github.com/ayasandra/xbox/blob/master/public/img/img-games/steep.jpg?raw=true'
   },

   {
      id: 4,
      name: "Forza Motorsport 7",
      type: "Single player/Multiplayer",
      category: "Racing",
      image: "https://github.com/ayasandra/xbox/blob/master/img/public/motosport-card.jpg?raw=true",
      description: <div className='game-page'>
                        Forza Motorsport 7 is where racers, drifters, drag racers, tuners, and creators come together
                        in a community devoted to everything automotive. Drive the cars of your dreams, with more than
                        700 amazing vehicles to choose from including the largest collection of Ferraris, Porsches,
                        and Lamborghinis ever.
                     </div>,
      video: 'https://www.youtube.com/embed/9aAr5blVy0g',
      picture: 'https://github.com/ayasandra/xbox/blob/master/public/img/img-games/motorsport7.jpg?raw=true'
   },

   {
      id: 5,
      name: "Star Wars: Battlefront 2",
      type: "Single player/Online",
      category: "Shooter",
      image: "https://github.com/ayasandra/xbox/blob/master/public/img/starwar-card.jpg?raw=true",
      description: <div className='game-page'>
                        Star Wars Battlefront II is a third and first-person shooter, featuring both single-player
                        and multiplayer game modes. Gameplay is split in two main categories: ground battles and space
                        battles. 
                     </div>,
      video: 'https://www.youtube.com/embed/_q51LZ2HpbE',
      picture: 'https://github.com/ayasandra/xbox/blob/master/public/img/img-games/starwars2.jpg?raw=true'
   },
   
   {
      id: 6,
      name: "GTA 5",
      category: "Action-adventure",
      type: "Single-player/Multiplayer",
      image: "https://github.com/ayasandra/xbox/blob/master/public/img/gta5-card.jpg?raw=true",
      description: <div className='game-page'>
                        Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published
                        by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008's Grand
                        Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the
                        single-player story follows three protagonists—retired bank robber Michael De Santa, street
                        gangster Franklin Clinton, and drug dealer and arms smuggler Trevor Philips—and their efforts
                        to commit heists while under pressure from a corrupt government agency and powerful criminals.
                        The open world design lets players freely roam San Andreas' open countryside and the fictional
                        city of Los Santos, based on Los Angeles.
                     </div>,
      video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
      picture: 'https://github.com/ayasandra/xbox/blob/master/public/img/img-games/GTAV.jpg?raw=true'
   },


]

export const getGamesObject = array => {
   return array.reduce((obj, product) => ({
         ...obj,
         [product.id]:product
      }), {})
}

export default games