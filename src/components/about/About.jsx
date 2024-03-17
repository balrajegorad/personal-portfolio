import React from 'react'
import './about.css'
import BG from'../../assets/mea.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__img">
            <img src={BG} alt="" />
          </div>

        </div>
        <div className="about__content">
          <p>
            Hey there,👋 I'm Balu a 20-year-old CSE undergrad who is passionate about building web applications using MongoDB,
            Express.js, React.js, and Node.js. With a strong foundation in JavaScript and a passion for learning,
            I'm eager to contribute to dynamic projects, solve problems creatively, and collaborate with teams to
            deliver high-quality software solutions.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About


