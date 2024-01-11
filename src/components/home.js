import React, { useEffect } from 'react';
import NavBar from '../components/navBar';
import 'boxicons';
import Typed from 'typed.js';
import profile from '../profile.jpg'

function Home() {
  useEffect(() => {
    const options = {
      strings: ['Mobile developer', 'Front-end developer', 'back-end', 'web developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(".text", options);

    return () => {
      typed.destroy();
    };
  }, []); 

  return (
    <div>
      <NavBar />
      <div className='home'>
        <div className='home-content'>
          <div className='content-text'>
            <h3>Hello, It's Me</h3>
            <h1>Temosho Shaku</h1>
            <h3>And I'm a <span className='text'></span></h3>
            <p> I'm a Software developer with extensive experience for over 2 years.
              <br></br>expertise is to create and website design, frontend design and...
            </p>
            <div className='home-sci'>
              <a href='#'><i className='bx bxl-facebook-square'></i></a>
              <a href='#'><i className='bx bxl-github'></i></a>
              <a href='#'><i className='bx bxl-twitter'></i></a>
              <a href='#'><i className='bx bxl-linkedin-square'></i></a>
            </div>
            <a href='#' className='btnMore'>More About Me</a>
          </div>
          
        </div>
        <div className='profile-image'>
        <img src={profile} alt='Profile' />
          </div>
      </div>
    </div>
  );
}

export default Home;
