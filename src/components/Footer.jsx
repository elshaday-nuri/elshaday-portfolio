import {
  FaGithub,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
          <a href="#home" className="footer-logo">
            Elshaday<span>.</span>
          </a>

          <p>
            Junior Full-Stack Developer building responsive and practical web
            applications.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/elshaday-nuri"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/elshaday-nuri-26200425a/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn />
          </a>

          <a href="#home" aria-label="Return to top">
            <FaArrowUp />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {currentYear} Elshaday Nuri. All rights reserved.</p>

        <p>Built with React and Vite.</p>
      </div>
    </footer>
  );
}

export default Footer;