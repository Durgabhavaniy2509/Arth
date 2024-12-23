import { useState } from 'react';
import './Header.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/Home" className="logo">< img src="\Images\Arth.webp" alt="" width={80} /></a>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul className="nav-links">
            <li><a href="/Home">Home</a></li>
            <li><a href="/OurFirm">Our Firm</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/Resources">Resources</a></li>
            <li><a href="/Contact">Contact</a></li>
           </ul>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Mobile Navigation */}
          <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <div className="mobile-menu-content">
                <ul className="nav-links">
                  <li><a href="/Home">Home</a></li>
                  <li><a href="/OurFirm">Our Firm</a></li>
                  <li><a href="/Projects">Projects</a></li>
                  <li><a href="/Resources">Resources</a></li>
                  <li><a href="/Contact">Contact</a></li>
                </ul>
            </div>
        </div>        
      </div>
    </nav>
  );
}

export default Navbar;

      

