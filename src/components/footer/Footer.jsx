import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Balu Gorad</a>

      <ul className='perimallinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Projects</a></li>
        <li><a href="#qualification">Qualification</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/balu-gorad-9b6746256/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/balrajegorad" target='_blank'><FaGithub /></a>
        <a href="https://twitter.com/BaluGorad2169" target='_blank'><BsTwitterX /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Balu Gorad. All rights Rrserved</small>
      </div>
    </footer>
  )
}

export default Footer