import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/Css/Footer.css';

const Footer = () => {
  return (
    <>
      {/* Site footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              {/* Updated About Section */}
              <h6>About Us</h6>
              <p className="text-justify">
                The Most Eminent Visas and Immigration Consultant service provider in major metros and overseas with reliability since 1994. We are committed to provide reliable client support.
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              {/* Visit Us section */}
              <h6>Visit Us</h6>
              <br/>
              <ul className="footer-links">
                <li>
                 <h6> Corporate Office</h6>
                  Renaissance Terrace, NO.126L, 2nd floor,<br />
                  Opp.Bishop Appasamy college, Race Course,<br />
                  Coimbatore-641018.
                </li>
                <br/>
                <li>
                  <h6>Contact Us</h6>
                  <a href="tel:+919342899904">+91 93428 99904</a>
                </li>
                <br/>
                <li>
                  <h6>TIMINGS</h6>
                  9:00 AM - 6:30 PM
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              {/* Quick Links section */}
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="#">Terms of Use</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Career</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              {/* Copyright text section */}
              <p className="copyright-text">
                Copyright © 2023 BLUESTONE OVERSEAS CONSULTANT All rights reserved.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              {/* Social icons section */}
              <ul className="social-icons">
                <li>
                  <Link className="facebook" to="https://www.facebook.com/bluestoneocs">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link className="dribbble" to="https://www.instagram.com/bluestoneoverseas">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link className="gmail" to="#">
                    <i className="fa-brands fa-google"></i>
                  </Link>
                </li>
                <li>
                  <Link className="linkedin" to="https://www.linkedin.com/company/bluestoneocs/">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
