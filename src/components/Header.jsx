import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { setupMenuAnimation } from "../animations/menuAnimations";
import "../styles/Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setupMenuAnimation();

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]); // also re-run if user changes page

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        {/* Logo */}
        <div className="header-left">
          <Link to="/" className="logo">Halgunset</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav nav-desktop">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/work">Work Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Hamburger Toggle */}
        <button className="menu-toggle" id="menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <nav className="nav nav-mobile" id="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/work">Work Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
