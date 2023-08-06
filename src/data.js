import { FiAtSign, FiPhone } from "react-icons/fi";
import bootstrap from "./assets/svg/skills/bootstrap.svg";
import css from "./assets/svg/skills/css.svg";
import html from "./assets/svg/skills/html.svg";
import javascript from "./assets/svg/skills/javascript.svg";
import next from "./assets/svg/skills/nextJS.svg";
import git from "./assets/svg/skills/git.svg";
import react from "./assets/svg/skills/react.svg";
import tailwind from "./assets/svg/skills/tailwind.svg";
import typescript from "./assets/svg/skills/typescript.svg";
import prime from "./assets/svg/skills/prime.png";
import redux from "./assets/svg/skills/redux.svg";
import dataStructure from "./assets/svg/skills/dataStructure.png";
import github from "./assets/svg/skills/gitHub.png";
import algorithm from "./assets/svg/skills/algorithm.png";
import aws from "./assets/svg/skills/aws.png";
import firebase from "./assets/svg/skills/firebase.png";
import antD from "./assets/svg/skills/antD.png";
import mui from "./assets/svg/skills/mui.png";
import mongodb from "./assets/svg/skills/mongodb.png";
import node from "./assets/svg/skills/node.png";
import sql from "./assets/svg/skills/sql.png";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaUser,
  FaHackerrank,
} from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import resume from "./assets/pdf/Resume.pdf";
import profile from "./assets/svg/profile.jpg";

export const HEADER_DATA = {
  name: "Maulik Savaliya",
  title: "Software Engineer",
  image: profile,
  resumePdf: resume,
  desciption:
    "I'm determined to make projects successful by setting clear goals and working hard. I'm motivated to learn and grow in my field. As a developer, I'm committed to giving my best effort and making a positive impact in my role.",
};

export const ABOUT_DATA = {
  title: "Who I am",
  description1:
    "My name's Maulik. I'm a Software Engineer based in Ahmedabad, India.",
  description2:
    "I am a MERN Stack Developer with over 2 years of experience. My expertise lies in building web applications using MongoDB, Express.js, React, and Node.js. I am also skilled in creating browser extensions using JavaScript, HTML, CSS and React. With a strong eye for detail and a passion for innovation, I enjoy tackling complex challenges and delivering high-quality solutions. I am always eager to learn and stay up-to-date with the latest technologies. My goal is to contribute my skills and experience to create impactful and user-friendly applications that make a positive difference.",
  image: 2,
};

export const EDUCATION_DATA = [
  {
    id: 1,
    institution: "Goverment Engineering College Patan",
    course: "Bachelor of Engineering - Computer Engineering",
    startYear: "2016",
    endYear: "2020",
  },
  {
    id: 2,
    institution: "Alpha Vidhya Sankul Junagadh",
    course: "Higher Secondary Education",
    startYear: "2014",
    endYear: "2016",
  },
];

export const SKILLS_DATA = [
  { title: "HTML", image: html },
  { title: "CSS", image: css },
  { title: "JavaScript", image: javascript },
  { title: "TypeScript", image: typescript },
  { title: "ReactJS", image: react },
  { title: "Redux", image: redux },
  { title: "NextJS", image: next },
  { title: "Bootstrap", image: bootstrap },
  { title: "Tailwind CSS", image: tailwind },
  { title: "Prime React", image: prime },
  { title: "Git", image: git },
  { title: "GitHub", image: github },
  { title: "Data Structure", image: dataStructure },
  { title: "Algorithms", image: algorithm },
  { title: "Ant Design", image: antD },
  { title: "MUI", image: mui },
  { title: "Firebase", image: firebase },
  { title: "AWS", image: aws },
  { title: "MongoDB", image: mongodb },
  { title: "SQL", image: sql },
  { title: "Node", image: node },
];

export const PROJECT_TECHS = {
  HTML: html,
  CSS: css,
  "Tailwind CSS": tailwind,
  ReactJS: react,
  Redux: redux,
  NodeJS: aws,
  MongoDB: mongodb,
  Git: git,
  GitHub: github,
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "7Span",
    jobtitle: "Software Engineer",
    startYear: "2023",
    endYear: "Present",
  },
  {
    id: 2,
    company: "GTCSYS",
    jobtitle: "Full Stack Developer",
    startYear: "2021",
    endYear: "2023",
  },
  {
    id: 3,
    company: "Sarjan Systems",
    jobtitle: "Internship Trainee",
    startYear: "2020",
    endYear: "2020",
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    name: "Shopper",
    description:
      "Shop hassle-free on our E-commerce site. Explore products in various categories, catch exciting deals, and breeze through an easy checkout process. Your go-to destination for convenient online shopping.",
    tags: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "ReactJS",
      "Redux",
      "NodeJS",
      "MongoDB",
      "Git",
      "GitHub",
    ],
    code: "https://github.com/MaulikSavaliya1998",
    demo: "https://github.com/tushardonga/pro-todo",
    image:
      "https://drive.google.com/uc?export=view&id=1SHtwtyaj2oe1TDvrmgMzvz-oRgfBIzHj",
  },
  {
    id: 2,
    name: "Airbnb-Clone",
    description:
      "Discover your ideal getaway through our Airbnb-inspired property listings. Browse diverse accommodations, from cozy homes to stunning apartments. Find your perfect stay and create memorable experiences with us.",
    tags: ["NextJS 13", "Prisma"],
    code: "https://github.com/MaulikSavaliya1998",
    demo: "https://github.com/tushardonga/Demo_eCommerce",
    image:
      "https://drive.google.com/uc?export=view&id=1WZq5XxT1qT1DBCa26Zh_zk0pdRIukkzg",
  },
  {
    id: 3,
    name: "GitHub Analysis",
    description:
      "Check out my GitHub analysis project! It lists recent repo creators in 7 days. Clicking on a person shows commits, additions, deletions, and contributions in a user-friendly graph. Explore GitHub activity like never before!.",
    tags: ["React", "MUI"],
    code: "https://codesandbox.io/s/github-analysis-hv57x7",
    demo: "https://github.com/tushardonga/Demo_eCommerce",
    image:
      "https://drive.google.com/uc?export=view&id=1WZq5XxT1qT1DBCa26Zh_zk0pdRIukkzg",
  },
  {
    id: 4,
    name: "Chrome Extension",
    description:
      "I developed a browser extension enabling users to create collections across tabs for easy one-click access. Currently, I'm working on another extension to allow users to seamlessly extract data and send connection requests from any LinkedIn profile.",
    tags: ["React", "MUI"],
    code: "https://github.com/MaulikSavaliya1998",
    demo: "https://github.com/tushardonga/Demo_eCommerce",
    image:
      "https://drive.google.com/uc?export=view&id=1WZq5XxT1qT1DBCa26Zh_zk0pdRIukkzg",
  },
];

export const CONTACT_DATA = [
  {
    label: "email",
    value: "mauliksavaliya.work@gmail.com",
    icon: <FiAtSign />,
  },
  { label: "phone", value: "+916355105023", icon: <FiPhone /> },
];

const iconClass = "text-3xl tab:text-4xl mx-4 animate-bounce text-secondary";
export const SOCIALS_DATA = [
  {
    label: "GitHub",
    url: "https://github.com/MaulikSavaliya1998",
    icon: <FaGithub aria-label="GitHub" className={iconClass} />,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/maulik-savaliya-1603521a1/",
    icon: <FaLinkedinIn aria-label="LinkedIn" className={iconClass} />,
  },
  {
    label: "Twitter",
    url: "https://twitter.com/_Maulik_1998",
    icon: <FaTwitter aria-label="Twitter" className={iconClass} />,
  },
  {
    label: "Hacker Renk",
    url: "https://www.hackerrank.com/savaliyamaulik98",
    icon: <FaHackerrank aria-label="Hacker Renk" className={iconClass} />,
  },

  // {
  //   label: "Stack Overflow",
  //   url: "https://stackoverflow.com/users/10147342/tushar",
  //   icon: <FaStackOverflow aria-label="Stack Overflow" className={iconClass} />,
  // },
];

export const SIDEBAR_DATA = [
  { label: "Home", icon: <IoHomeSharp className="text-xl lg:text-2xl" /> },
  { label: "About", icon: <FaUser className="text-xl lg:text-2xl" /> },
  {
    label: "Education",
    icon: <HiDocumentText className="text-xl lg:text-2xl" />,
  },
  { label: "Skills", icon: <BsCodeSquare className="text-xl lg:text-2xl" /> },
  { label: "Contact", icon: <MdPhone className="text-xl lg:text-2xl" /> },
];
