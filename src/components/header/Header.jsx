import React, { useState } from 'react'
import './header.css'
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import me from '../../assets/icon - Copy.png'





const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Balu Gorad</h1>
        <h5 className="text-light">FullStack Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me"></div>
        <img src={me} className='img-header' alt="" />
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header