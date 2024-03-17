

import React, { useState } from 'react';
import { FaGraduationCap } from "react-icons/fa6";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";

function Toggle() {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const toggleDiv1 = () => {
    setShowDiv1(!showDiv1);
    setShowDiv2(false);
  };

  const toggleDiv2 = () => {
    setShowDiv2(!showDiv2);
    setShowDiv1(false);
  };

  return (
    <div>
      <div className="qulai-btn">
        <button id='btn1' onClick={() => setShowDiv1(true)} className={showDiv1 ? 'active' : ''}><FaGraduationCap className='quali__icon' /><p className={showDiv1 ? 'active' : ''}>Eduction</p></button>
        <button id='btn1' onClick={()=>setShowDiv1(false)} className={showDiv1 === false ? 'active' : ''}><BiSolidBriefcaseAlt2 className='quali__icon'/><p className={showDiv1 === false ? 'active' : ''}>Work</p></button>
      </div>
      {showDiv1 && <Eduction />}
      {!showDiv1 && <Work />}
    </div>
  );
}

const Eduction = () => {
  return(
    <div className='bar_circle'>
      <div class="qualification_content qualification_active" data-content id="education">
            
            <div class="qualification_data">
              <div>
                <p class="qualification_title">B.Tech Computer Science</p>
                <span class="qualification_subtitle"><a href="https://engg.svpm.org.in/" target="_blank"
                    rel="noopener noreferrer">SVPM COE Baramati(Pune) </a></span>
                <div class="qualification_calendar">
                  <i class="uil uil-calendar-alt"><CiCalendarDate /></i>
                  2021 - 2025
                </div>
              </div>

              <div className='flex'>
                <span class="qualification_circle flex1"></span>
                <span class="qualification_line"></span>
              </div>
            </div>

          
            <div class="qualification_data">
              <div></div>

              <div className='flex'>
                <span class="qualification_circle flex1"></span>
                <span class="qualification_line"></span>
              </div>

              <div>
                <p class="qualification_title">Senior Secondary School </p>
                <span class="qualification_subtitle"><a href="http://smmakluj.ac.in//" target="_blank"
                    rel="noopener noreferrer">SMM Collage, Akluj</a></span>
                <div class="qualification_calendar">
                  <i class="uil uil-calendar-alt"><CiCalendarDate /></i>
                  2019 - 2021
                </div>
              </div>
            </div>

            
            <div class="qualification_data">
              <div>
                <p class="qualification_title">Secondary School</p>
                <span class="qualification_subtitle"><a href="" target="_blank"
                    rel="noopener noreferrer">KJSPMV School Malshiras</a></span>
                <div class="qualification_calendar">
                  <i class="uil uil-calendar-alt"><CiCalendarDate /></i>
                  2009 - 2019
                </div>
              </div>
              <div className='flex'>
                <span class="qualification_circle flex1"></span>
              </div>
            </div>

          </div>
    </div>
  )
}

const Work = () => {
  return(
    <div className='bar_circle'>
      <div class="qualification_content qualification_active" data-content id="education">

          
            <div class="qualification_data">
              <div></div>

              <div className='flex'>
                <span class="qualification_circle flex1"></span>
                <span class="qualification_line"></span>
              </div>

              <div>
                <p class="qualification_title">Full Stack Development Intern</p>
                <span class="qualification_subtitle"><a href="https://www.linkedin.com/company/codsoft/?originalSubdomain=in" target="_blank"
                    rel="noopener noreferrer">Codsoft</a></span>
                <div class="qualification_calendar">
                  <i class="uil uil-calendar-alt"><CiCalendarDate /></i>
                  5 Jan - 4Feb
                </div>
              </div>
            </div>

            
              
            </div>

          </div>
    
  )
}


export default Toggle;

/*
import React, { useState } from 'react';
import { FaGraduationCap } from "react-icons/fa6";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";

const Toggle = () => {
  const [aciveEducation, setActiveEsucation] = useState(true);
  return (
    <div>
      <a  onClick={()=>setActiveEsucation(true)} className={aciveEducation === true ? 'active' : ''} ><FaGraduationCap /><p>Eduction</p></a>
      <a  onClick={()=>setActiveEsucation(false)} className={aciveEducation === false ? 'active' : ''} ><BiSolidBriefcaseAlt2 /><p>Work</p></a>
      
    </div>
  )
}

const Eduction = () => {
  return(
    <div>mvzfn</div>
  )
}



export default Toggle;*/