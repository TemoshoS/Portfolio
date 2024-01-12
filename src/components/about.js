import React from 'react'
import NavBar from '../components/navBar';
import profile from '../profile.jpg'

function About() {
  return (
    <div className='about'>
        <div className='about-image'>
            <img src={profile}/>
        </div>


    </div>
  )
}

export default About