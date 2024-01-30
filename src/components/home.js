import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../components/navBar';
import 'boxicons';
import Typed from 'typed.js';
import profile from '../profile.jpg';
import voice from '../images/voice.jpg';
import country from '../images/country.jpg';
import weather from '../images/weather.jpg';
import tsa from '../images/tsa.jpg';
import codetribe from '../images/codetribe.jpg';
import temosho from '../images/temosho.jpg';
import angular from '../images/angular.JPG';
import azure from '../images/azure.JPG';
import soft from '../images/soft.JPG';
import sql from '../images/sql.JPG';
import portfolio from '../videos/portfolio.mp4'
import '@fortawesome/fontawesome-free/css/all.css';



function Home() {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const [activeTab, setActiveTab] = useState('skills');
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

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
      strings: ['Front-end developer', 'Back-end developer', 'Full-Stack Developer'],
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

  function toggleProjects() {
    var hiddenProjects = document.querySelectorAll('.project-list div:nth-child(n+4)');

    hiddenProjects.forEach(function (project) {
      project.style.display = project.style.display === 'block' ? 'none' : 'block';
    });

    var btnText = document.getElementById('view-more-btn').innerHTML;
    document.getElementById('view-more-btn').innerHTML =
      btnText === 'View more' ? 'Hide' : 'View more';
  }




  return (
    <div ><NavBar />

      <div id='home' className='home'>
        <div className='home-content'>
          <div className='content-text'>
            <h3>Hi, My Name is</h3>
            <h1>Temosho Shaku</h1>
            <h3>I'm a <span className='text'></span></h3>
            {/* <p> I build and design websites from start to finish, handling both the front and back ends of things.
            </p> */}
            <div className='home-sci'>
              <a href='https://github.com/TemoshoS' style={{ '--1': 1 }}><i className='bx bxl-github'></i></a>
              <a href='https://www.linkedin.com/in/temosho-shaku-a2598917b/' style={{ '--1': 2 }}><i className='bx bxl-linkedin-square'></i></a>
              <a href='https://www.facebook.com/temosho.shaku' style={{ '--1': 3 }}><i className='bx bxl-facebook-square'></i></a>
            </div>
            <div className='home-button'>
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
        <div className='container4'>
          <div className='row1'>
            <div className='about-col-1'>
              <img src={temosho} alt='profile' />
            </div>
            <div className='about-col-2'>
              <h1 className='sub-title1'>About <span>Me</span></h1>
              <p>I'm a developer from Tembisa. Skilled in both front-end and back-end technologies,
                I turn creative ideas into software solutions. With a National Diploma in Information Technology,
                I value effective time management and am committed to continuous learning, staying updated on the latest trends
                in web and mobile development.</p>

              <div className='tab-titles'>
                <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => openTab('skills')}>Skills</p>
                <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => openTab('experience')}>Experience</p>
                <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => openTab('education')}>Education</p>
                <p className={`tab-links ${activeTab === 'certificates' ? 'active-link' : ''}`} onClick={() => openTab('certificates')}>Certificates</p>
              </div>


              <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id='skills'>
                <div className='tab-skils'>
                  <div className='container1'>
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
                      <div className='bar'><i style={{ color: 'white' }} class='bx bxl-github'></i>
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


                    <div className='radial-bars'>

                      <div className='radial-bar'>

                        <svg x='0px' y='0px' viewBox='0 0 200 200'>
                          <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
                          <circle className='path path-1' cx='100' cy='100' r='80'></circle>
                        </svg>
                        <div className='percentage'>90%</div>
                        <div className='text'>Time Management</div>

                      </div>
                      <div className='radial-bar'>

                        <svg x='0px' y='0px' viewBox='0 0 200 200'>
                          <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
                          <circle className='path path-2' cx='100' cy='100' r='80'></circle>
                        </svg>
                        <div className='percentage'>69%</div>
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
                      <div className='radial-bar'>

                        <svg x='0px' y='0px' viewBox='0 0 200 200'>
                          <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
                          <circle className='path path-5' cx='100' cy='100' r='80'></circle>
                        </svg>
                        <div className='percentage'>80%</div>
                        <div className='text'>Adaptability</div>

                      </div>
                    </div>

                  </div>

                </div>
              </div>


              <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id='experience'>
                <ul>
                  <li>
                    <span>MLAB (CodeTribe Academy)</span>
                    <p>Position: Web and Mobile React Developer - trainee</p>
                    <p>Duration: June 2023 - December 2023</p>
                    <p className='desc'>Description: As a trainee Web and Mobile React Developer at MLAB (CodeTribe Academy), I gained hands-on experience in React.js, React Native, and web/mobile development. I worked on various projects, enhancing my skills and contributing to real-world applications.</p>
                  </li>
                  <li>
                    <span>Moepi Publishing</span>
                    <p>Position: Java Developer - intern</p>
                    <p>Duration: July 2022 - June 2023</p>
                    <p className='desc'>Description: As a Java Developer intern at Moepi Publishing, I was involved in designing user interfaces using Java Swing and implementing functionality with Java. I actively contributed to coding tasks and utilized MySQL for database management.</p>
                  </li>


                  <li>
                    <span>TSA Foundation</span>
                    <p>Position: System Development Level 5</p>
                    <p>Duration: November 2021 - October 2022</p>
                    {/* <p>Description: Contributed to system development at TSA Foundation, gaining experience and proficiency in various aspects of the field. Worked on [briefly mention specific tasks or projects], collaborating with a dedicated team to achieve project goals and enhance my skills in system development.</p> */}
                  </li>

                </ul>
              </div>



              <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id='education'>
                <ul>
                  <li>
                    <span>Tshwane University of Technology</span>
                    <p className='degree desc'>National Diploma: Information Technology Software Development </p>
                    <p>2023</p>

                  </li>
                  <li>
                    <span>Mokhulwane Secondary School</span>
                    <p className='degree desc'>Grade 12</p>
                    <p>2014</p>

                  </li>
                </ul>
              </div>

              <div className={`tab-contents ${activeTab === 'certificates' ? 'active-tab' : ''}`} id='certificates'>
                <div className='certificates-grid'>
                  <div className='certificate-item'>
                    <span>React Course</span>
                    <img src={codetribe} alt="certificate" className='certificate-image' />
                    <p>Issued by: CodeTribe</p>
                    <p>Date of Issue: 23-January-2024</p>
                  </div>

                  <div className='certificate-item'>
                    <span>Systems Development Level 5</span>
                    <img src={tsa} alt="certificate" className='certificate-image' />
                    <p>Issued by: MICT Seta</p>
                    <p>Date of Issue: 5-September-2023</p>
                  </div>

                  <div className='certificate-item'>
                    <span>micosoft Azure Fundmentals</span>
                    <img src={azure} alt="certificate" className='certificate-image' />
                    <p>Issued by: Microsoft</p>
                    <p>Date of Issue: 27-May-2021</p>
                  </div>

                  <div className='certificate-item'>
                    <span>Software Development</span>
                    <img src={soft} alt="certificate" className='certificate-image' />
                    <p>Issued by: Microsoft</p>
                    <p>Date of Issue: 26-April-2021</p>
                  </div>
                  <div className='certificate-item'>
                    <span>Angular</span>
                    <img src={angular} alt="certificate" className='certificate-image' />
                    <p>Issued by: Simplilearn</p>
                    <p>Date of Issue: 04-Octover-2020</p>
                  </div>
                  <div className='certificate-item'>
                    <span>SQL</span>
                    <img src={sql} alt="certificate" className='certificate-image' />
                    <p>Issued by: HackerRank</p>
                    <p>Date of Issue: 15-September-2020</p>
                  </div>


                </div>
              </div>



            </div>

          </div>
        </div>
      </div>

      {/* services Section */}
      <div id='services' className='services' >
        <div className='container'>
          <h1 className='sub-title'>My <span>Services</span></h1>
          <div className='services-list'>
            <div className="center-content">
              <i className='services-icons bx bx-code-alt'></i>
              <h2>Web Development</h2>
              <p>Get a website that truly represents your brand and goals. Our skilled developers are committed to making special, easy-to-use websites that make a lasting impact. Whether you're starting fresh or revamping, we create unique and responsive sites that match your style.</p>

            </div>

            <div class="center-content">
              <i className='services-icons bx bx-mobile'></i>
              <h2>Mobile Development</h2>
              <p>Whether you're targeting Apple users, Android users, or both, we design and develop apps that run seamlessly on both platforms. Reach a wider audience with apps optimized for different devices.</p>

            </div>

            <div class="center-content">
              <i className='services-icons bx bxl-apple'></i>
              <h2>UI/UX Design</h2>
              <p>Make your digital space both beautiful and easy to use with our UI/UX design services. We focus on creating designs that not only look good but also ensure a smooth and enjoyable experience for your users. Let's bring your vision to life with simplicity and style.</p>

            </div>



          </div>


        </div>

        {/* <div className='container why-choose'>
          <h3 className='sub-title'>Why <span>Choose</span> Us:</h3>
          <div className='choose-list'>
            <div className='choose-item'>
              <i className='choose-icon bx bx-check'></i>
              <h4>Design Excellence</h4>
              <p>Our team of skilled designers is dedicated to delivering top-notch designs that not only look great but also enhance the overall user experience.</p>
            </div>

            <div className='choose-item'>
              <i className="choose-icon fa-solid fa-handshake-simple"></i>
              <h4>Collaborative Approach</h4>
              <p>We believe in collaboration and work closely with our clients to understand their brand, goals, and user expectations, ensuring the design reflects the essence of the business.</p>
            </div>

            <div className='choose-item'>
              <i className='choose-icon bx bx-rocket'></i>
              <h4>Innovation</h4>
              <p>Stay ahead in the competitive market with innovative design solutions that set your digital products apart and leave a lasting impression on users.</p>
            </div>
          </div>
        </div> */}
      </div>


      {/* Projects Section */}
      <div id='projects' className='projects' >

        <div className='container'>
          <h1 className='sub-title'>Latest Projects</h1>
          <div className='project-list'>
            <div className="center-content">
              {/* <video controls>
                <source src={portfolio} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              {/* <div>
                <img src={voice} alt='project image'/>
              </div> */}
              <h2>Hotel website</h2>
              <p>
                I built a lively hotel website using React.js for the look and feel, and Firebase for the behind-the-scenes operations. The React.js frontend delivers an engaging and attractive user interface, while Firebase takes care of storing data and managing user authentication, ensuring a reliable backend.
                <br></br>
                My work allows visitors to effortlessly browse the hotel's offerings, move around different sections, and book rooms seamlessly. Thanks to Firebase's real-time updates, the website responds promptly, providing a user-friendly experience for potential guests. I focused on blending React.js efficiency with Firebase scalability, resulting in a well-rounded hotel website that's both stylish and functional.</p>
              <a href='https://github.com/TemoshoS/Hotel-App' className='read'>Learn more</a>

            </div>

            <div class="center-content">
              {/* <video controls>
                <source src={portfolio} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <h2>Country website</h2>
              <p>I've developed a Country website using React.js and APIs. This platform provides information about various countries, offering a dynamic and responsive user interface. By incorporating React.js, I've ensured an engaging and interactive design, allowing users to explore details about different countries effortlessly.
                <br></br>
                To enhance the website's functionality, I've integrated APIs, enabling real-time data updates and expanding the range of information available.</p>
              <a href='https://github.com/TemoshoS/Country-app' className='read'>Learn more</a>
            </div>


            <div class="center-content">
              {/* <video controls>
                <source src={portfolio} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <h2>e-Commerce website</h2>
              <p>I made an e-Commerce website using React.js and Firebase. It's an online shopping platform with a user-friendly design thanks to React.js. The website runs smoothly with Firebase in the background, handling things like storing data and making sure user interactions are updated in real-time.</p>
              <a href='https://github.com/TemoshoS/ecomm' className='read'>Learn more</a>
            </div>
            <div class="center-content">
              {/* <video controls>
                <source src={portfolio} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <h2>Weather website</h2>
              <p>
                I've created a Weather website using React.js and APIs. This platform provides straightforward and real-time weather information. With React.js, the website offers a user-friendly and responsive design, making it easy for users to check the weather conditions.</p>
              <a href='https://github.com/TemoshoS/Weather-app' className='read'>Learn more</a>
            </div>

            <div class="center-content">
              {/* <video controls>
                <source src={portfolio} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <h2>Restaurant app</h2>
              <p>I made a Restaurant app using React Native and Firebase. It's a mobile app that lets users easily explore and interact with restaurant offerings. With React Native, the app works smoothly on different mobile devices.

                Firebase is used in the background to store data and ensure seamless interactions.</p>
              <a href='https://github.com/TemoshoS/restaurant-app' className='read'>Learn more</a>
            </div>

            <div class="center-content">
              {/* <video controls>
                <source src={portfolio} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <h2>Voice Journal Recording app</h2>
              <p>
                I've developed a Voice Journal Recording app using React Native and Async Storage. This mobile application allows users to record and store voice entries, providing a convenient way to keep personal audio journals.

                Built with React Native, the app ensures a smooth and responsive user experience on various mobile devices. The use of Async Storage facilitates secure and efficient local storage of voice recordings, enhancing the reliability of the app.</p>
              <a href='https://github.com/TemoshoS/voice-journal' className='read'>Learn more</a>
            </div>

            <div class="center-content">
              {/* <video controls>
                <source src={portfolio} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <h2>News app</h2>
              <p>I've created a News app using React Native and APIs. This mobile application delivers news content in a convenient and user-friendly format. With React Native, the app ensures a smooth and responsive experience on various mobile devices.

                By integrating APIs, the News app stays up-to-date with the latest information, providing users with real-time news articles.</p>
              <a href='https://github.com/TemoshoS/news' className='read'>Learn more</a>
            </div>




          </div>
          <button onClick={toggleProjects} id="view-more-btn">View more</button>

        </div>

      </div>
      {/* Contact Section */}
      <div className='contact' id='contact'>
        <div className='content'>
          <h2 >Contact Us</h2>

        </div>
        <div className='container3'>
          <div className='contactInfo'>
            <div className='box'>
              <div className='icon'><i class="fa-solid fa-location-dot"></i></div>
              <div className='text'>
                <h3>Adrress</h3>
                <p>Winnie Mandela,<br></br>Tembisa<br></br>1632</p>

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
