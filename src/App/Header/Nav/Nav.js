import React, { Component } from 'react'
import { Form, Nav } from 'react-bootstrap'
import './Nav.css'
import { Link } from 'react-router-dom'


export default class Menu extends Component {
   render() {
      return (
         <div className='menu-wrapper'>
            <Nav className='mr-auto' className='menu-body'>
                  <Nav.Link className='games-white'><Link to='/games-list'>Games</Link></Nav.Link>
                  <Nav.Link className='consoles'><Link to='/consoles'>Consoles</Link></Nav.Link>
                  <Nav.Link className='community'><Link to='/community'>Community</Link></Nav.Link>
               <Form inline className='search-form'>
                  <Form.Control type='text' placeholder='Search' className='mr-sm-2'></Form.Control>
               </Form>
            </Nav>
         </div>
      )
   }
}
















/*const Menu =() => {
   return (
         <div className='navbar'>
            <div className="header__menu">
               <ul className="header__list">
                  <li className="home-page"><a href='/' className='home'>Home</a></li>
                  <li className="list-games"><a href='/' className='games-white'>Games</a></li>
                  <li className="list-consoles"><a href='/' className='consoles'>Consoles</a></li>
                  <li className='list-comminuty'><a href='/' className='community'>Community</a></li>
                  <li className="input-search">
                     <form>
                        <input type="search" name="q" placeholder="Search..." />
                     </form>
                  </li>
               </ul>
            </div>
         </div>
   )
}


export default Menu*/





