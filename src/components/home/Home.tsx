import React from 'react';
import profileImg from '../../assets/Me2.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import { CiLinkedin } from "react-icons/ci";

import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import CV from '../../assets/cv.pdf';
import './home.css';


const Home = () => {
  return (
    <section className='home' id='home'>
      <div className="home__wrapper">
      <div className='home__container container'> 
        <p className="home__subtitle text-cs">
          Hi!, <span>My Name is</span>
        </p>
        <h1 className="home__title text-cs">
          <span>Kanok</span>jan 
        </h1>
        <p className="home__job">
          <span className="text-cs">I am</span> <b> Software Engineering Student</b>
        </p>

        <div className="home__img-wrapper">
          <div className="home__banner">
            <img src={profileImg} alt="" className='home__profile'/>
          </div>

          <p className="home__data home__data-one">
            <span className="text-lg">
              5 <b>+</b>
            </span>

            <span className="text-sm text-cs">
              Year of Education in <span> Coding</span>
            </span>
          </p>

          <p className="home__data home__data-two">
            <span className="text-lg">7 </span>

            <span className="text-sm text-cs">
              Completed <span> Projects</span>
            </span>
          </p>

        <img src={shapeOne} alt="" className="shape shape__1" />
        <img src={shapeTwo} alt="" className="shape shape__2" />
        <img src={shapeTwo} alt="" className="shape shape__3" />


        </div>

        <p className="home__text">
          I am a software engineering in Bangkok, Thailand. 
          Really hope to be a full-stack developer in the future!
        </p>

        <div className="home__socials">
          <a href="https://instagram.com/ssugar_k?igshid=OGQ5ZDc2ODk2ZA==" className="home__social-link">
            <FaInstagram/>
          </a>

          <a href="https://www.linkedin.com/in/kanokjan-singhsuwan-402167287" className="home__social-link">
            <CiLinkedin/>
          </a>
          
          <a href="https://www.facebook.com/profile.php?id=100005045054709" className="home__social-link">
            <FaFacebook/>
          </a>

          <a href="https://github.com/ksuperal" className="home__social-link">
            <FaGithub/>
          </a>
        </div>

        <div className='home__btns'>
          <a download='' href={CV} className='btn text-cs'>
            Download CV
          </a>

          <a href='#skills' className='hero__link text-cs'>
            My Skills
          </a>
        </div>
      </div>
      </div>
    </section>
  );
  
};

export default Home;