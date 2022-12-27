import emoji from "react-easy-emoji";

export const greetings = {
  name: "Muhammad Adeel",
  title: "Hi all, I'm Adeel",
  description:
    "React. js developer design and implement user interface components for JavaScript-based web and mobile applications using the React open-source library ecosystem.",
  resumeLink:
    "https://drive.google.com/file/d/14lw08yufxDXKRlyqvC3nnQPIdUrK8vkP/view?usp=share_link",
};

export const openSource = {
  githubUserName: "adeel146",
};

export const contact = {};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/muhammad-adeel-539025168/",
  github: "https://github.com/adeel146",
  upwork: "https://www.upwork.com/freelancers/~0131d4f27f703e38a0?s=1110580755057594368",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "REACTJS DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Reactjs Developer",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Integration APIs Using axios React Query"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    // {
    //   title: "Project Management",
    //   lottieAnimationFile:
    //     "https://assets6.lottiefiles.com/packages/lf20_cwA7Cn.json", // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji("⚡ Experience of working on multiple cloud platforms"),
    //     emoji(
    //       "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
    //     ),
    //     emoji(
    //       "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
    //     ),
    //   ],
    //   softwareSkills: [
    //     // ? Check README To get icon details
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "logos:aws",
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "logos:microsoft-azure",
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "logos:heroku-icon",
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "logos:postgresql",
    //     },
    //     {
    //       skillName: "Github",
    //       fontAwesomeClassname: "akar-icons:github-fill",
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "logos:docker-icon",
    //     },
    //     {
    //       skillName: "Github Actions",
    //       fontAwesomeClassname: "logos:github-actions",
    //     },
    //     {
    //       skillName: "Cloudinary",
    //       fontAwesomeClassname: "logos:cloudinary",
    //     },
    //     {
    //       skillName: "Nginx",
    //       fontAwesomeClassname: "logos:nginx",
    //     },
    //     {
    //       skillName: "Sentry",
    //       fontAwesomeClassname: "logos:sentry-icon",
    //     },
    //   ],
    // },
    {
      title: "Cypress Automation",
      lottieAnimationFile:
        "https://assets6.lottiefiles.com/packages/lf20_bdr4nu1y.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Senior experience with automation using JavaScript, Cypress, and any other relevant modern automation tool."
        ),
        emoji(
          "⚡  Write test cases, develop automated test cases and debug existing code"
        ),
        emoji(
          "⚡Experience on test case design and performing regression tests"
        ),
        emoji("⚡ Strong knowledge of web standards such as HTML, CSS"),
        emoji(
          "⚡ Define and develop test solutions to features in the product."
        ),
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "logos:ethereum",
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "logos:solidity",
        },
        {
          skillName: "Web3js",
          fontAwesomeClassname: "logos:web3js",
        },
        {
          skillName: "Metamask",
          fontAwesomeClassname: "logos:metamask-icon",
        },
        {
          skillName: "Ganache",
          fontAwesomeClassname: "logos:ganache-icon",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "University of the Punjab",
    subHeader: "Bachelor of Business and Information Technology",
    duration: "2017-2021",
    desc: "Final Year Project,Food Order web App using Reactjs.",
    descBullets: [
      "A mix of IT and business skills",
      "To develop understanding of application of IT tools in business operations for solving business problems and making managerial decisions using the latest technologies.",
    ],
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "Nextbridge (Pvt) Ltd",
    companylogo: "/img/icons/common/dusecaSoftware.svg",
    date: "Feb 2020 - Mar 2022",
    desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Reactjs, Bootstrap, Redux Toolkit, Chart.js and some other libraries.",
  },
  {
    role: "Software Engineer",
    company: "ILI Digital Ag",
    companylogo: "/img/icons/common/logo_ili.png",
    date: "Mar 2022 - Present ",
    desc: "I worked as frontend Reactjs developer to design web based admin dashboards for mulitple apps using Reactjs, Bootstrap, Redux Toolkit, Chart.js and some other libraries..",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase my work and skills as a software developer.",
    github: "https://github.com/adeel146/Portfolio",
    link: "https://legendary-entremet-868d8e.netlify.app/",
  },
  {
    name: "BASF Battery Recycling Platform",
    desc: "It's a joint project with BMW and BASF Battery Recycling with multiple Roles This project helped to optimize their recycling order process , My role in this project was frontend Reactjs Developer",
    // github: "https://github.com/adeel146/Django-React-Marketplace",
    link: "https://battery-recycling-dev.basf.ilidigital-soft.com/",
  },
  {
    name: "Mcyclo",
    desc: "Mcyclo is a Joint Project in which we have BASF along with admin panel which comprises of different roles like distributor, logistics, watcher etc. The administration panel is to help optimize the team's work and make it more efficient, achieving tasks as fast as possible.",
  },
  {
    name: "School Attendance App",
    desc: "Replacing the manual tasks of attendance taking, assignments management,Roles Management and feedback collection with some comprehensive apps can save a lot of precious teaching time.",
    link: "https://attendance-admin-ndeq.vercel.app/",
  },
];

export const feedbacks = [
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Muhammad Adeel",
  description:
    "A passionate Full Stack Web Developer and Blockchain Developer.",
  author: "Muhammad Adeel",
  image: "https://www.linkpicture.com/q/WhatsApp-Image-2022-12-10-at-1.26.34-PM.jpeg",
  url: "https://legendary-entremet-868d8e.netlify.app/",
  keywords: [
    "Muhammad Adeel",
    "@1muhammadAdeel",
    "1muhammadAdeel",
    "Portfolio",
    "Adeel Portfolio ",
    "Muhammad Adeel Portfolio",
  ],
};
