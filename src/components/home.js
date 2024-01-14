import React, {useState, useEffect,useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../components/navBar';
import 'boxicons';
import Typed from 'typed.js';
import profile from '../profile.jpg';
import voice from '../images/voice.jpg';
import country from '../images/country.jpg';
import weather from '../images/weather.jpg';
import '@fortawesome/fontawesome-free/css/all.css';



function Home() {
 const [loading, setLoading] = useState(false);
 const form = useRef();

 const sendEmail = (e) => {
  setLoading(true); 
  e.preventDefault();

  emailjs
    .sendForm('service_6v41z8s', 'template_xtapfn8', form.current, 'gfSpZlYXHAxPUBS1v')
    .then(
      (result) => {
        setLoading(false); 
        console.log(result.text)
        form.current.reset();
        
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Error sending message. Please try again later.');
      }
    );
    
};


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


  const handleDownloadCV = () => {

    const pdfUrl = "Temosho.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Temosho_Shaku_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div >
      <NavBar />
      {/* Landing Section */}
      <div id='home' className='home'>
        <div className='home-content'>
          <div className='content-text'>
            <h3>Hello, my name is</h3>
            <h1>Temosho Shaku</h1>
            <h3>I'm a <span className='text'></span></h3>
            {/* <p> I'm a Software developer with extensive experience for over 2 years.
                expertise is to create and website design, frontend design and...
              </p> */}
            <div className='home-sci'>
              <a href='https://github.com/TemoshoS' style={{ '--1': 1 }}><i className='bx bxl-github'></i></a>
              <a href='https://www.linkedin.com/in/temosho-shaku-a2598917b/' style={{ '--1': 2 }}><i className='bx bxl-linkedin-square'></i></a>
              <a href='https://www.facebook.com/temosho.shaku' style={{ '--1': 3 }}><i className='bx bxl-facebook-square'></i></a>

            </div>
            <div>
              <button className='btnMore' onClick={handleDownloadCV}>Download CV</button>
              <a href='#about' className='btnMore'>More About Me</a>
            </div>
          </div>
        </div>
        <div className='profile-image'>
          <img src={profile} alt='Profile' />
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
            My journey includes diverse experiences, from internships at MOEPI PUBLISHING and Dynamic DNA to contributing to innovative services like an ecommerce website in React.js and Firebase.
            With a National Diploma in Information Technology from Tshwane University of Technology, I'm driven by a passion for turning creative concepts into high-quality software solutions.
            Explore my portfolio to witness my dedication to user-friendly and problem-solving development.</p>
        </div>


      </div>

      {/* services Section */}
      <div id='services' className='services' style={{ backgroundColor: 'black' }}>
        <div className='container'>
          <h1 className='sub-title'>My <span>services</span></h1>
          <div className='services-list'>
            <div className="center-content">
              <i className='services-icons bx bx-code-alt'></i>
              <h2>Web Development</h2>
              <p>A digital journal app for voice recording. The app allow users to create, listen to, and
                delete voice notes.</p>
              <a href='#' className='read'>Learn more</a>
            </div>

            <div class="center-content">
              <i className='services-icons bx bx-mobile'></i>
              <h2>Mobile Development</h2>
              <p>A digital journal app for voice recording. The app allow users to create, listen to, and
                delete voice notes.</p>
              <a href='#' className='read'>Learn more</a>
            </div>

            <div class="center-content">
              <i className='services-icons bx bxl-apple'></i>
              <h2>UI/UX Design</h2>
              <p>A digital journal app for voice recording. The app allow users to create, listen to, and
                delete voice notes.</p>
              <a href='#' className='read'>Learn more</a>
            </div>





          </div>

        </div>

      </div>

      {/* Skills Section */}
      <div id='skills' className='skills'>

        <div  className='container1'>
          <h1 className='heading1'>Technical Skills</h1>
          <div className='Technical-bars'>
            <div className='bar'><i style={{ color: 'orange' }} class='bx bxl-html5'></i>
              <div className='info'>
                <span>HTML</span>

              </div>
              <div className='progress-line html'>
                <span></span>

              </div>
            </div>
            <div className='bar'><i style={{ color: 'blue' }} class='bx bxl-css3'></i>
              <div className='info'>
                <span>CSS</span>

              </div>
              <div className='progress-line css'>
                <span></span>

              </div>
            </div>
            <div className='bar'><i style={{ color: 'yellow' }} class='bx bxl-javascript'></i>
              <div className='info'>
                <span>JavaScript</span>

              </div>
              <div className='progress-line javascript'>
                <span></span>

              </div>
            </div>

            <div className='bar'><i style={{ color: 'blue' }} class='bx bxl-react'></i>
              <div className='info'>
                <span>React</span>

              </div>
              <div className='progress-line react'>
                <span></span>

              </div>
            </div>
            <div className='bar'><i style={{ color: 'green' }} class='bx bxl-nodejs'></i>
              <div className='info'>
                <span>Node js</span>

              </div>
              <div className='progress-line node'>
                <span></span>

              </div>
            </div>
            <div className='bar'><i style={{ color: '#A020F0' }} class='bx bxl-redux'></i>
              <div className='info'>
                <span>Redux</span>

              </div>
              <div className='progress-line redux'>
                <span></span>

              </div>
            </div>
            <div className='bar'><i style={{ color: 'red' }} class='bx bxl-java'></i>
              <div className='info'>
                <span>Java</span>

              </div>
              <div className='progress-line java'>
                <span></span>

              </div>
            </div>
            <div className='bar'><i style={{ color: '#CCCC00' }} class='bx bxl-firebase'></i>
              <div className='info'>
                <span>Firebase</span>

              </div>
              <div className='progress-line firebase'>
                <span></span>

              </div>
            </div>
            <div className='bar'><i style={{ color: 'green' }} class='bx bxs-data'></i>
              <div className='info'>
                <span>MySQL</span>

              </div>
              <div className='progress-line sql'>
                <span></span>

              </div>
            </div>
            <div className='bar'><i style={{ color: 'white' }}class='bx bxl-github'></i>
              <div className='info'>
                <span>Git</span>

              </div>
              <div className='progress-line git'>
                <span></span>

              </div>
            </div>
          </div>
        </div>


        <div className='container2'>
          <h1 className='heading1'>Professional Skilss</h1>

          <div className='radial-bars'>

            <div className='radial-bar'>

              <svg x='0px' y='0px' viewBox='0 0 200 200'>
                <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
                <circle className='path path-1' cx='100' cy='100' r='80'></circle>
              </svg>
              <div className='percentage'>90%</div>
              <div className='text'>Creativity</div>

            </div>
            <div className='radial-bar'>

              <svg x='0px' y='0px' viewBox='0 0 200 200'>
                <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
                <circle className='path path-2' cx='100' cy='100' r='80'></circle>
              </svg>
              <div className='percentage'>65%</div>
              <div className='text'>Communication</div>

            </div>
            <div className='radial-bar'>

              <svg x='0px' y='0px' viewBox='0 0 200 200'>
                <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
                <circle className='path path-3' cx='100' cy='100' r='80'></circle>
              </svg>
              <div className='percentage'>75%</div>
              <div className='text'>Problem Solving</div>

            </div>
            <div className='radial-bar'>

              <svg x='0px' y='0px' viewBox='0 0 200 200'>
                <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
                <circle className='path path-4' cx='100' cy='100' r='80'></circle>
              </svg>
              <div className='percentage'>85%</div>
              <div className='text'>Teamwork</div>

            </div>
          </div>

        </div>

      </div>

      {/* Projects Section */}
      <div id='projects' className='projects'>
        <h1>projects</h1>

      </div>

      {/* Contact Section */}
      <div className='contact' id='contact'>
        <div className='content'>
          <h2 >Contact Us</h2>
          <p>Let's talk, i will get back to you</p>
      </div>
      <div className='container3'>
        <div className='contactInfo'>
          <div className='box'>
            <div className='icon'><i class="fa-solid fa-location-dot"></i></div>
            <div className='text'>
              <h3>Adrress</h3>
              <p>50 ganchabeleng,<br></br>ganchabeleng<br></br>0741</p>

            </div>
            </div>
            <div className='box'>
            <div className='icon'><i class="fa-solid fa-phone"></i></div>
            <div className='text'>
              <h3>Phone</h3>
              <p>0721371977</p>

            </div>
            </div>
            <div className='box'>
            <div className='icon'><i class="fa-regular fa-envelope"></i></div>
            <div className='text'>
              <h3>Email</h3>
              <p>temoshomaduane@gmail.com</p>

            </div>
            </div>


        </div>
        <div className='contactForm'>
        <form
    
    ref={form} onSubmit={sendEmail}
  >
    <h2>Send Message</h2>
    <div className="inputBox">
      <input
        type="text"
        name="user_name"
        required
      />
      <span>Full Name</span>
    </div>
    <div className="inputBox">
      <input
        type="email"
        name="user_email"
        required
      />
      <span>Email</span>
    </div>
    
    <div className="inputBox">
      <input
        type="subject"
        name="subject"
        required
      />
      <span>Subject</span>
    </div>
    <div className="inputBox">
      <textarea
        name="message"
        required
      />
      <span>Type your message...</span>
    </div>
    <div className="inputBox">
      <button
        type="submit"
      >
        Send
      </button>
    </div>
  </form>
        </div>

      </div>
      </div>
      


    </div>
  );
}

export default Home;
