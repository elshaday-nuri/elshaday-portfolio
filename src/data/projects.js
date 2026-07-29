const projects = [
  {
    id: 1,
    title: "Gebeya – Full-Stack E-Commerce Platform",
    description:
      "A modern full-stack e-commerce web application inspired by leading online marketplaces. Built with React, Node.js, Express, and MySQL, the platform allows users to browse products, search products, create accounts, securely log in with JWT authentication, manage shopping carts, place orders, and view order history. The platform also includes an admin dashboard for managing products and customer orders.",

    image: "/project-images/gebeya-project.png",

    technologies: [
      "React",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "Axios",
      "GitHub",
      "Vercel",
      "Railway",
    ],

    features: [
      "Responsive UI for desktop and mobile",
      "User registration & login",
      "Secure JWT authentication",
      "Product browsing",
      "Product search",
      "Shopping cart",
      "Checkout system",
      "Order history",
      "Admin dashboard",
      "REST API integration",
      "MySQL database",
      "Cloud deployment",
    ],

    liveUrl: "https://gebeya-one.vercel.app/",
    githubUrl: "https://github.com/elshaday-nuri/gebeya",

    featured: true,
  },

  {
    id: 2,
    title: "Appointment Request System",

    description:
      "A responsive appointment request web application that allows users to submit appointment requests through a clean and user-friendly interface. The project demonstrates frontend validation, backend processing, and email notification functionality.",

    image: "/project-images/appointment-project.png",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Node.js",
      "Express.js",
      "Nodemailer",
    ],

    features: [
      "Responsive appointment form",
      "Client-side validation",
      "Backend email handling",
      "Confirmation messages",
      "Clean user interface",
    ],

    liveUrl: "",
    githubUrl: "",

    featured: false,
  },
];

export default projects;