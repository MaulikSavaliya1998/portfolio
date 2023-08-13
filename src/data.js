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
import img1 from "./assets/svg/1.png";
import img2 from "./assets/svg/2.png";
import img3 from "./assets/svg/3.png";
import Clikaways from "./assets/svg/clickaway.png";
import ClikawaysLogin from "./assets/svg/clickaway-login.png";
import PropertyDetail from "./assets/svg/property-detail.png";
import ClickawayMobile from "./assets/svg/clickaway-mobile.png";
import prisma from "./assets/svg/skills/prisma.png";
import ShopperLanding from "./assets/svg/shopper.png";

export const HEADER_DATA = {
  name: "Jigar Viroja",
  title: "Software Engineer",
  image: profile,
  resumePdf: resume,
  desciption:
    "I'm determined to make projects successful by setting clear goals and working hard. I'm motivated to learn and grow in my field. As a developer, I'm committed to giving my best effort and making a positive impact in my role.",
};

export const ABOUT_DATA = {
  title: "Who I am",
  description1:
    "My name's jigar. I'm a Software Engineer based in Ahmedabad, India.",
  description2:
    "As a seasoned MERN Stack developer with over 2.8 years of experience, I excel in creating responsive layouts and writing high-quality, efficient code. My expertise also includes TypeScript, and I am well-versed in effectively communicating with clients to meet their specific requirements. With a Bachelor of Engineering in Computer Engineering, I am passionate about crafting seamless web solutions and always eager to take on new challenges. Let's connect and explore how I can contribute to your projects and bring them to new heights!",
  image: 2,
  address: "Thaltej, Ahmedabad, Gujarat, India - 380052",
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
    institution: "Ramkabir Higher Secondary School, Surat",
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
  JavaScript: javascript,
  TypeScript: typescript,
  Bootstrap: bootstrap,
  MUI: mui,
  ReactJS: react,
  Redux: redux,
  NextJS: next,
  "Prime React": prime,
  "Data Structure": dataStructure,
  Algorithms: algorithm,
  "Ant Design": antD,
  Firebase: firebase,
  AWS: aws,
  MongoDB: mongodb,
  SQL: sql,
  NodeJS: aws,
  Git: git,
  GitHub: github,
  Prisma: prisma,
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "Bacancy Technology",
    jobtitle: "Software Engineer",
    startYear: "2023",
    endYear: "Present",
  },
  {
    id: 2,
    company: "CREST Infosystems Pvt. Ltd.",
    jobtitle: "Full Stack Developer",
    startYear: "2022",
    endYear: "2023",
  },
  {
    id: 3,
    company: "3Embed Software Technolgies Pvt. Ltd.",
    jobtitle: "Frontend Engineer",
    startYear: "2020",
    endYear: "2022",
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
    img1: ShopperLanding,
    code: "https://github.com/MaulikSavaliya1998",
    demo: "https://csb-hv57x7-2uo4cfiqn-mauliksavaliya1998.vercel.app/",
    image:
      "https://drive.google.com/uc?export=view&id=1SHtwtyaj2oe1TDvrmgMzvz-oRgfBIzHj",
  },
  {
    id: 2,
    name: "Airbnb-Clone",
    description:
      "Discover your ideal getaway through our Airbnb-inspired property listings. Browse diverse accommodations, from cozy homes to stunning apartments. Find your perfect stay and create memorable experiences with us.",
    tags: ["NextJS", "Prisma"],
    code: "https://github.com/jigarviroja/nextjs-airbnb",
    demo: "https://clickaway-git-master-jigarviroja.vercel.app",
    img1: Clikaways,
    img2: ClikawaysLogin,
    img3: PropertyDetail,
    img4: ClickawayMobile,
  },
  {
    id: 3,
    name: "GitHub Analysis",
    description:
      "Check out my GitHub analysis project! It lists recent repo creators in 7 days. Clicking on a person shows commits, additions, deletions, and contributions in a user-friendly graph. Explore GitHub activity like never before!.",
    tags: ["HTML", "CSS", "ReactJS", "Redux", "MUI"],
    img1: img1,
    img2: img3,
    img3: img2,
    img4: "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
    code: "https://codesandbox.io/s/github-analysis-hv57x7?file=/src/App.js",
    demo: "https://csb-hv57x7-2uo4cfiqn-mauliksavaliya1998.vercel.app/",
    image:
      "https://drive.google.com/uc?export=view&id=1SHtwtyaj2oe1TDvrmgMzvz-oRgfBIzHj",
  },
  {
    id: 4,
    name: "Chrome Extension",
    description:
      "I developed a browser extension enabling users to create collections across tabs for easy one-click access. Currently, I'm working on another extension to allow users to seamlessly extract data and send connection requests from any LinkedIn profile.",
    tags: ["ReactJS", "MUI"],
    code: "https://github.com/MaulikSavaliya1998/chrome-extension",
    demo: "https://github.com/tushardonga/Demo_eCommerce",
    image:
      "https://drive.google.com/uc?export=view&id=1WZq5XxT1qT1DBCa26Zh_zk0pdRIukkzg",
  },
];

export const CONTACT_DATA = [
  {
    label: "email",
    value: "jigarviroja.business@gmail.com",
    icon: <FiAtSign />,
  },
  { label: "phone", value: "+919714493203", icon: <FiPhone /> },
];

const iconClass = "text-3xl tab:text-4xl mx-4 animate-bounce text-secondary";
export const SOCIALS_DATA = [
  {
    label: "GitHub",
    url: "https://github.com/jigarviroja",
    icon: <FaGithub aria-label="GitHub" className={iconClass} />,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/jigar-viroja-a80405185/",
    icon: <FaLinkedinIn aria-label="LinkedIn" className={iconClass} />,
  },
  {
    label: "Twitter",
    url: "https://twitter.com/viroja_jig7740",
    icon: <FaTwitter aria-label="Twitter" className={iconClass} />,
  },
  // {
  //   label: "Hacker Renk",
  //   url: "https://www.hackerrank.com/savaliyamaulik98",
  //   icon: <FaHackerrank aria-label="Hacker Renk" className={iconClass} />,
  // },

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
