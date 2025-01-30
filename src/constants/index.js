import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  covid, // Imported correctly
  stegano, // Imported correctly
  netflix, // Imported correctly
  rps, 
  threejs,
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Fronrend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Internship",
    company_name: "XANTHER.AI • Remote",
 
    iconBg: "#383E56",
    date: "April 2024 - December 2024",
    points: [
      "Developed and implemented web-based applications using React.js, JavaScript, HTML, CSS, and other related technologies.",
      "Performed evaluations of software and systems to verify quality.",
      "Developed and executed interactive UI designs for web platforms.",
      "Crafted dynamic React apps employing Redux to manage state and interfaced with RESTful API endpoints.",
      "Created initial versions of web apps with HTML, CSS, JavaScript alongside React and Angular frameworks.",
      "Debugged and resolved issues related to React components.",
    ],
  },
  {
    title: "Skills",
    company_name: "Technical Expertise",
    
    iconBg: "#E6DEDD",
    date: "Technical Skills",
    points: [
      "Proficient Languages: C++, C, Python",
      "Prior experience: React.js, JavaScript, HTML, CSS",
      "CodeChef: Solved over 400 problems",
      "Highest Rating: 1382 on CodeChef",
      "DSA: 90% (C++ Online Test and Quiz) ~ CodeChef (Sept'24)",
      "DSA: 67% (DSA test using C++) ~ CodeChef (Nov'24)",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "During this time, she demonstrated exceptional skills and dedication, contributing to various software projects. She worked with technologies like React, Node.js, Express.js, and MongoDB, significantly enhancing scalable web applications. We appreciate their commitment and valuable contributions to our organization.",
    name: "Raj Bhattacharya",
    designation: "Founder",
    company: "XANTHER.AI",
    image: null, // No image needed
  },
];

const projects = [
  {
    name: "Image Steganography",
    description:
      "A React.js website for securely encoding and decoding hidden messages within images. Features include: Encode (Embed text in images), Decode (Extract hidden messages using a decryption password), Navbar (A fixed menu with options for About, Encode, and Decode pages).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: stegano,
    source_code_link: "https://github.com/pratichighosh/Image-steganography-",
  },
  {
    name: "Netflix Clone",
    description:
      "A React.js web app replicating Netflix's core features: Real-Time Content (Displays trending movies, popular TV shows, and genres using RapidAPI), Trailers (Connects seamlessly to YouTube for previews), Responsive Design (Offers a smooth, mobile-friendly interface).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/pratichighosh/Netflix-Clone",
  },
  {
    name: "Rock-Paper-Scissors Game",
    description:
      "An advanced React and Vite game featuring: Extended Options (Adds Lizard and Spock to the classic game), Interactive Design (Modern interface with dynamic buttons), Score Tracker (Displays player progress), Rules Button (Provides quick access to game mechanics).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: rps,
    source_code_link: "https://github.com/pratichighosh/Rock-Paper-Scissors",
  },
  {
    name: "Covid-19 Update",
    description:
      "A React.js app delivering real-time COVID-19 statistics: Global & Country-Specific Data (Tracks confirmed cases, recoveries, and deaths), Data Visualization (Features charts and graphs for easy interpretation), Live API Integration (Ensures accurate and up-to-date information).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "chart.js",
        color: "pink-text-gradient",
      },
    ],
    image: covid,
    source_code_link: "https://github.com/pratichighosh/covidupdate",
  },
];


export { services, technologies, experiences, testimonials, projects };
