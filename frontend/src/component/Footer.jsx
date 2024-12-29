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
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="footer-bottom">
        <p>© 2024. All rights reserved.</p>
      </div>
      </div>
      <div className="footer-section contact">
        <h3 className='footer_head'>Contact</h3>
        <p>+91-9786343389</p>
        <p>info.innoversedigitals@gmail.com</p>
      </div>
      <div className="footer-section follow">
        <h3 className='footer_head' >Follow</h3>
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
