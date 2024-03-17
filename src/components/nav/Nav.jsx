import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';


const Nav = () => {
  const [aciveNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={aciveNav === '#' ? 'active' : ''} ><AiOutlineHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={aciveNav === '#about' ? 'active' : ''} ><AiOutlineUser /></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={aciveNav === '#experience' ? 'active' : ''} ><BiBook /></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={aciveNav === '#services' ? 'active' : ''} ><RiServiceLine /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={aciveNav === '#contact' ? 'active' : ''} ><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav