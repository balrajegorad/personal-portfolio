import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ChatPhoto from '../../assets/chat.png'
import FileShare from '../../assets/filesharing.png'
import CodeEditor from '../../assets/Codeeditor.png'
import PortfolioImg from '../../assets/portfolioscreenshot.png'
import NpmPhoto from '../../assets/npm.png'

import { FiGithub } from "react-icons/fi";

import './portfolio.css';

import { Pagination, Navigation } from 'swiper/modules';

export default function Portfolio() {
  return (
    <div id='services'>
      
      <div className='project__flex'>
        <h5>Most recent work</h5>
        <h2>Projects</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='container project__container'>
            <div className='project__img'><img src={ChatPhoto} alt="prj 1" /></div>

            <div className='text__content'>
              <h2>Real Time ChatApp</h2>
              <p>A real-time chatting MERN project with authentication, socket.io for live chat, bcrypt & JWT for
                security, storing chats in MongoDB using Mongoose, notifications, all wrapped in an intuitive UI/UX.</p>
              <div>
                <a href="https://github.com/balrajegorad/Chat-App?tab=readme-ov-file" target='_blank' className='source__btn'>Source Code <FiGithub /></a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container project__container'>
            <div className='project__img'><img src={FileShare} alt="prj 1" /></div>

            <div className='text__content'>
              <h2>File Sharing App</h2>
              <p>A MERN stack project enabling users to upload files and receive unique download links for easy access to their files anytime.</p>
              <div>
                <a href="https://github.com/balrajegorad/mern-file-sharing-web-app" target='_blank' className='source__btn'>Source Code <FiGithub /></a>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container project__container'>
            <div className='project__img'><img src={CodeEditor} alt="prj 1" /></div>

            <div className='text__content'>
              <h2>Web Code Editor</h2>
              <p>The Web-Code-Editor project aims to create a simple yet powerful code editor application using React.js,
                HTML, CSS, and JavaScript. This application will allow users to write, edit, and execute code of HTML, CSS and Javascript
                languages in real-time, with syntax highlighting and other helpful features commonly found in code editors.</p>
              <div>
                <a href="https://github.com/balrajegorad/Web-Code-Editor" target='_blank' className='source__btn'>Source Code <FiGithub /></a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container project__container'>
            <div className='project__img'><img src={PortfolioImg} alt="prj 1" /></div>

            <div className='text__content'>
              <h2>Personal Portfolio Website</h2>
              <p>My Personal Portfolio Website made using only HTML, CSS, JS and React with a clean and minimal UI.</p>
              <div>
                <a href="" target='_blank' className='source__btn'>Source Code <FiGithub /></a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container project__container'>
            <div className='project__img'><img src={NpmPhoto} alt="prj 1" /></div>

            <div className='text__content'>
              <h2>pack-react-toggle</h2>
              <p>pack-react-toggle is an npm package for easily implementing toggle switches in React applications.</p>
              <div>
                <a href="https://github.com/balrajegorad/pack-react-toggle" target='_blank' className='source__btn'>Source Code <FiGithub /></a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
