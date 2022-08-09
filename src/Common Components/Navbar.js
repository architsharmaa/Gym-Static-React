import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

import "./navbar_style.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../resources/media/logo.png";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <BrowserRouter>
      <>
        <nav className="main-nav">
          <div className="logo">
            <img src={Logo} alt="Logo" className="logoImg" />;
          </div>
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }
          >
            <ul>
              <li>
                <Link to="#home" smooth>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about" smooth>
                  About
                </Link>
              </li>
              <li>
                <Link to="#bmi">BMI Calculator</Link>
              </li>
              <li>
                <Link to="#service">Services</Link>
              </li>
              <li>
                <Link to="#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a href="https://www.youtube.com" target="architsharma">
                  <FaFacebookSquare className="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="architsharma">
                  <FaInstagramSquare className="instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="architsharma">
                  <FaYoutubeSquare className="youtube" />
                </a>
              </li>
            </ul>

            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
      </>
    </BrowserRouter>
  );
};

export default Navbar;
