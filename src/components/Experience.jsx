import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

const experienceItems = [
  {
    id: 1,
    type: "education",
    icon: <FaLaptopCode />,
    date: "2026",
    title: "Full-Stack Web Development Program",
    organization: "Software Development Bootcamp",
    description:
      "Completed hands-on training in frontend and backend development using HTML, CSS, JavaScript, React, Node.js, Express.js, MySQL, Git, GitHub, APIs, and responsive design.",
    highlights: [
      "Built full-stack web applications",
      "Created REST APIs",
      "Connected applications to MySQL databases",
      "Deployed projects using Vercel and Railway",
    ],
  },
  {
    id: 2,
    type: "work",
    icon: <FaBriefcase />,
    date: "2024 – Present",
    title: "Sales Associate",
    organization: "WHSmith North America / Marshall Retail Group",
    description:
      "Provide customer service in a fast-paced airport retail environment while handling transactions, organizing merchandise, and supporting daily store operations.",
    highlights: [
      "Communicate with diverse customers",
      "Process sales accurately",
      "Work effectively under pressure",
      "Collaborate with team members",
    ],
  },
  {
    id: 3,
    type: "work",
    icon: <FaBriefcase />,
    date: "2023 – 2024",
    title: "Graphic Designer",
    organization: "Menbere Printing",
    description:
      "Created visual materials for customers and prepared designs for print while maintaining accuracy, consistency, and attention to detail.",
    highlights: [
      "Created customer-focused visual designs",
      "Prepared files for print production",
      "Managed multiple design requests",
      "Applied strong attention to detail",
    ],
  },
  {
    id: 4,
    type: "work",
    icon: <FaBriefcase />,
    date: "2021 – 2024",
    title: "Data Entry Assistant",
    organization: "Tender Ethiopia",
    description:
      "Entered, reviewed, and organized business information while maintaining accurate digital records and supporting administrative workflows.",
    highlights: [
      "Maintained accurate records",
      "Organized large amounts of information",
      "Reviewed data for errors",
      "Supported administrative tasks",
    ],
  },
  {
    id: 5,
    type: "education",
    icon: <FaGraduationCap />,
    date: "2017 – 2022",
    title: "Bachelor of Science in Urban and Regional Planning",
    organization: "Hawassa University",
    description:
      "Studied urban development, planning, research, data analysis, design, and problem-solving with a focus on creating practical solutions for communities.",
    highlights: [
      "Research and data analysis",
      "Planning and project organization",
      "Visual communication",
      "Problem-solving",
    ],
  },
];

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">My Journey</p>

          <h2>Experience and education</h2>

          <p>
            My background combines software development, design, planning,
            data management, customer service, and teamwork.
          </p>
        </div>

        <div className="timeline">
          {experienceItems.map((item) => (
            <article className="timeline-item" key={item.id}>
              <div className="timeline-marker">
                <div className="timeline-icon">{item.icon}</div>
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <span className={`timeline-type ${item.type}`}>
                      {item.type === "work" ? "Experience" : "Education"}
                    </span>

                    <h3>{item.title}</h3>

                    <h4>{item.organization}</h4>
                  </div>

                  <span className="timeline-date">{item.date}</span>
                </div>

                <p>{item.description}</p>

                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;