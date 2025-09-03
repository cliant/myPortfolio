import React from 'react';
import './Header.css'; // Header 전용 CSS 파일

function Header() {
  return (
    <header className="header">
      <div className="logo">Jun's Portfolio</div>
      <nav className="nav">
        <a href="">Home</a>
        <a href="#about">About me</a>
        <a href="#projects">Projects</a>
        <a href="#interview">Interview</a>
      </nav>
    </header>
  );
}

export default Header;