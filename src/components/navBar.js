
import React, { useState, useEffect } from 'react';
import logo from '../logo-white.png';

function NavBar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 800) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <ul className={`sidebar ${sidebarVisible ? 'show' : ''}`}>
        <li onClick={hideSidebar}>
          <a >
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill="white" />
            </svg>
          </a>
        </li>
        <li><a href='#home'>Home</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <ul>
        <li><a href='#home'><img src={logo} alt="Logo" className='logo' />Temosho</a></li>
        <li className='hideOnMobile'><a href='#home' style={{ '--1': 1 }}>Home</a></li>
        <li className='hideOnMobile'><a href='#services' style={{ '--1': 2 }}>Services</a></li>
        <li className='hideOnMobile'><a href='#skills' style={{ '--1': 3 }}>Skills</a></li>
        <li className='hideOnMobile'><a href='#projects' style={{ '--1': 4 }}>Projects</a></li>
        <li className='hideOnMobile'><a href='#contact' style={{ '--1': 5 }}>Contact</a></li>
        <li className='menu-button' onClick={showSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" fill="white" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
