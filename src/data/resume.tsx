import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileTextIcon } from "lucide-react";

export const DATA = {
  name: "Divyansh Pathak",
  initials: "DP",
  url: "https://divyanshpathak.ninja",
  location: "Pune, Maharashtra",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Creator, Musician, Coder, Student. Currently making MindFlow, Notch, Rawrr & XonX",
  summary:
    "Hi there! I’m Divyansh Pathak, a second-year Computer Science student specializing in Artificial Intelligence and Data Science at MIT-WPU. I’m currently working on Notch, an AI powered assistant deeply integrated into your workflow and also running my own record label, XonX Records.",
  avatarUrl: "/pfp.jpg",
  skills: [
    "React",
    "JavaScript",
    "MongoDB",
    "Express",
    "Docker",
    "MERN Stack",
    "Node.js",
    "Guitar",
    "Music Production",
    "3D Modelling",
    "CAD Design",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/assignments", icon: FileTextIcon, label: "Assignments" },
  ],
  contact: {
    email: "me@divyanshpathak.ninja",
    tel: "+916396192629",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/divyansh-pathak129/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/divyansh-pathak/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/div_pathak129",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:me@divyanshpathak.ninja",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Notch",
      badges: [],
      href: "https://getnotch.app",
      location: "Pune",
      title: "Founder",
      logoUrl: "/notch.png",
      start: "May 2025",
      end: "Present",
      description:
        "Notch is an AI powered assistant deeply integrated into your workflow. It is designed to enhance focus and efficiency. It integrates seamlessly with your workflow, offering features like task management, time tracking, and AI-driven insights to help you stay on track and achieve your goals.",
    },

    {
      company: "MindFlow",
      badges: [],
      href: "https://mindflowdash.online",
      location: "Pune",
      title: "Founder",
      logoUrl: "/mindflow.png",
      start: "December 2024",
      end: "Present",
      description:
        "MindFlow is an  productivity focused new-tab chrome extension designed to enhance focus and efficiency. It integrates seamlessly with your workflow, offering features like task management, time tracking, and AI-driven insights to help you stay on track and achieve your goals. The platform is currently live on the Chrome Web Store.",
    },
    {
      company: "VStart",
      href: "https://vstart.online",
      badges: [],
      location: "Full-Time",
      title: "Creator",
      logoUrl: "/VStart.png",
      start: "June 2024",
      end: "Jan 2025",
      description:
        "VStart is a comprehensive platform designed to help startups manage their growth and operations. It features tools for project planning, collaborative work, and effective communication, all tailored to streamline the startup journey from idea to launch.",
    },
    {
      company: "XonX Records",
      badges: [],
      href: "https://xonx.divyanshpathak.ninja",
      location: "Hobby",
      title: "Head",
      logoUrl: "/XonX.png",
      start: "December 2023",
      end: "Present",
      description:
        "XonX Records is my independent music label where I release all of my music under three distinct aliases: Ravient, Aileron, and The BRKN. Each alias represents a unique sound and style, but The BRKN is the flagship project where I put out my highest-quality work. Through XonX Records, I aim to explore diverse musical landscapes and push creative boundaries, with each alias bringing something different to the table. It’s my way of sharing a broad spectrum of music, from experimental to polished, with the world.",
    },
  ],
  education: [
    {
      school: "MIT WPU",
      href: "https://mitwpu.edu.in",
      degree: "Bachelor's Degree of Computer Science (B.Tech)",
      logoUrl: "/mit.jpeg",
      start: "2024",
      end: "(Expected)2028",
    },
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Indira National School",
      href: "https://indiranationalschool.ac.in/",
      degree: "11th-12th",
      logoUrl: "/indira.jpeg",
      start: "2022",
      end: "2024",
    },
    {
      school: "St Montfort Sr. Sec. School",
      href: "https://montfortroorkee.com/",
      degree: "6th-8th",
      logoUrl: "/montfort.jpeg",
      start: "2018",
      end: "2020",
    },
    {
      school: "City Pride School",
      href: "https://www.cityprideschool.com/",
      degree: "LKG-6th, 9th-10th",
      logoUrl: "/cps.jpeg",
      start: "2010",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Notch",
      dates: "May 2025",
      active: true,
      description:
        "Notch is an AI powered assistant deeply integrated into your workflow. It is designed to enhance focus and efficiency. It integrates seamlessly with your workflow, offering features like task management, time tracking, and AI-driven insights to help you stay on track and achieve your goals.",
      technologies: [
        "Plasmo",
        "Vercel",
        "Clerk",
        "OpenAI",
        "Node.js",
        "MongoDB",
        "Vercel",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://getnotch.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://youtu.be/tge1Qq3DYsE?si=4JOY63yLD_X1w_6Y",
    },
    {
      title: "MindFlow",
      dates: "October 2024",
      active: true,
      description:
        "MindFlow is an  productivity focused new-tab chrome extension designed to enhance focus and efficiency. It integrates seamlessly with your workflow, offering features like task management, time tracking, and AI-driven insights to help you stay on track and achieve your goals. The platform is currently live on the Chrome Web Store.",
      technologies: [
        "React JS",
        "Vercel",
        "Resend",
        "MongoDB",
        "Mat UI",
        "Node.js",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://mindflowdash.online",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://youtu.be/tge1Qq3DYsE?si=4JOY63yLD_X1w_6Y",
    },
    {
      title: "VStart",
      dates: "June 2024",
      active: false,
      description:
        "For my product VStart, I decided to make a landing page to attract people to waitlist my app.. This app is made with React and Node.js.",
      technologies: [
        "React JS",
        "Vercel",
        "Resend",
        "MongoDB",
        "Mat UI",
        "Node.js",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [],
      image: "",
      video:
        // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
        "https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/public/Personal%20Stuff/VStart%20Landing%20Demo%201.mp4?t=2024-09-13T17%3A41%3A58.443Z",
    },
    {
      title: "AgroAI",
      href: "https://agroaiv1.netlify.app/",
      dates: "August 2024",
      active: false,
      description:
        "Made a AI Chatbot for diease detection in crops for a Smart India Hackathon.",
      technologies: [
        "React JS",
        "AI/ML",
        "Node.js",
        "Gemini API",
        "MongoDB",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://agroaiv1.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "C:/Users/divya/Desktop/Coding/portfolio2/public/agroai.mp4",
    },
    {
      title: "BadhKavach(Winners)",
      href: "https://hackmitwpu.vercel.app/",
      dates: "February 2025",
      active: true,
      description:
        "Created the backend and Integration with our customed AI Model for a College AI Hackathon.",
      technologies: [
        "React JS",
        "Node JS",
        "Tensorflow",
        "Vercel",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "AI Model/Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/public/Personal%20Stuff//BadhKavach.mp4",
    },
    {
      title: "IRIS Website",
      href: "https://www.iris-club.in/",
      dates: "September 2024",
      active: true,
      description:
        "Developed crutial pages for the website within 1 hour. Currently a Project Head in the club.",
      technologies: [
        "React JS",
        "Javascript",
        "mySQL",
        "Node.js",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://iris.mitwpu.edu.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/public/Personal%20Stuff/WhatsApp%20Video%202024-09-01%20at%2023.17.52_c4daffa9.mp4?t=2024-09-14T05%3A25%3A58.549Z",
    },

    //Formix, Workify, Nykaa, MindFlow
  ],
  hackathons: [
    {
      title: "Smart India Hackathon - Internal Round",
      dates: "September 2024",
      location: "Pune, India",
      description:
        "Developed a AI based disease detection chatbot for farmers to detect disease early on.",
      image:
        "https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/public/Personal%20Stuff/WPU.jpeg?t=2024-09-14T05%3A32%3A13.870Z",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "BITs Goa Hackathon",
      dates: "September 2024",
      location: "Goa, India",
      description:
        "Developed a AI based disease detection chatbot for farmers to detect disease early on.",
      image:
        "https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/public/Personal%20Stuff/WPU.jpeg?t=2024-09-14T05%3A32%3A13.870Z",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Build With India",
      dates: "September 2024",
      location: "Pune, India",
      description:
        "Developed a AI based disease detection chatbot for farmers to detect disease early on.",
      image:
        "https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/public/Personal%20Stuff/WPU.jpeg?t=2024-09-14T05%3A32%3A13.870Z",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackMIT 2025- HackAIThon(Winners)",
      dates: "March 2025",
      location: "Pune, India",
      description:
        "Developed a AI based disease flood predictor and flood prevention architecture maker.",
      image:
        "https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/public/Personal%20Stuff/WPU.jpeg?t=2024-09-14T05%3A32%3A13.870Z",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },

    // {
    //   title: "Hack The North",
    //   dates: "September 14th - 16th, 2018",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    // {
    //   title: "FirstNet Public Safety Hackathon",
    //   dates: "March 23rd - 24th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
    //   icon: "public",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
    //   links: [],
    // },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
