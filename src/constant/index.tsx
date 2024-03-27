// social media icon
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

// skills icon
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiGo,
  SiPostgresql
} from "react-icons/si";

export const skills = [
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiGo />, name: "Go" },
  { icon: <SiPostgresql />, name: "Postgresql" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiNodedotjs />, name: "Node" },
];

export const works = [
  {
    position: "Frontend Web Developer",
    place: "PT. Cerise",
    dateStar: "September 2023",
    dateEnd: "January 2024",
  },
];

export const portfolios = [
  {
    title: "Notes",
    live: "https://note-app.xxaexa.my.id/",
    fe: "https://github.com/xxaexa/notelify-fe",
    be: "https://github.com/xxaexa/notelify-be",
    description: "build a website to write a note for you",
    tags: [
      <SiTypescript />,
      <SiReact />,
      <SiRedux />,
      <SiTailwindcss />,
      <SiExpress />,
      <SiMongodb />,
    ],
  },
  {
    title: "Topup",
    live: "https://topup.xxaexa.my.id/",
    fe: "https://github.com/xxaexa/topup-fe",
    be: "https://github.com/xxaexa/topup-fe",
    android:
      "https://drive.google.com/file/d/1OeJ3VIg4XZLsiH5LkIIlQ2YlnVXlqDep/view?usp=drive_link",
    description: "build website for Topup online game",
    tags: [
      <SiTypescript />,
      <SiTailwindcss />,
      <SiExpress />,
      <SiMongodb />,
      <SiFirebase />,
    ],
  },

  {
    title: "Vape Store",
    live: "https://vape-store.xxaexa.my.id/",
    fe: "https://github.com/xxaexa/vapeStore-fe",
    be: "https://github.com/xxaexa/vapeStore-fe",
    description: "build e-commerce web for vapestore",
    tags: [
      <SiTypescript />,
      <SiReact />,
      <SiRedux />,
      <SiTailwindcss />,
      <SiExpress />,
      <SiMongodb />,
      <SiFirebase />,
    ],
  },
];

export const social = [
  {
    id: 0,
    title: "Instagram",
    icon: <FaInstagramSquare />,
    link: "https://www.instagram.com/andreekaaa1/",
  },
  {
    id: 1,
    title: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/andre-eka-94009b279/",
  },
  {
    id: 2,
    title: "Github",
    icon: <FaGithubSquare />,
    link: "https://github.com/xxaexa",
  },
];
