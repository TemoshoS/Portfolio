import React, { useEffect } from 'react';
import NavBar from '../components/navBar';
import 'boxicons';
import Typed from 'typed.js';
import profile from '../profile.jpg';
import voice from '../images/voice.jpg';
import country from '../images/country.jpg';
import weather from '../images/weather.jpg';

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
    <div >
      <NavBar />
      {/* Landing Section */}
      <div id='home' className='section'>
        <div className='home'>
          <div className='home-content'>
            <div className='content-text'>
              <h3>Hello, It's Me</h3>
              <h1>Temosho Shaku</h1>
              <h3>And I'm a <span className='text'></span></h3>
              <p> I'm a Software developer with extensive experience for over 2 years.
                expertise is to create and website design, frontend design and...
              </p>
              <div className='home-sci'>
                <a href='https://github.com/TemoshoS' style={{ '--1': 1 }}><i className='bx bxl-github'></i></a>
                <a href='https://www.linkedin.com/in/temosho-shaku-a2598917b/' style={{ '--1': 2 }}><i className='bx bxl-linkedin-square'></i></a>
                <a href='https://www.facebook.com/temosho.shaku' style={{ '--1': 3 }}><i className='bx bxl-facebook-square'></i></a>
                <a href='#' style={{ '--1': 4 }}><i className='bx bxl-twitter'></i></a>
              </div>
              <a href='#skills' className='btnMore'>More About </a>
            </div>
          </div>
          <div className='profile-image'>
            <img src={profile} alt='Profile' />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id='about' className='about'>

        <div className='about-image'>
          <img src={profile} />
        </div>
        <div className='about-text'>
          <h2>About <span>Me</span></h2>
          <h4>Full Stack Developer</h4>
          <p>I'm Temosho Shaku, a seasoned Web and Mobile React Developer proudly based in the dynamic cities of Tshwane and Johannesburg, Gauteng, South Africa.
            Currently immersed as a React Software Developer Trainee at mLab Southern Africa, I specialize in crafting seamless digital experiences using technologies like React.js, React Native, Angular, Java, SQL, and Node.js.
            My journey includes diverse experiences, from internships at MOEPI PUBLISHING and Dynamic DNA to contributing to innovative projects like an ecommerce website in React.js and Firebase.
            With a National Diploma in Information Technology from Tshwane University of Technology, I'm driven by a passion for turning creative concepts into high-quality software solutions.
            Explore my portfolio to witness my dedication to user-friendly and problem-solving development.</p>
        </div>


      </div>

      {/* Projects Section */}
      <div id='projects' className='projects' style={{backgroundColor:'black'}}>
        <div className='container'>
          <h1 className='sub-title'>My <span>Projects</span></h1>
          <div className='projects-list'>
            <div>
              <img src={voice} className='project-image' alt='project image'/>
              <h2>Voice Journal App</h2>
              <p>A digital journal app for voice recording. The app allow users to create, listen to, and
                delete voice notes.</p>
                <a href='#' className='read'>Learn more</a>
            </div>

            <div>
            <img src={voice} className='project-image' alt='project image'/>
              <h2>Voice Journal App</h2>
              <p>A digital journal app for voice recording. The app allow users to create, listen to, and
                delete voice notes.</p>
                <a href='#' className='read'>Learn more</a>
            </div>

            <div>
            <img src={voice} className='project-image' alt='project image'/>
              <h2>Voice Journal App</h2>
              <p>A digital journal app for voice recording. The app allow users to create, listen to, and
                delete voice notes.</p>
                <a href='#' className='read'>Learn more</a>
            </div>

            <div>
            <img src={voice} className='project-image' alt='project image'/>
              <h2>Voice Journal App</h2>
              <p>A digital journal app for voice recording. The app allow users to create, listen to, and
                delete voice notes.</p>
                <a href='#' className='read'>Learn more</a>
            </div>

            <div>
            <img src={voice} className='project-image' alt='project image'/>
              <h2>Voice Journal App</h2>
              <p>A digital journal app for voice recording. The app allow users to create, listen to, and
                delete voice notes.</p>
                <a href='#' className='read'>Learn more</a>
            </div>

            <div>
            <img src={voice} className='project-image' alt='project image'/>
              <h2>Voice Journal App</h2>
              <p>A digital journal app for voice recording. The app allow users to create, listen to, and
                delete voice notes.</p>
                <a href='#' className='read'>Learn more</a>
            </div>

          </div>

        </div>

      </div>

      {/* Skills Section */}
      <div id='skills' className='skills'>

        <text>skilss</text>

      </div>



      {/* Contact Section */}
      <div id='contact' className='section'>
        {/* Add your contact content here */}
        <text>skilss</text>
      </div>
    </div>
  );
}

export default Home;
