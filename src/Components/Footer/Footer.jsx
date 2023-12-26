import React from "react";
import logo from "../../assets/images/logo1.png";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { RxResume } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="image">
        <img src={logo} alt="Logo" />
      </div>
      <div className="content">
        <h3>Made with passion and Love  by Sudheer</h3>
      </div>

      <div className="logo">
        <a
          href="https://www.linkedin.com/in/talapudisudheer99/"
          target="_blank"
        >
          <IoLogoLinkedin className="linkdin" />
        </a>
        <a href="https://github.com/Sudheer-webDeveloper" target="_blank">
          <FaGithub className="github" />
        </a>
        <a
          href="https://drive.google.com/file/d/1QtlqW18-1hfclai60nWIPwSIgFNR-Isc/view"
          target="_blank"
        >
          <RxResume className="resume" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


