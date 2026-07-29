import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiAxios,
  SiExpress,
  SiJsonwebtokens,
  SiMysql,
  SiPostman,
  SiVercel,
  SiVite,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    category: "Frontend",
  },
  {
    name: "React",
    icon: <FaReact />,
    category: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    category: "Frontend",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    category: "Backend",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    category: "Database",
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens />,
    category: "Authentication",
  },
  {
    name: "Axios",
    icon: <SiAxios />,
    category: "API",
  },
  {
    name: "Java",
    icon: <FaJava />,
    category: "Programming",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    category: "Tools",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    category: "Tools",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    category: "Deployment",
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">My Skills</p>
          <h2>Technologies I work with</h2>
          <p>
            Tools and technologies I use to build, test, and deploy modern web
            applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>

              <div>
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;