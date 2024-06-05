import React, { useState } from 'react';
import '../';

function Navbar({ showButton }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar-container ${isOpen ? 'open' : ''}`}>
      {showButton && (
        <button className="open-button" onClick={handleButtonClick}>
          {isOpen ? 'Close' : 'Open'}
        </button>
      )}
      <nav className={`navbar ${isOpen ? 'visible' : 'hidden'}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;