import React from 'react'
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="https://instagram.com/ssugar_k?igshid=OGQ5ZDc2ODk2ZA==" className="footer__social-link">
            <FaInstagram/>
          </a>

          <a href="https://www.linkedin.com/in/kanokjan-singhsuwan-402167287" className="footer__social-link">
            <CiLinkedin/>
          </a>

          <a href="https://www.facebook.com/profile.php?id=100005045054709" className="footer__social-link">
            <FaFacebook/>
          </a>

          <a href="https://github.com/ksuperal" className="footer__social-link">
            <FaGithub/>
          </a>
        </div>
        <p className="footer__copyright text-cs">
            Made by <span>Kanokjan Singhsuwan</span>
        </p>

        <p className="footer__copyright text-cs">
            &copy; 2023 <span>Kanokjan Singhsuwan</span> All right reserved.
        </p>
        </div>
    </footer>
  )
}

export default Footer