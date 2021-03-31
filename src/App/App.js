import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import '../common/styles/reset.css'
import '../common/styles/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'




const App = () => {
  return (
      <div className='wrapper'>
        <div className='head'>
          <Header />
        </div>
        <div className='main-section'>
          <Main />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
  )
}

export default App;
