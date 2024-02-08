import MosafirLogo from "@/public/images/musafir_logo.webp";
import MosafirCover from "@/public/images/musafir-cover.webp";
import MosafirImg1 from "@/public/images/musafira2z1.webp";
import MosafirImg2 from "@/public/images/musafirImage2.webp";
import MosafirImg3 from "@/public/images/musafir3.webp";
import SkulCover from "@/public/images/skul-cover.webp";
import SkulImg1 from "@/public/images/eskulImg1.webp";
import SkulImg2 from "@/public/images/eskulImage2.webp";
import SkulImg3 from "@/public/images/skulImg3.webp";
import EskulLogo from "@/public/images/EskulLogo.webp";
import OnlineClockShopLogo from "@/public/images/onlineCLockShoplogo.webp";
import OnlineClockShop1 from "@/public/images/onlineClockShop1.webp";
import OnlineClockCover from "@/public/images/ClockShop-cover.webp";
import OnlineClockShop2 from "@/public/images/onlineClockShop2.webp";
import OnlineClockShop3 from "@/public/images/onlineClockShop3.webp";
import ExploreTravelCovewr from "@/public/images/ExploreTravel-cover.webp";
import ShopMartCover from "@/public/images/ShopMartCover.webp";
import DoctorPortalCover from "@/public/images/doctor-portal.webp"
import DoctorPortal1 from "@/public/images/doctor-portal2.webp"
import DoctorPortal2 from "@/public/images/doctor-portal3.webp"
import  LiveIcon from "@/public/images/live.png";
import  BackEnd from "@/public/images/global.png";

import HtmlIcon from "@/public/images/html-1.svg";
import JsIcon from "@/public/images/javascript-1.svg";
import NodeJsIcon from "@/public/images/nodejs-3.svg";
import CSSIcon from "@/public/images/css-3.svg";
import MongoDBIcon from "@/public/images/mongodb-icon-1.svg";
import FireBaseIcon from "@/public/images/firebase-1.svg";
import Bootstrap from "@/public/images/bootstrap-5-1.svg";
import ReactBootstrap from "@/public/images/bootstrap-icon-1.svg";
import ReactIcon from "@/public/images/react-2.svg";
import ReduxIcon from "@/public/images/redux.svg";
import GraphQLIcon from "@/public/images/graphql-logo-2.svg";
import ApolloIcon from "@/public/images/apollo-graphql-1.svg";
import NextJSIcon from "@/public/images/next-js.svg";
import TailwindCSSIcon from "@/public/images/tailwind-css-2.svg";
import MaterialUIIcon from "@/public/images/material-ui-1.svg";
import ES6 from "@/public/images/ES6.jpg";
import MYSQL from "@/public/images/mysql-logo.svg";
import TypeScript from "@/public/images/typescript.svg";
import ReactNative from  "@/public/images/react-native-1.svg";
import Sass from  "@/public/images/sass-1.svg";
import Kotlin from  "@/public/images/kotlin-2.svg";
import Android from  "@/public/images/android-4.svg";
import Git from  "@/public/images/git-icon.svg";
import ReactHookFrom from "@/public/images/react-hook-form-logo-only.png";
import Github from  "@/public/images/github-icon-1.svg";
import NPM from  "@/public/images/npm-icon.png";
import Yarn from  "@/public/images/yarn.svg";
import VisualStudioCode from  "@/public/images/visual-studio-code-1.svg";
import Webstorm from  "@/public/images/webstorm-icon.svg";
import Firefox from  "@/public/images/firefox-3.svg";
import Chrome from  "@/public/images/chrome.svg";
import Heroku from  "@/public/images/heroku-4.svg";
import Render from  "@/public/images/renner-1.svg";
import Netlify from  "@/public/images/netlify.svg";
import Figma from  "@/public/images/figma-5.svg";
import Postman from  "@/public/images/postman.svg";
import Varcel from  "@/public/images/vercel.svg";
import Python from  "@/public/images/python-5.svg";
import PHP from  "@/public/images/php-1.svg";
import Laravel from  "@/public/images/laravel-2.svg";
import Django from  "@/public/images/django.svg";
import AndroidStudio from "@/public/images/android-auto-os-1.svg";
import PyCharm from "@/public/images/PyCharm_Icon.svg.png";
import Express from "@/public/images/express-109.svg";
import Postgresql from "@/public/images/postgresql.png"
import Mongoose from '@/public/images/mongoos.png';
import  ReactCetifications from "@/public/images/Programming_Hero_Certificate_react_fundamental.png";
import  MernStackCertifications from "@/public/images/certificate1024_1.png";
import BlackBelt from "@/public/images/Blackbelt.png";
import  Congratulation from "@/public/images/Congrates.png";
import Banner1 from "@/public/images/header-laptop.svg";
import Banner2 from "@/public/images/header-laptop-2.svg";
import Banner3 from "@/public/images/header-laptop-3.svg";
import GithubIcon from "@/public/images/github-icon-1.svg";
import LinkdinIcon from "@/public/images/linkedin.png";
import Facebook from "@/public/images/facebook.png";
import EmailIcon from "@/public/images/gmail.png";
import SkypeIcon from "@/public/images/skype.png";
import Whatsapp from "@/public/images/whatsapp.png";
import PhoneIcon from "@/public/images/phone-call.png";

const portfolioData = {
    navLinks : [
        {
            title: "Home",
            path: "/home",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Skills",
            path: "/skills",
        },
        {
            title: "Services",
            path: "/services",
        },

        {
            title: "Portfolio",
            path: "/portfolios",
        },
        {
            title: "Blogs",
            path: "/blogs",
        },
        {
            title: "Pricing",
            path: "/price",
        },
        {
            title: "Contact",
            path: "/contact",
        },
    ],
    banner:[
        { id: 1, content: Banner1 },
        { id: 2, content:  Banner2 },
        { id: 3, content:  Banner3 },
        // Add more slides as needed
    ],
    followUs:[
        {
            title:"Github",
            icon:GithubIcon,
            link:"https://github.com/rukonpro",
            color:'#eceff1'
        },
        {
            title:"Linkdin",
            icon:LinkdinIcon,
            link:"https://www.linkedin.com/in/rukonpro/",
            color:"#007ab9"
        },
        {
            title:"Facebook",
            icon:Facebook,
            link:"https://www.facebook.com/rukonpro",
            color:'#1476f2'
        },
        {
            title:"Email",
            icon:EmailIcon,
            link:"mailto:rukon.js@gamil.com",
            color:'#f44336'
        },
        {
            title:"Skype",
            icon:SkypeIcon,
            link:"https://join.skype.com/invite/yXu1Kxuk8hZF?fbclid=IwAR18ICJ_AmaQUWEIsiIfd4XyikyYvhcEIrM5HLImwXXJc42KT6pwqWjDaC0",
            color:"#00aff0"
        },
        {
            title:"Whatsapp",
            icon:Whatsapp,
            link:"https://api.whatsapp.com/send?phone=1765459224",
            color:"#4caf50"
        },
        {
            title:"Tel",
            icon:PhoneIcon,
            link:"tel:+8801765459224",
            color:'#3e9ddd'
        },

    ],
    about:{
        name:"Rukon Uddin",
        profilePhoto:"",
        title:"About",
        description:``
    },
    skills:[
        {
            title:"Experienced",

            data:[
                {
                    title:"Javascript",
                    description:'Powerful, versatile language for web development.',
                    logo:JsIcon,
                    color:"rgba(233, 202, 50, 0.30)"
                },
                {
                    title: "React.JSX",
                    description: "Expressive UI in JavaScript syntax.",
                    logo: ReactIcon,
                    color: "rgba(97, 218, 251, 0.30)"
                },
                {
                    title: "Node.JS",
                    description: "JavaScript runtime for server-side applications.",
                    logo: NodeJsIcon,
                    color: "rgba(0, 212, 134, 0.30)"
                },
                {
                    title: "MongoDB",
                    description: "NoSQL database for scalable applications.",
                    logo: MongoDBIcon,
                    color: "rgba(89, 150, 54, 0.30)"
                },

                {
                    title:  "Express.JS",
                    description: "Fast, unopinionated web framework for Node.js.",
                    logo:Express,
                    color: "rgba(0, 255, 88, 0.30)"
                },

                {
                    title:"Next.JS",
                    description: "React framework for server-rendered apps.",
                    logo: NextJSIcon,
                    color: "rgba(255, 255, 255, 0.30)"
                },
                {
                    title: "ES6",
                    description: "ECMAScript 2015: JavaScript language enhancements.",
                    logo: ES6,
                    color: "rgba(250, 222, 52, 0.30)"
                },
                {
                    title: "Redux",
                    description: "State management for JavaScript applications.",
                    logo: ReduxIcon,
                    color: "rgba(118, 74, 188, 0.30)"
                },
                {
                    title:  "Redux-toolkit",
                    logo: ReduxIcon,
                    description: "Opinionated Redux utility library.",
                    color: "rgba(118, 74, 188, 0.30)"
                },
                {
                    title: "RTK Query",
                    logo: ReduxIcon,
                    description: "Declarative data fetching with Redux.",
                    color: "rgba(118, 74, 188, 0.30)"
                },
                {
                    title: "PostgresQL",
                    description: "Open-source relational database management system.",
                    logo:Postgresql,
                    color: "rgba(47, 103, 146, 0.30)"
                },
                {
                    title: "MySQL",
                    description: "Popular open-source relational database system.",
                    logo: MYSQL,
                    color: "rgba(0, 117, 143, 0.30)"
                },
                {
                    title: "Mongoose",
                    description: "MongoDB ODM for elegant modeling.",
                    logo: Mongoose,
                    color: "rgba(251, 112, 43, 0.30)"
                },
                {
                    title: "GraphQL",
                    description: "Query language for APIs, flexible and efficient.",
                    logo: GraphQLIcon,
                    color: "rgba(229, 53, 171, 0.30)"
                },
                {
                    title: "Apollo Client",
                    description: "Robust GraphQL client for React.",
                    logo: ApolloIcon,
                    color: "rgba(255, 255, 255, 0.30)"
                },
                {
                    title: "React-hook-form",
                    logo: ReactHookFrom,
                    description: "React library for efficient form-handling.",
                    color: "rgba(235, 90, 144, 0.30)"                },
                {
                    title: "Firebase",
                    description: "Google's mobile and web platform.",
                    logo: FireBaseIcon,
                    color: "rgba(254, 166, 17, 0.30)"
                },
                {
                    title: "Bootstrap 4&5",
                    description: "Responsive front-end framework for web.",
                    logo: Bootstrap,
                    color: "rgba(70, 50, 119, 0.30)"
                },
                {
                    title: "React-Bootstrap",
                    description: "Bootstrap components for React applications.",
                    logo: ReactBootstrap,
                    color: "rgba(70, 50, 119, 0.30)"
                },
                {
                    title:  "Material UI",
                    description: "React components following Material Design.",
                    logo: MaterialUIIcon,
                    color: "rgba(0, 176, 255, 0.30)",
                },
                {
                    title: "Tailwind-CSS",
                    description: "Utility-first CSS framework for flexibility.",
                    logo: TailwindCSSIcon,
                    color: "rgba(6, 182, 212, 0.30)"
                },
                {
                    title: "HTML5",
                    description: "Latest version of the Hypertext Markup Language.",
                    logo: HtmlIcon,
                    color: "rgba(227, 79, 38, 0.30)"
                },
                {
                    title:  "CSS3",
                    description: "Latest version of Cascading Style Sheets.",
                    logo: CSSIcon,
                    color: "rgba(27, 115, 186, 0.30)"
                }
            ]
        }, 
        {
            title: "Comfortable",
            descriptions:`<p class="text-base text-[#94a3b8]">
                            In my professional journey, I've honed the invaluable skill of being comfortably adaptable
                            in diverse and dynamic environments. Whether navigating through complex projects or
                            collaborating with cross-functional teams, my ability to seamlessly integrate into various
                            scenarios sets me apart. I thrive in ambiguity, transforming challenges into opportunities
                            for innovation and growth.

                            <br/> <br/>

                            Being "Comfortable" is not just about familiarity; it's a mindset that allows me to navigate
                            through the ever-evolving landscape of the professional world with ease. It's the assurance
                            that I bring to every project, knowing that I can tackle the unexpected and find effective
                            solutions. This adaptability extends beyond the technical realm to encompass communication,
                            teamwork, and leadership.
                            <br/> <br/>
                            My comfort in ambiguity is a strategic asset, enhancing my capacity to lead, collaborate,
                            and deliver results. It enables me to maintain composure under pressure, making me a
                            reliable team member in high-stakes projects. This skill doesn't just denote familiarity; it
                            signifies a mindset that turns challenges into stepping stones for success.
                        </p>`,
            data: [
                {
                    title: "MongoDB",
                    description: "NoSQL database for scalable applications.",
                    logo: MongoDBIcon,
                    color: "rgba(89, 150, 54, 0.30)"
                },
                {
                    title:  "Express.JS",
                    description: "Fast, unopinionated web framework for Node.js.",
                    logo:Express,
                    color: "rgba(0, 255, 88, 0.30)"
                },
                {
                    title: "React.JSX",
                    description: "Expressive UI in JavaScript syntax.",
                    logo: ReactIcon,
                    color: "rgba(97, 218, 251, 0.30)"
                },
                {
                    title: "Node.JS",
                    description: "JavaScript runtime for server-side applications.",
                    logo: NodeJsIcon,
                    color: "rgba(0, 212, 134, 0.30)"
                },
                {
                    title:"Javascript",
                    description:'Powerful, versatile language for web development.',
                    logo:JsIcon,
                    color:"rgba(233, 202, 50, 0.30)"
                },
                {
                    title:"Next.JS",
                    description: "React framework for server-rendered apps.",
                    logo: NextJSIcon,
                    color: "rgba(255, 255, 255, 0.30)"
                },
                {
                    title: "ES6",
                    description: "ECMAScript 2015: JavaScript language enhancements.",
                    logo: ES6,
                    color: "rgba(250, 222, 52, 0.30)"
                },
                {
                    title: "Redux",
                    description: "State management for JavaScript applications.",
                    logo: ReduxIcon,
                    color: "rgba(118, 74, 188, 0.30)"
                },
                {
                    title:  "Redux-toolkit",
                    logo: ReduxIcon,
                    description: "Opinionated Redux utility library.",
                    color: "rgba(118, 74, 188, 0.30)"
                },
                {
                    title: "RTK Query",
                    logo: ReduxIcon,
                    description: "Declarative data fetching with Redux.",
                    color: "rgba(118, 74, 188, 0.30)"
                },
                {
                    title: "Mongoose",
                    description: "MongoDB ODM for elegant modeling.",
                    logo: Mongoose,
                    color: "rgba(251, 112, 43, 0.30)"
                },
                {
                    title: "GraphQL",
                    description: "Query language for APIs, flexible and efficient.",
                    logo: GraphQLIcon,
                    color: "rgba(229, 53, 171, 0.30)"
                },
                {
                    title: "Apollo Client",
                    description: "Robust GraphQL client for React.",
                    logo: ApolloIcon,
                    color: "rgba(255, 255, 255, 0.30)"
                },
                {
                    title: "React-hook-form",
                    logo: ReactHookFrom,
                    description: "React library for efficient form-handling.",
                    color: "rgba(235, 90, 144, 0.30)"
                },
                {
                    title: "Firebase",
                    description: "Google's mobile and web platform.",
                    logo: FireBaseIcon,
                    color: "rgba(254, 166, 17, 0.30)"
                },
                {
                    title: "Bootstrap 4&5",
                    description: "Responsive front-end framework for web.",
                    logo: Bootstrap,
                    color: "rgba(70, 50, 119, 0.30)"
                },
                {
                    title: "React-Bootstrap",
                    description: "Bootstrap components for React applications.",
                    logo: ReactBootstrap,
                    color: "rgba(70, 50, 119, 0.30)"
                },
                {
                    title:  "Material UI",
                    description: "React components following Material Design.",
                    logo: MaterialUIIcon,
                    color: "rgba(0, 176, 255, 0.30)",
                },
                {
                    title: "Tailwind-CSS",
                    description: "Utility-first CSS framework for flexibility.",
                    logo: TailwindCSSIcon,
                    color: "rgba(6, 182, 212, 0.30)"
                },
                {
                    title: "HTML5",
                    description: "Latest version of the Hypertext Markup Language.",
                    logo: HtmlIcon,
                    color: "rgba(227, 79, 38, 0.30)"
                },
                {
                    title:  "CSS3",
                    description: "Latest version of Cascading Style Sheets.",
                    logo: CSSIcon,
                    color: "rgba(27, 115, 186, 0.30)"
                }

            ],
        },
        {
            title: "Familiar",
            data: [
                {
                    title: "TypeScript",
                    description: "Typed superset of JavaScript language.",
                    logo: TypeScript,
                    color: "rgba(0, 122, 204, 0.30)"
                },
                {
                    title: "React-Native",
                    description: "Mobile app development framework ",
                    logo: ReactNative,
                    color: "rgba(97, 218, 251, 0.30)"
                },
                {
                    title: "Sass",
                    description: "CSS preprocessor for more maintainable styles.",
                    logo: Sass,
                    color: "rgba(207, 100, 154, 0.30)"
                },
                {
                    title: "Kotlin",
                    description: "Concise, expressive programming language for modern Android development.",
                    logo: Kotlin,
                    color: "rgba(127, 82, 255, 0.30)"
                },
                {
                    title: "Jetpack Compose",
                    description: "Modern Android UI toolkit by Google.",
                    logo: Android,
                    color: "rgba(61, 219, 133, 0.30)"
                },
                {
                    title: "Python",
                    description: "High-level, versatile programming language.",
                    logo: Python,
                    color: "rgba(255, 221, 85, 0.30)"
                },
                {
                    title: "Django",
                    description: "High-level Python web framework.",
                    logo: Django,
                    color: "rgba(43, 169, 119, 0.30)"
                },
                {
                    title: "PHP",
                    description: "Server-side scripting language for web development.",
                    logo: PHP,
                    color: "rgba(137, 147, 190, 0.30)"
                },
                {
                    title: "Laravel",
                    description: "Elegant PHP web application framework.",
                    logo: Laravel,
                    color: "rgba(255, 45, 32, 0.30)"
                }
            ],
        },
        {
            title: "Tools",
            data: [
                {
                    title: "Git",
                    description: "Distributed version control system for tracking changes in source code.",
                    logo: Git,
                    color: "rgba(222, 76, 54, 0.30)"
                },
                {
                    title: "GitHub",
                    description: "Web-based platform for Git repositories, collaboration, and version control.",
                    logo: Github,
                    color: "rgba(255, 255, 255, 0.30)"
                },
                {
                    title: "npm",
                    description: "Node Package Manager for JavaScript.",
                    logo: NPM,
                    color: "rgba(203, 56, 55, 0.30)"
                },
                {
                    title: "Yarn",
                    description: "Fast and secure JavaScript package manager.",
                    logo: Yarn,
                    color: "rgba(51, 152, 194, 0.30)"
                },
                {
                    title: "VS Code",
                    description: "Free source code editor by Microsoft.",
                    logo: VisualStudioCode,
                    color: "rgba(60, 153, 212, 0.30)"
                },
                {
                    title: "WebStorm",
                    description: "JetBrains IDE for web development.",
                    logo: Webstorm,
                    color: "rgba(0, 205, 215, 0.30)"
                },
                {
                    title: "Android Studio",
                    description: "Official IDE for Android app development.",
                    logo: AndroidStudio,
                    color: "rgba(3, 169, 244, 0.30)"
                },
                {
                    title: "PyCharm",
                    description: "JetBrains IDE for Python development.",
                    logo: PyCharm,
                    color: "rgba(105, 223, 122, 0.30)"
                },
                {
                    title: "Firefox dev tool",
                    description: "Built-in developer tools in Mozilla Firefox browser.",
                    logo: Firefox,
                    color: "rgba(245, 34, 56, 0.30)"
                },
                {
                    title: "Chrome dev tool",
                    description: "Integrated developer tools in Google Chrome browser.",
                    logo: Chrome,
                    color: "rgba(129, 179, 84, 0.30)"
                },
                {
                    title: "Heroku",
                    description: "Cloud platform for deploying applications.",
                    logo: Heroku,
                    color: "rgba(67, 0, 152, 0.30)"
                },
                {
                    title: "Render",
                    description: "Cloud platform for hosting web applications and static sites.",
                    logo: Render,
                    color: "rgba(214, 31, 39, 0.30)"
                },
                {
                    title: "Netlify",
                    description: "Hosting and automation platform for web portfolios and serverless functions.",
                    logo: Netlify,
                    color: "rgba(37, 199, 183, 0.30)"
                },
                {
                    title: "Varcel",
                    description: "Cloud platform for serverless functions and static site hosting.",
                    logo: Varcel,
                    color: "rgba(233, 202, 50, 0.30)"
                },
                {
                    title: "Figma",
                    description: "Collaborative interface design tool for teams.",
                    logo: Figma,
                    color: "rgba(10, 207, 131, 0.30)"
                },
                {
                    title: "Postman",
                    description: "API development and testing tool.",
                    logo: Postman,
                    color: "rgba(255, 108, 55, 0.30)"
                }
            ]
        }
    ],
    portfolios:{
        title:"Portfolio",
        description:"Welcome to my portfolios! As a MERN stack developer, I specialize in crafting dynamic and efficient web applications. Below are some key portfolios that showcase my skills and passion for creating seamless user experiences.",
        future:  [
            {
                id: "Musafir-Onlinewholesalers",
                title: "Musafir - Online wholesalers",
                logo: MosafirLogo,
                description: "As a remote developer for Musafir, a leading South African online wholesaler, I designed and implemented a fully functional e-commerce site. Leveraging React, Tailwind CSS, GraphQL, Apollo Client, and Selore, I ensured dynamic interfaces, responsive design, and efficient data handling. This project highlights my skills in modern web technologies and commitment to delivering impactful solutions.",
                images: [MosafirCover, MosafirImg1, MosafirImg2, MosafirImg3],
                technology: ["React", "React Router Dom", "Tailwind CSS", "GraphQL", "Apollo client", "Selore", "Postsgress", "Varcel"],
                point: [
                    "Developed a fully functional e-commerce website utilizing React for dynamic user interfaces and Tailwind CSS for responsive design.",
                    "Implemented Apollo Client to manage state and handle GraphQL queries for seamless data fetching and manipulation.",
                    "Utilized React for building interactive components and Tailwind CSS for optimizing styling and user experience.",
                    "Integrated GraphQL with Apollo Client for efficient data fetching, providing a performant and scalable solution for the application."
                ],
                links: {
                    fontEndCode:{
                        link:null,
                        icon:null
                    },
                    backEndCode: {
                        link:null,
                        icon:null
                    },
                    liveLink: {
                        link:"https://www.musafira2z.com/",
                        icon:LiveIcon
                    }
                }
            },
            {
                id: "Eskul",
                title: "Eskul",
                logo: EskulLogo,
                description: "Eskul - My latest full-stack project. A responsive school management website with dynamic features. Built using React, Mongoose, Express, Firebase, NodeJS, and Material UI, it includes admin and user dashboards. Users can discover transportation options, purchase books, donate, hire online tutors, and provide feedback. contact and FAQ forms enhance user interaction. Deployed with SSL Commerce on Heroku, Eskul showcases my skills in creating comprehensive, responsive, and feature-rich web solutions.",
                images: [SkulCover, SkulImg1, SkulImg2, SkulImg3],
                technology: ["React", "Mongoose", "Express", "Firebase", "Node.JS", "Material UI", "SSL Commerce", "Email.js", "Heroku"],
                point: [
                    "School’s information-related website with dynamic functions and responsive design. Implement a dashboard for admin and users.",
                    "Users can also find out transport for their child based on their school location, buy books, donate money for any school, hire an online private tutor and read the books.",
                    "Users can contact us using the contact us form and by messenger chatting system. Ask any questions using the faq form. They can Review our website, private tutor, and books."
                ],
                links: {
                    fontEndCode:{
                        link:"https://github.com/rukonpro/Eskul_Client",
                        icon:Github
                    },
                    backEndCode: {
                        link:"https://github.com/rukonpro/Eskul_server",
                        icon:BackEnd
                    },
                    liveLink: {
                        link:"https://eskul-avengers.web.app",
                        icon:LiveIcon
                    }
                }
            },
            {
                id: "NicheProductWebSiteOnlineClockShop",
                title: "Niche Product website - Online Clock Shop",
                logo: OnlineClockShopLogo,
                description: "\"Niche Product Website - An online clock shop meticulously crafted with React, React-router, SSL, Express.js, Firebase, Material UI, Tailwind CSS, and MongoDB. Users enjoy seamless functionality, including single-order addition, order reviews, deletion, and placement. The platform supports user authentication through Firebase, enabling easy login.js with Google, account creation, and login.js.\n" +
                    "\n" +
                    "Admins wield comprehensive control with the ability to manage all orders, add, update, and delete products, and define user rules. The integration of modern technologies ensures a secure, user-friendly, and efficient experience for both customers and administrators, making this clock shop a showcase of my proficiency in web development.\"",
                images: [OnlineClockCover, OnlineClockShop1, OnlineClockShop2, OnlineClockShop3],
                technology: ["React", "React-router", "SSL Commerce", "Express.js", "Firebase", "Material UI", "Telwind CSS", "MongoDB", "Mongoose"],
                point: [
                    "    Users can easily add single orders to their shopping cart.\n" +
                    "    A user-friendly interface allows for the review of previous orders.\n" +
                    "    Order deletion functionality is available for a seamless user experience.\n" +
                    "    The platform supports the placement of new orders with a straightforward process.",

                    "    Admins have the capability to manage and track all orders efficiently.\n" +
                    "    Product management is made easy with the ability to add, update, and delete products.\n" +
                    "    Admins can set specific user rules, enhancing control and security.",

                    "User Authentication:\n" +
                    "\n" +
                    "    Integrated Firebase for a secure and reliable user authentication system.\n" +
                    "    Users can conveniently log in using their Google accounts.\n" +
                    "    The platform provides a smooth account creation and login.js process.",

                    "Overall Highlights:\n" +
                    "\n" +
                    "    The website specializes in niche clock products, catering to a specific market.\n" +
                    "    Focus on delivering a seamless and user-friendly experience for customers.\n" +
                    "    Admins enjoy comprehensive control, ensuring efficient management of the platform.\n" +
                    "    Integration of modern technologies guarantees security and operational efficiency."

                ],
                links: {
                    fontEndCode:{
                        link:"https://github.com/rukonpro/ONLINE-CLOCK-SHOP-Client",
                        icon:Github
                    },
                    backEndCode: {
                        link:"https://github.com/rukonpro/ONLINE-CLOCK-SHOP-Server",
                        icon:BackEnd
                    },
                    liveLink: {
                        link:"https://premier-pottery-retailer.web.app/",
                        icon:LiveIcon
                    }
                }
            },
            {
                id: "DoctorsPortal",
                title: "Doctors Portal",
                logo: DoctorPortalCover,
                description: "Developed a modern web application, \"Doctors Portal,\" utilizing React, React Router, Node.js, Express.js, Firebase, Material UI, and MongoDB. The platform empowers users to schedule appointments seamlessly, enhancing the overall healthcare experience. The combination of a user-friendly interface and robust backend technologies ensures a reliable and efficient appointment management system.",
                images: [DoctorPortalCover, DoctorPortal1, DoctorPortal2],
                technology: ["React", "React Router Dom", 'Metaril UI', 'Firebase', 'Heroku', 'Node.JS', 'Express.JS', 'MongoDB'],
                point: [
                    "User-friendly appointment scheduling",
                    "Integration with Firebase for secure user authentication.",
                    "Responsive design with Material UI for optimal user experience.",
                    "Backend powered by Node.js and Express.js, with MongoDB for data storage."
                ],

                links: {
                    fontEndCode:{
                        link:"https://github.com/rukonpro/Doctor-portal-cline-site",
                        icon:Github
                    },
                    backEndCode: {
                        link:"https://github.com/rukonpro/Doctor-Portal-Server",
                        icon:BackEnd
                    },
                    liveLink: {
                        link:"https://doctor-portal-b1210.web.app/",
                        icon:LiveIcon
                    }
                }
            },
            {
                id: "exploreTravel",
                title: "Explore Travel",
                logo: ExploreTravelCovewr,
                description: "Crafted \"Explore Travel,\" a dynamic web platform, leveraging React, React Router, Node.js, Express.js, Firebase, Material UI, and MongoDB. This travel hub facilitates a vibrant community where users can seamlessly post travel blogs, share experiences, and engage through reviews. Admin privileges include comprehensive blog management, user role assignments, and ensuring the platform's vitality.",
                images: [ExploreTravelCovewr],
                technology: ["React", "React Router", "Node.js", "Express.js", "Firebase", "Material UI", "MongoDB"],
                point: [
                    "User-friendly blog posting, reviewing, and deletion.",
                    "Robust admin controls for overseeing, adding, updating, and deleting blogs.",
                    "Firebase-powered user authentication for secure Google login.js, account creation, and login.js experiences."

                ],
                links: {
                    fontEndCode:{
                        link:"https://github.com/rukonpro/Explore-Tarvel-Client",
                        icon:Github
                    },
                    backEndCode: {
                        link:"https://github.com/rukonpro/Explore-Tarvel-server",
                        icon:BackEnd
                    },
                    liveLink: {
                        link:"https://explore-travel-df23a.web.app",
                        icon:LiveIcon
                    }
                }
            },
            {
                id: "shopMart",
                title: "Shop Mart - E-commerce Platform",
                logo: ShopMartCover,
                description: "Shop Mart is a feature-rich e-commerce platform designed and developed with cutting-edge technologies to provide a seamless shopping experience. Leveraging React, React-router, Node.js, Express.js, Firebase, Material UI, Tailwind CSS, MongoDB, Chat-Engin, and Email.js, this platform offers a robust set of functionalities for both users and administrators.Shop Mart stands as a testament to the power of modern web technologies, offering a user-friendly interface, robust features, and efficient management tools. This project showcases my expertise in full-stack development and my ability to create engaging and functional e-commerce platforms.",
                images: [ShopMartCover],
                technology: ["React", "React-router", "Node.js", "Express.js", "Firebase", "Material UI", "Tailwind CSS", "MongoDB", "Chat-Engin", "Email.js"],
                point: [
                    "Order Management: Users can effortlessly add, review, and delete orders, providing a streamlined shopping experience.",
                    "Place Orders: A straightforward process for users to place orders for their desired products.",
                    "Real-time Chat: Shop Mart integrates Chat-Engin for users to engage in real-time conversations with each other, fostering community and enhancing user experience.",
                    "Order Management: Admins have comprehensive control over all orders, ensuring efficient order processing and fulfillment.",
                    "Product Management: Admins can easily add, update, and delete products, keeping the inventory up-to-date.",
                    "User Role Management: Admins can assign and manage user roles, ensuring secure access and data management.",
                    "Firebase Integration: Seamless and secure user authentication through Firebase, enabling users to log in with Google and create accounts with ease.",
                    "Account Management: Users can create accounts and log in, providing a personalized and secure shopping experience."
                ],
                links: {
                    fontEndCode:{
                        link:"https://github.com/rukonpro/Shop-mart-client-site-code",
                        icon:Github
                    },
                    backEndCode: {
                        link:"https://github.com/rukonpro/Shop-mart-server-code",
                        icon:BackEnd
                    },
                    liveLink: {
                        link:"https://shop-mart-80ef1.web.app",
                        icon:LiveIcon
                    }
                }
            }
        ]
    },
    pricing:{
        title:"Pricing",
        subtitle:"Pay as you grow",
        description:"I offer comprehensive MERN stack development expertise to bring your portfolios to life. My pricing structure is designed to provide flexibility based on the scope and complexity of your needs.",
        future:[
            {
                name: "Hourly Rate",
                desc: "My standard hourly rate for MERN stack development is 1200$. This includes:",
                price: 1200,
                isMostPop: true,
                features: [
                    "Full-stack development using MongoDB, Express.js, React, and Node.js.",
                    "Custom feature development and enhancements.",
                    "Code optimization and performance tuning.",
                    "Ongoing support and maintenance.",
                ],
            },
            {
                name: "Project-Based Pricing",
                desc: "For larger portfolios, I am open to discussing project-based pricing. This may include:",
                price: 899,
                isMostPop: false,
                features: [
                    "In-depth project analysis and planning.",
                    "Fixed pricing for the entire project, providing cost predictability.",
                    "Milestone-based payments to ensure progress alignment.",
                ],
            },
            {
                name: "Consulting and Advisory",
                desc: 'If you need MERN stack project guidance or explore new ventures, my $1999 consulting includes:',
                price: 1999,
                isMostPop: false,
                features: [
                    "Code reviews and optimization recommendations.",
                    "Technology stack assessment and recommendations.",
                    "Strategic planning for scalable and maintainable solutions.",

                ],

            },
        ]
    },
    certifications:[
        {
            title:"Programing hero Batch-4 Certifications",
            image: MernStackCertifications
        },
        {
            title:"React Certifications",
            image:ReactCetifications
        },
        {
            title:"Programing Herro Graduate for Black Belt",
            image:BlackBelt
        },
        {
            title: "Congrats for Complete Web development",
            image: Congratulation
        }
    ]
}
export default portfolioData;