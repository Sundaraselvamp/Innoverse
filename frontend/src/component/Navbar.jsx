import React, { useState } from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useMyContext } from '../context/MyContext';

function Navbar() {
  const { isScrolled, setSelected, selected } = useMyContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle menu item selection
  const handleMenuItemClick = (val) => {
    setSelected(val);
    setIsMenuOpen(false); // Close the menu after selection
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`nav_main ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav_con">
        {/* Logo */}
        <div className="nav_con1">
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger Toggle for Mobile */}
        <div
          className={`nav_toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav_links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => handleMenuItemClick('home')}>
              <div
                className={`nav_item ${selected === 'home' ? 'active' : ''}`}
              >
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => handleMenuItemClick('about')}>
              <div
                className={`nav_item ${selected === 'about' ? 'active' : ''}`}
              >
                About
              </div>
            </Link>
          </li>
          <li>
            <Link to="/web-development" onClick={() => handleMenuItemClick('web')}>
              <div
                className={`nav_item ${selected === 'web' ? 'active' : ''}`}
              >
                Web Development
              </div>
            </Link>
          </li>
          <li>
            <Link to="/digital-marketing" onClick={() => handleMenuItemClick('digital')}>
              <div
                className={`nav_item ${selected === 'digital' ? 'active' : ''}`}
              >
                Digital Marketing
              </div>
            </Link>
          </li>
          <li>
            <Link to="/data-analytics" onClick={() => handleMenuItemClick('data')}>
              <div
                className={`nav_item ${selected === 'data' ? 'active' : ''}`}
              >
                Data Analytics
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => handleMenuItemClick('contact')}>
              <div
                className={`nav_item ${selected === 'contact' ? 'active' : ''}`}
              >
                Contact
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
