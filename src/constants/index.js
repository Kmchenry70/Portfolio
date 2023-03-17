import {
  // mobile,
  // backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  // nodejs,
  // mongodb,
  git,
  // figma,
  // docker,
  threejs,
  python,
  threeD,
  lyriks,
  fightingame,
  blender
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "3D Art",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Python",
    icon: python,
  },
  {
    name: "Blender",
    icon: blender,
  }
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "",
    company_name: "",
    icon: {},
    iconBg: "",
    date: "",
    points: [
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  }
];

const projects = [
  {
    name: "This Site",
    description:
      "Porfolio Site featuring 3d elements. Devoloped as a JS Mastery project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: threeD,
    source_code_link: "https://github.com/Kmchenry70/Portfolio",
    live_link: ''
  },
  {
    name: "Lyriks",
    description:
      "Music discovery site. Devoloped as a JS Mastery project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "pink-text-gradient",
      },
    ],
    image: lyriks,
    source_code_link: "https://github.com/Kmchenry70/lyriks",
    live_link: 'https://lyriks-music-exploration.netlify.app/'
  },
  {
    name: "Fighting Game",
    description:
      "A simple fighting game. Developed as a Chris Courses project.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
    ],
    image: fightingame,
    source_code_link: "https://github.com/Kmchenry70/Fighting-Game",
    live_link: 'https://km-fighting-game.netlify.app/'
  },
];

export { services, technologies, experiences, testimonials, projects };
