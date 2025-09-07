// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import prismaLogo from './assets/tech_logo/prisma.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cppLogo from './assets/tech_logo/cpp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Education Section Logo's
import gtbitlogo from './assets/education_logo/gtbit_logo.png';
import dspslogo from './assets/education_logo/dsps_logo.png';
import tglogo from './assets/education_logo/tg_logo.png';
import NIOS from './assets/education_logo/NIOS.jpeg';
import mis from './assets/education_logo/mis.jpeg';
import gurugobind from './assets/education_logo/gurugobind.jpeg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Prisma ORM',logo: prismaLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: gurugobind,
      school: "Delhi Institute of Technology and Management, Haryana",
      date: "Oct 2022 - July 2026",
      grade: "7.02 CGPA",
      desc: "I am persuing my Bachelor's degree (B.Tech) in Computer Science Engineering from Guru Gobind Singh Indraprastha University, Delhi. During my time at college, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Computer Networks, Database Management Systems, Web Development, and Software Engineering.",
      degree: "Bachelor of Technology -B.Tech",
    },
    {
      id: 1,
      img: NIOS,
      school: "National Institute of Open Schooling, Delhi",
      grade: "67.2%",
      desc: "I completed my class 12 education from National Institute of Open Schooling, Delhi, under the NIOS board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "NIOS(XII) - PCM",
    },
    {
      id: 2,
      img: mis,
      school: "Modern International School, Delhi",
      grade: "53%",
      desc: "I completed my class 10 education from Modern International School, Delhi, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer",
    },
  ];
  


  // Project Section Logo's
import PAYTMWALLET from './assets/work_logo/PAYTMWALLET.png';
import Blognest3 from './assets/work_logo/Blognest3.png';



  export const projects = [
    {
      "id": 1,
      title: "BlogNest",
      description: "Crafted an interactive and responsive frontend using React.js, Tailwind CSS, and modern UI practices, featuring sign-up, sign-in, blog creation, editing, deletion, and content exploration, resulting in a 50% improvement in loading speed and a smoother user experience. ",
      image: Blognest3,
      tags: ["React.js, AI Integration, Prisma ORM, TypeScript, Node.js, Express.js "],
      github: "https://github.com/viratdogra1982/BlogNes",
      webapp: "https://blog-nest-one-ochre.vercel.app/"
    },
    {
      id: 0,
      title: "XENOPAY",
      description:
        "Created a responsive and intuitive frontend using Next.js, Tailwind CSS, and Material UI (MUI), enabling seamless P2P transactionsrecent transaction tracking, and money addition, resulting in a 60% improvement in UI responsiveness and smoother user experience",
      image: PAYTMWALLET,
      tags: ["Next.js, Material UI, Tailwind CSS, MongoDB, TypeScript "],
      github: "https://github.com/viratdogra1982/PAYTM-WALLET",
      webapp: "https://paytm-wallet-ivory.vercel.app/",
    },
  ];  