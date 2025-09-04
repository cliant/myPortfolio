// src/components/header.tsx
import { Link } from 'react-router-dom'; // Link 컴포넌트 import
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Jun's Portfolio</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/interview">Interview</Link>
      </nav>
    </header>
  );
}

export default Header;