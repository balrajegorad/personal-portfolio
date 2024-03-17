import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const HeaderSocials = () => {
  return (
      <div className='header__socials'>
          <a href="https://www.linkedin.com/in/balu-gorad-9b6746256/" target='_blank'><BsLinkedin /></a>
          <a href="https://github.com/balrajegorad" target='_blank'><FaGithub /></a>
          <a href="https://twitter.com/BaluGorad2169" target='_blank'><BsTwitterX /></a>
        

    </div>
  )
}

export default HeaderSocials