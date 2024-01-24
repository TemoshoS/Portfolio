import React, { useState } from 'react'
import NavBar from '../components/navBar';
import profile from '../profile.jpg'
import tsa from '../images/tsa.jpg';
import codetribe from '../images/codetribe.jpg';
import temosho from '../images/temosho.jpg';
import angular from '../images/angular.JPG';
import azure from '../images/azure.JPG';
import soft from '../images/soft.JPG';
import sql from '../images/sql.JPG';



function About() {
  const [activeTab, setActiveTab] = useState('skills');
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div id='about'>
      <div className='container4'>
        <div className='row1'>
          <div className='about-col-1'>
            <img src={temosho} alt='profile' />
          </div>
          <div className='about-col-2'>
            <h1 className='sub-title1'>About <span>Me</span></h1>
            <p>I'm Temosho Shaku, a skilled Web and Mobile Developer in Tshwane and Johannesburg, South Africa.
              I work with different technologies like React.js, React Native, Angular, Java, SQL, and Node.js.
              I've turned creative ideas into good software solutions with my National Diploma in Information Technology.</p>

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
            </div>


            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id='experience'>
              <ul>
                <li>
                  <span>MLAB (CodeTribe Academy)</span>
                  <p>Position: Web and Mobile React Developer - trainee</p>
                  <p>Duration: June 2023 - December 2023</p>
                  <p>Description: As a trainee Web and Mobile React Developer at MLAB (CodeTribe Academy), I gained hands-on experience in React.js, React Native, and web/mobile development. I worked on various projects, enhancing my skills and contributing to real-world applications.</p>
                </li>
                <li>
                  <span>Moepi Publishing</span>
                  <p>Position: Java Developer - intern</p>
                  <p>Duration: July 2022 - June 2023</p>
                  <p>Description: As a Java Developer intern at Moepi Publishing, I was involved in designing user interfaces using Java Swing and implementing functionality with Java. I actively contributed to coding tasks and utilized MySQL for database management.</p>
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
                  <p className='degree'>National Diploma: Information Technology Software Development </p>
                  <p>2023</p>

                </li>
                <li>
                  <span>Mokhulwane Secondary School</span>
                  <p className='degree'>Grade 12</p>
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
  )
}

export default About