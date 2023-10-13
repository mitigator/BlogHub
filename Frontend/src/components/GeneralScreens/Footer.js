import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../../Css/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
            <Link to="/" className="logo">
                    <h5>
                        BlogHub

                    </h5>
                </Link>
              <div className="footer-links">
              <p className="copyright-blog">Created By:</p>
                <p className="copyright-blog">Shubham Mishra</p>
                <p className="copyright-blog">Sagar</p>
                <p className="copyright-blog">Kaushik</p>
              </div>
              <div className="footer-social">
                <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </footer>
      );
    }

export default Footer;
