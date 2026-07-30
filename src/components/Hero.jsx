import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-label">Hello, my name is</p>

          <h1>
            Elshaday <span>Nuri</span>
          </h1>

          <h2>Junior Full-Stack Developer</h2>

          <p className="hero-description">
            I build responsive, user-friendly web applications using React,
            JavaScript, Node.js, Express, and MySQL. I enjoy turning ideas into
            practical digital experiences.
          </p>

          <div className="hero-buttons">
  <a href="#projects" className="btn btn-primary">
    View My Projects
    <FaArrowRight />
  </a>

  <a
    href="/Elshaday-Nuri-Resume.pdf"
    className="btn btn-primary"
    download="Elshaday-Nuri-Resume.pdf"
  >
    Download Resume
    <FaDownload />
  </a>
</div>
          

          <div className="social-links">
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
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </p>

              <p className="code-indent">
                name: <span className="code-green">"Elshaday Nuri"</span>,
              </p>

              <p className="code-indent">
                role:{" "}
                <span className="code-green">"Full-Stack Developer"</span>,
              </p>

              <p className="code-indent">
                skills: [
                <span className="code-green">
                  "React", "Node.js", "MySQL"
                </span>
                ],
              </p>

              <p className="code-indent">
                available: <span className="code-purple">true</span>
              </p>

              <p>{"};"}</p>
            </div>
          </div>
<div className="hero-visual">
  <div className="hero-card">
    {/* your existing code card */}
  </div>

  {/* NEW PROFILE PHOTO */}
  <div className="profile-photo">
    <img src="/profile.png" alt="Elshaday Nuri" />
  </div>

  <div className="experience-badge">
    <strong>Full Stack</strong>
    <span>Web Development</span>
  </div>
</div>
          <div className="experience-badge">
            <strong>Full Stack</strong>
            <span>Web Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;