import React, { Component } from 'react'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import { Navbar, Container } from 'react-bootstrap'
import Reviews from './Reviews/Reviews'

import '../Header/Header.css'

export default class Header extends Component {
   render() {
      return (
         <div className='header'>
            <Navbar collapseOnSelect expand='lg' className='navbar' variant='dark'>
               <Container>
                  <Navbar.Brand href='/'>
                     <Logo />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                  <Navbar.Collapse id='responsive-navbar-nav'>
                     <Nav/>
                     <Reviews />
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </div>
      )
   }
}

/*const Header = () => {
   return (
      <div className='header'>
         <div className='container__body'>
            <div className='header__body'>
               <div className='header-list'>
                  <div className='logo'>
                     <Logo />
                  </div>
                  <div className='menu'>
                     <Nav />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header*/




















