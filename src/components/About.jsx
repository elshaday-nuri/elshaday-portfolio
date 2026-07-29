import ScrollReveal from "./ScrollReveal";
import {
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">About Me</p>

          <h2>More than just code</h2>

          <p>
            I combine technical skills, creativity, and problem-solving to
            build practical digital experiences.
          </p>
        </div>

        <div className="about-container">
          <ScrollReveal className="about-content">
            <h3>Junior Full-Stack Developer based in Virginia</h3>

            <p>
              I am a full-stack web developer with experience building
              responsive websites and web applications using React,
              JavaScript, Node.js, Express.js, and MySQL.
            </p>

            <p>
              My background in Urban and Regional Planning, graphic design,
              and data entry has strengthened my attention to detail,
              organization, creativity, and ability to solve real-world
              problems.
            </p>

            <p>
              I enjoy learning new technologies and turning ideas into
              functional, user-friendly applications. I am currently looking
              for opportunities where I can grow as a developer and
              contribute to meaningful projects.
            </p>

            <a href="#contact" className="primary-button">
              Let&apos;s Work Together
            </a>
          </ScrollReveal>

          <div className="about-cards">
            <ScrollReveal delay={100}>
              <article className="about-card">
                <div className="about-icon">
                  <FaLaptopCode />
                </div>

                <h3>Full-Stack Development</h3>

                <p>
                  Building complete applications with responsive frontends,
                  secure backends, and connected databases.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <article className="about-card">
                <div className="about-icon">
                  <FaLightbulb />
                </div>

                <h3>Problem Solving</h3>

                <p>
                  Breaking down complex problems and creating practical,
                  organized, and maintainable solutions.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <article className="about-card">
                <div className="about-icon">
                  <FaCode />
                </div>

                <h3>Clean Code</h3>

                <p>
                  Writing structured and reusable code while continuing to
                  improve through practice and feedback.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <article className="about-card">
                <div className="about-icon">
                  <FaUsers />
                </div>

                <h3>Teamwork</h3>

                <p>
                  Communicating clearly, supporting team goals, and learning
                  effectively in collaborative environments.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;