import React from 'react';

function Header() {
  const handleScroll = (id) => {
    const elem = document.querySelector(id);
    window.scroll({
      top: elem.offsetTop - 80,
      behavior: 'smooth'
    });
  };

  return (
    <header className="header">
      <div className="container header__container">
        <h1 className="logo">Velocity</h1>
        <nav className="header__nav">
          <ul>
            <li><a href="#main" onClick={() => handleScroll('#main')}>Home</a></li>
            <li><a href="#footer" onClick={() => handleScroll('#footer')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
