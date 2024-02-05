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
  SiNextdotjs,
} from "react-icons/si";

export const skills = [
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React & React Native" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiNodedotjs />, name: "Node" },
  { icon: <SiMongodb />, name: "MongoDB" },
];

export const portfolios = [
  {
    title: "Genshin DB",

    live: "https://genshin-db.xxaexa.my.id/",
    android: "https://expo.dev/artifacts/eas/hgua3z82uxHCQ6Zot7x9wy.apk",
    description:
      "build website to show artifact,character and weapon in genshin impact",
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
    code: "",
    android:
      "https://drive.google.com/file/d/1OeJ3VIg4XZLsiH5LkIIlQ2YlnVXlqDep/view?usp=drive_link",
    description:
      "build website for Topup online game and integration with payment gateway",
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

  {
    title: "Vape Store",
    live: "https://vape-store.xxaexa.my.id/",
    code: "",
    description:
      "build e-commerce web for vapestore and have a dashboard admin and user",
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

  {
    title: "AIO",
    live: "https://aio.xxaexa.my.id/",
    code: "",
    description:
      "build a website to demonstrate slicing capabilities and create a responsive website",
    tags: [
      <SiTypescript />,
      <SiReact />,
      <SiRedux />,
      <SiTailwindcss />,
      <SiNextdotjs />,
    ],
  },
];

export const social = [
  {
    id: 1,
    title: "Ig",
    icon: <FaInstagramSquare />,
    link: "https://www.instagram.com/andreekaaa1/",
  },
  {
    id: 2,
    title: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/andre-eka-94009b279/",
  },
  {
    id: 3,
    title: "Github",
    icon: <FaGithubSquare />,
    link: "https://github.com/xxaexa",
  },
];
