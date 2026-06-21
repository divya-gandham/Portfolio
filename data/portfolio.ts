import { TbBrandReactNative } from "react-icons/tb";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiGit,
  SiJest,
  SiFigma,
  SiExpress,
  SiGraphql,
  SiPython,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export const skillsData = {
  row1: [
    { name: "React Native", icon: TbBrandReactNative, color: "#22d3ee", light_color: "#0891b2" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", light_color: "#000000" },
    { name: "React", icon: SiReact, color: "#22d3ee", light_color: "#0891b2" },
    { name: "Node.js", icon: SiNodedotjs, color: "#22c55e", light_color: "#16a34a" },
    { name: "TypeScript", icon: SiTypescript, color: "#3b82f6", light_color: "#2563eb" },
    { name: "JavaScript", icon: SiJavascript, color: "#facc15", light_color: "#ca8a04" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8", light_color: "#0284c7" },
  ],
  row2: [
    { name: "Redux", icon: SiRedux, color: "#8b5cf6", light_color: "#7c3aed" },
    { name: "React Query", icon: SiReact, color: "#f87171", light_color: "#dc2626" },
    { name: "GraphQL", icon: SiGraphql, color: "#ec4899", light_color: "#db2777" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#60a5fa", light_color: "#2563eb" },
    { name: "MongoDB", icon: SiMongodb, color: "#22c55e", light_color: "#16a34a" },
    { name: "Firebase", icon: SiFirebase, color: "#facc15", light_color: "#ca8a04" },
    { name: "Azure", icon: VscAzure, color: "#3b82f6", light_color: "#2563eb" },
  ],
  row3: [
    { name: "Python", icon: SiPython, color: "#60a5fa", light_color: "#2563eb" },
    { name: "Express", icon: SiExpress, color: "#d4d4d8", light_color: "#52525b" },
    { name: "Docker", icon: SiDocker, color: "#3b82f6", light_color: "#2563eb" },
    { name: "Git", icon: SiGit, color: "#f97316", light_color: "#ea580c" },
    { name: "Jest", icon: SiJest, color: "#f87171", light_color: "#dc2626" },
    { name: "Figma", icon: SiFigma, color: "#ec4899", light_color: "#db2777" },
  ],
};

export const projectsData = [
  {
  title: "MTN MyMoMo",
  description:
    "Large-scale fintech platform powering mobile money services across multiple African markets with secure payments and digital financial solutions.",

  image: "/momo.png",
  isMobileApp: true,
  imageClassName: "max-w-[100px]",

  appStoreUrl:
    "https://apps.apple.com/in/app/momo-app/id6532622230",

  playStoreUrl:
    "https://play.google.com/store/apps/details?id=mtnft.momo.consumer&hl=en",

  skills: [
    "React Native",
    "TypeScript",
    "Redux",
    "Zustand",
    "Jest",
    "Firebase",
    "Azure DevOps",
    "CodePush"
  ],

  overview: [
    "Contributed to the development of MTN MyMoMo, a large-scale fintech platform serving millions of users across African markets.",
    "Built and optimized cross-platform mobile features using React Native and TypeScript.",
    "Integrated secure payment workflows and digital financial services while ensuring a seamless user experience.",
    "Improved application performance, maintainability, and scalability through reusable components and modern state management solutions."
  ],

  features: [
    "Payments",
    "Transfers",
    "Bill Pay",
    "Airtime",
    "Authentication",
    "CodePush",
    "State Management",
    "Cross Platform"
  ],

  achievements: [
    "2M+ Users",
    "$50M+ Transactions",
    "7 Markets",
    "Performance",
    "Reusable UI",
    "Scalable Architecture"
  ]
},
  {
  title: "JobSphere",

description:
"Full-stack recruitment platform allowing employers to manage job postings and candidates to search and apply for opportunities.",

image: "/jobportal.png",

liveUrl: "https://jobsforu.netlify.app/",

overview: [
"Developed a full-stack job portal application using React.js, Node.js, Express.js, and MongoDB to streamline the recruitment process.",
"Implemented separate workflows for employers and candidates, allowing employers to manage job listings while enabling users to search and apply for jobs efficiently.",
"Designed secure RESTful APIs and integrated MongoDB for storing job postings, user profiles, and application details.",
"Optimized performance and scalability to support multiple concurrent users and provide a smooth user experience."
],

features: [
  "Job Posting",
  "Job Search",
  "Resume Upload",
  "Applications",
  "User Profiles",
  "REST APIs",
  "MongoDB",
  "Responsive UI"
],

achievements: [
  "Full-Stack App",
  "Role-Based Access",
  "Modular APIs",
  "Scalable Design",
  "Optimized Queries",
  "Smooth Performance"
],

skills: [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JavaScript",
  "CSS",
  "Bootstrap",
  "JWT",
  "Responsive Design"
]
},
{
  title: "Nxt Trendz",
  description:
    "E-commerce platform inspired by Amazon and Flipkart featuring authentication, product catalog, search, and filtering capabilities.",

  image: "/nxttrendz.png",

  liveUrl: "https://divyaaanxtrendz.ccbp.tech/",

  skills: [
  "React.js",
  "JavaScript",
  "Bootstrap",
  "CSS",
  "REST APIs",
  "JWT",
  "React Router",
  "Authentication"
],

  overview: [
    "Built an e-commerce web application inspired by Amazon and Flipkart using React.js.",
    "Implemented secure user authentication using JWT tokens and login APIs.",
    "Developed product listing and product details pages with React Router.",
    "Added search, sorting, and filtering functionalities for a better shopping experience."
  ],

  features: [
    "Authentication",
    "Products",
    "Filters",
    "Search",
    "Sorting",
    "JWT Auth"
  ],

  achievements: [
    "E-Commerce",
    "API Integration",
    "Protected Routes",
    "Dynamic Routing",
    "Responsive UI",
    "JWT Security"
  ]
},
  {
    title: "Emoji Memory Game",

    description: "Created a responsive Emoji Memory Game where users win by clicking unique emojis until all are clicked, with emojis randomized after each click.",

    image: "/emoji.png",

    liveUrl: "https://your-live-url.com",

    githubUrl: "https://github.com/your-repo",

    skills: [
  "React.js",
  "JavaScript",
  "CSS",
  "Bootstrap",
  "State Management",
  "Conditional Rendering",
  "Game Logic",
  "Responsive Design"
],
    overview: [
      "Built an interactive memory game using React.js and TypeScript.",
      "Implemented score tracking and local storage persistence.",
      "Designed a fully responsive interface for desktop and mobile devices.",
      "Added smooth animations and optimized rendering performance.",
    ],

    features: [
      "Progressive difficulty levels",
      "Timer functionality",
      "Score tracking system",
      "Animated interactions",
      "Sound effects",
      "Responsive gaming interface",
    ],

    achievements: [
      "Smooth gameplay experience",
      "Performance optimized animations",
      "Mobile optimized controls",
      "Engaging user interactions",
      "Reusable components",
      "Responsive UI",
    ],
  },
  {
  title: "Money Manager",
  description:
    "Personal finance tracker for managing income, expenses, and balance efficiently.",

  image: "/money_manager.png",

  liveUrl: "https://divyaamoneyy.ccbp.tech/",

  skills: [
  "React.js",
  "JavaScript",
  "CSS",
  "Bootstrap",
  "React Hooks",
  "State Management",
  "Local Storage",
  "CRUD Operations"
],

  overview: [
    "Built a finance management application for tracking income and expenses.",
    "Implemented CRUD operations with React state management.",
    "Persisted financial data using local storage.",
    "Updated the UI dynamically for real-time balance calculations."
  ],

  features: [
    "CRUD",
    "Balance Tracking",
    "Income",
    "Expenses",
    "Local Storage"
  ],

  achievements: [
    "State Management",
    "CRUD Operations",
    "Data Persistence",
    "Responsive UI"
  ]
},
{
  title: "Wikipedia Search",
  description:
    "Search application that retrieves and displays Wikipedia articles using REST APIs.",

  image: "/wikipedia.png",

  liveUrl: "https://divyawikipediaa.ccbp.tech/",

 skills: [
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "REST APIs",
  "Fetch API",
  "Responsive Design"
],

  overview: [
    "Developed a custom search application using Wikipedia APIs.",
    "Fetched search results asynchronously with JavaScript fetch API.",
    "Displayed results with hyperlinks opening in separate tabs.",
    "Built a responsive layout using CSS and Bootstrap."
  ],

  features: [
    "Search",
    "API Calls",
    "Hyperlinks",
    "Responsive UI",
    "Async Fetch"
  ],

  achievements: [
    "REST APIs",
    "Dynamic Content",
    "Responsive Design",
    "Async Operations"
  ]
},
{
  title: "Todo Application",
  description:
    "Task management application with persistent CRUD functionality and local storage support.",

  image: "/todo.png",

  liveUrl: "https://divyaatodo.ccbp.tech/",

  skills: [
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "DOM Manipulation",
  "Local Storage",
  "CRUD Operations",
  "Responsive Design"
],

  overview: [
    "Developed a task management application with CRUD operations.",
    "Implemented dynamic updates using JavaScript DOM manipulation.",
    "Managed data using arrays and objects effectively.",
    "Persisted tasks using browser local storage."
  ],

  features: [
    "CRUD",
    "Local Storage",
    "DOM Updates",
    "Task Tracking",
    "Responsive UI"
  ],

  achievements: [
    "Dynamic UI",
    "DOM Manipulation",
    "Data Persistence",
    "JavaScript Logic"
  ]
},
];