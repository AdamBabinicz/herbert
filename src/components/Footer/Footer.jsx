import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer bg-dark section-p" id="footer">
      <div className="container">
        <div className="section-title">
          <h3 className="text-brown">
            HERBERT <span className="text-white">w&nbsp;mediach</span>
          </h3>
        </div>
        <div className="footer-content">
          <ul className="footer-social-links flex flex-c">
            <li>
              <a
                href="//www.facebook.com/zbigniew.herbert.923"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="//twitter.com/ipngovpl/status/1552548459047157761"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="//www.instagram.com/p/CReU-IYH46y"
                className="text-white"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="//pl.pinterest.com/pin/309200330651268387"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest />
              </a>
            </li>
          </ul>
          <p className="text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text">
            Radom, 2022 - {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
