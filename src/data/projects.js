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
  title: "Mavie Medical Center",
  description:
    "A full-stack medical appointment management system that allows patients to request appointments online and gives administrators a secure dashboard to review and manage appointment requests.",
  image: "/project-images/mavie-project.png",
  technologies: [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MySQL",
    "Axios",
    "JWT",
    "Vercel",
    "Railway",
  ],
  features: [
    "Online appointment request form",
    "Client-side form validation",
    "Secure admin login",
    "Admin dashboard",
    "Appointment management",
    "REST API integration",
    "MySQL database",
    "Responsive design",
    "Cloud deployment",
  ],
  liveUrl: "https://mavie-medical-center.vercel.app/appointment",
  githubUrl: "https://github.com/elshaday-nuri/mavie-medical-center",
  featured: false,
},
];

export default projects;