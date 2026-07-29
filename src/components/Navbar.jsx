import { useState } from "react";
import {
  FaBars,
  FaMoon,
  FaSun,
  FaTimes,
} from "react-icons/fa";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          Elshaday<span>.</span>
        </a>

        <div className="navbar-actions">
          <button
            className="theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
            title={
              theme === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          <button
            className="menu-button"
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;