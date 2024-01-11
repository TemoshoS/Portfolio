import React, { useState, useEffect } from 'react';

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
          <a href=''>
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill="white" />
            </svg>
          </a>
        </li>
        <li><a href='#'>Skills</a></li>
        <li><a href='#'>Project</a></li>
        <li><a href='#'>Experience</a></li>
      </ul>
      <ul>
        <li><a href=''>Temosho</a></li>
        <li className='hideOnMobile'><a href='#'>Skills</a></li>
        <li className='hideOnMobile'><a href='#'>Project</a></li>
        <li className='hideOnMobile'><a href='#'>Experience</a></li>
        <li className='menu-button' onClick={showSidebar} >
          <a href="javascript:void(0);">
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
