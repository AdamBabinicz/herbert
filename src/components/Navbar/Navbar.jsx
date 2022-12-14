import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navToggler, setNavToggler] = useState(false);
  const closeNavbar = () => setNavToggler(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="brand-and-toggler flex flex-sb">
            <Link
              to="/"
              className="navbar-brand text-uppercase fw-7 text-white ls-2 fs-22 w"
            >
              Zbigniew Herbert
            </Link>
            <button
              type="button"
              className="navbar-open-btn text-white"
              onClick={() => setNavToggler(!navToggler)}
            >
              <FaBars size={30} />
            </button>
            <div
              className={
                navToggler
                  ? "navbar-collapse show-navbar-collapse"
                  : "navbar-collapse"
              }
            >
              <button
                className="navbar-close-btn text-white"
                onClick={closeNavbar}
              >
                <FaTimes size={30} />
              </button>
              <ul className="navbar-nav" onClick={closeNavbar}>
                <li className="nav-item">
                  <a
                    href="#piosenki"
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                  >
                    Piosenki
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#fototeka"
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                  >
                    Fototeka
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#poeta"
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                  >
                    Poeta
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#przes??anie"
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                  >
                    Przes??anie
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                  >
                    Start
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
