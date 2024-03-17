import React, {useState} from 'react'
import './experience.css'
import { PiBracketsAngleBold } from "react-icons/pi";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";



const Experience = () => {

  const [isOn, setIsOn] = useState(true);
  const [isOnBar, setIsOnBar] = useState(false);
  const [isOnTool, setIsOnTool] = useState(false);

  const toggleHandle = () => {
    setIsOn(prevState => !prevState);
  }

  const toggleHandleBar = () => {
    setIsOnBar(prevState => !prevState);
  }

  const toggleHandleTool = () => {
    setIsOnTool(prevState => !prevState);
  }

  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="first">
          <div className="language">
            <div className="language__title" onClick={toggleHandle}>
              <div className='lang__icon'><PiBracketsAngleBold /></div>
              <div className="lang__title__content">
                <h3>Languages</h3>
                <h5>Languages that I have picked up over the years</h5>
              </div>
              <div id='open-close-icon' className={isOn ? '' : 'active1'}><FaAngleDown /></div>
            </div>
            {isOn &&
            <div className="lang_content">
              <div className="content1">
                <div className="icon__name">
                  <div className="content__icon"><SiJavascript /></div>
                  <p>Javascript</p>
                </div>
                <div className="skill__bar"></div>
              </div>

              <div className="content1">
                <div className="icon__name">
                  <div className="content__icon"><SiTypescript /></div>
                  <p>Typescript</p>
                </div>
                <div className="skill__bar"></div>
              </div>

              <div className="content1">
                <div className="icon__name">
                  <div className="content__icon"><TbBrandCpp /></div>
                  <p>C++</p>
                </div>
                <div className="skill__bar"></div>
              </div>

              <div className="content1">
                <div className="icon__name">
                  <div className="content__icon"><FaJava /></div>
                  <p>Java</p>
                </div>
                <div className="skill__bar"></div>
              </div>


            </div>
            }
          </div>


          <div className="libraries">
            <div className="language__title" onClick={toggleHandleBar}>
              <div className='lang__icon'><PiBracketsCurlyBold /></div>
              <div className="lang__title__content">
                <h3>Libraries & Frameworks</h3>
                <h5>Libraries and Frameworks that I prefer to work with</h5>
              </div>
              <div id='open-close-icon' className={isOnBar ? 'active1' : ''}><FaAngleUp /></div>
            </div>
            {isOnBar &&
            <div className="lang_content">
              <div className="content1">
                <div className="icon__name">
                  <div className="content__icon"><FaReact /></div>
                  <p>React</p>
                </div>
                <div className="skill__bar"></div>
              </div>

              <div className="content1">
                <div className="icon__name">
                  <div className="content__icon"><SiTailwindcss /></div>
                  <p>Tailwind CSS</p>
                </div>
                <div className="skill__bar"></div>
              </div>

              <div className="content1">
                <div className="icon__name">
                  <div className="content__icon"><FaNodeJs /></div>
                  <p>Node.js</p>
                </div>
                <div className="skill__bar"></div>
              </div>

              <div className="content1">
                <div className="icon__name">
                  <div className="content__icon"><SiMongodb /></div>
                  <p>Mongo DB</p>
                </div>
                <div className="skill__bar"></div>
              </div>


            </div>
            }
          </div>


          <div className="tools">
            <div className="language__title" onClick={toggleHandleTool}>
              <div className='lang__icon'><PiBracketsAngleBold /></div>
              <div className="lang__title__content">
                <h3>Tools</h3>
                <h5>List of tools that I know and use on a daily basis</h5>
              </div>
              <div id='open-close-icon' className={isOnTool ? 'active1' : ''}><FaAngleUp /></div>
            </div>
            {isOnTool &&
            <div className="lang_content">
              <div className="content1">
                <div className="icon__name">
                  <div className="content__icon"><FaGitAlt /></div>
                  <p>Git</p>
                </div>
                <div className="skill__bar"></div>
              </div>

              <div className="content1">
                <div className="icon__name">
                  <div className="content__icon"><FaGithub /></div>
                  <p>GitHub</p>
                </div>
                <div className="skill__bar"></div>
              </div>

              <div className="content1">
                <div className="icon__name">
                  <div className="content__icon"><SiVercel /></div>
                  <p>Vercel</p>
                </div>
                <div className="skill__bar"></div>
              </div>

              <div className="content1">
                <div className="icon__name">
                  <div className="content__icon"><FaAws /></div>
                  <p>AWS</p>
                </div>
                <div className="skill__bar"></div>
              </div>


            </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience