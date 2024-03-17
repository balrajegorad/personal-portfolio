import React from 'react'
import './contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lpttwr8', 'template_dozowya', form.current, 'AjYtZotvR0eh_jkXf')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Conatact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option_icon'/>
            <h4>Mail</h4>
            <h5>balugorad3345@gmail.com</h5>
            <a href="mailto:balugorad3345@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option_icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 9766863090</h5>
            <a href="http://api.whtsapp.com/send?phone=+919766863090" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <FaXTwitter className='contact__option_icon'/>
            <h4>X</h4>
            <h5>@balugorad2169</h5>
            <a href="https://twitter.com/BaluGorad2169" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Your Name' required/>
          <input type="mail" name='mail' placeholder='Enter Your Email' required/>
          <textarea name="text" id="" rows="7" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact