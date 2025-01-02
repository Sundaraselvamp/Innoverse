import React from 'react';
import '../style/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section services">
        <h3 className='footer_head'>Services</h3>
        <p>
          Empowering businesses with tailored digital solutions to meet their
          unique needs and achieve online success.
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61570559792944" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/innoverse_digital_solutions/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/innoverse-digital-solutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Innoverse Digital Solutions. All Rights Reserved.</p>
        </div>
      </div>
      <div className="footer-section contact">
        <h3 className='footer_head'>Contact</h3>
        <p>+91-9786343389</p>
        <p>info@innoversedigital.in</p>
      </div>
      <div className="footer-section follow">
        <h3 className='footer_head'>Follow</h3>
        <input
          type="email"
          className="email-input"
          placeholder="Your email for contact"
        />
        <button className="submit-button">Submit your information now</button>
      </div>
    </footer>
  );
};

export default Footer;
