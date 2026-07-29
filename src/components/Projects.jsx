import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projects from "../data/projects";
import ScrollReveal from "./ScrollReveal";

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">My Work</p>

          <h2>Featured projects</h2>

          <p>
            Applications I have designed and developed using modern frontend,
            backend, database, and deployment technologies.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 120}>
              <article
                className={
                  project.featured
                    ? "project-card featured-project"
                    : "project-card"
                }
              >
                <div className="project-image-container">
                  {project.featured && (
                    <span className="featured-label">Featured Project</span>
                  )}

                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    className="project-image"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";

                      const placeholder =
                        event.currentTarget.nextElementSibling;

                      if (placeholder) {
                        placeholder.style.display = "flex";
                      }
                    }}
                  />

                  <div className="project-image-placeholder">
                    <span>Project Screenshot</span>
                    <p>Add an image inside public/project-images</p>
                  </div>
                </div>

                <div className="project-content">
                  <p className="project-number">
                    Project {String(project.id).padStart(2, "0")}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="technology-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-features">
                    <h4>Key Features</h4>

                    <ul>
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-links">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="primary-button"
                      >
                        Live Demo
                        <FaExternalLinkAlt />
                      </a>
                    ) : (
                      <span className="disabled-project-link">
                        Live Demo Coming Soon
                      </span>
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="secondary-button"
                      >
                        View Code
                        <FaGithub />
                      </a>
                    ) : (
                      <span className="disabled-project-link">
                        Code Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <a
          href="https://github.com/elshaday-nuri"
          target="_blank"
          rel="noreferrer"
          className="all-projects-link"
        >
          View more projects on GitHub
          <FaArrowRight />
        </a>
      </div>
    </section>
  );
}

export default Projects;