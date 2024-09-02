export const gridItems = [
    {
      url: './ai-data.jpg',
      id: 1,
      title: "AI & Data Engineer",
      description: "Expert in building AI models and data-driven solutions.",
      className: "min-h-[22rem] md:col-span-2 md:row-span-2 bg-gradient-to-r from-black-200 via-violet-950 to-black-200 border border-violet-950",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "./b1.svg",
      spareImg: "",
      header: true,
    },
    {
      url: './instructor-design.jpg',
      id: 2,
      title: "Graphic Designer",
      description: "Creative professional in visual and graphic design.",
      className: "h-[18rem] bg-gradient-to-r from-black-200 via-blue-900 to-black-200 border border-blue-900",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
      header: true,
    },
    {
      url: './office-suite.jpg',
      id: 3,
      title: "Instructor of Office Pack",
      description: "Teaches Excel, Word, and PowerPoint to enhance productivity.",
      className: "h-[18rem] bg-gradient-to-r from-black-200 via-indigo-950 to-black-200 border border-indigo-950",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
      header: true,
    },
    {
      url: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 4,
      title: "Programming Instructor",
      description: "Teaches students programming concepts and languages.",
      className: "bg-gradient-to-r from-black-200 via-slate-800 to-black-200 min-h-32",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "./grid.svg",
      spareImg: "./prog.jpg",
      header: false,
    },
    {
      url: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 5,
      title: "Industrial Engineering",
      description: "Robust background in industrial and mechanical engineering.",
      className: "md:col-span-2 md:row-span-2 bg-gradient-to-r from-black-200 via-blue-950 to-black-200 border border-blue-800 min-h-40",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "./b5.svg",
      spareImg: "./Industry.jpg",
      header: false,
    },
    {
      url: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 6,
      title: "",
      description: "",
      className: "bg-gradient-to-r from-black-200 via-blue-950 to-black-200 min-h-40",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
      header: false,
    }
  ];


  export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  

  export const projects = [
    {
      id: 1,
      title: "Real-time Weather Data ETL",
      des: "An ETL pipeline for processing and visualizing real-time weather data using Hadoop EcoSystem tools.",
      img: "./weather-analysis.svg",
      iconLists: ["./hadoop.svg", "./spark.svg", "./kafka.png", "./grafana.svg", "./postgresql.svg"],
      link: "https://github.com/akhatarmourad",
      category: "Big Data"
    },
    {
      id: 2,
      title: "AI-Powered Document Summarizer",
      des: "A tool for automatic summarization of documents using Generative AI tools & latest open source LLMs.",
      img: "./summarization.svg",
      iconLists: ["./python.svg", "./react.svg", "./fastapi.svg", "./chromadb.svg", "./llamaIndex.jpeg", "./tail.svg"],
      link: "https://github.com/akhatarmourad",
      category: "GenAI & LLMs"
    },
    {
      id: 3,
      title: "Credit Card Fraud Detection",
      des: "A machine learning based web app for real-time detection of fraudulent transactions in banking sector.",
      img: "./credit-fraud.svg",
      iconLists: ["./python.svg", "./fastapi.svg", "./react.svg", "./tail.svg", "./mongodb.svg"],
      link: "https://github.com/akhatarmourad",
      category: "AI & Data Science"
    },
    {
      id: 4,
      title: "E-commerce Product Recommendation",
      des: " A intelligent recommendation engine for personalized product suggestions & promotions in online supermarkets.",
      img: "./recommendation.svg",
      iconLists: ["./python.svg", "./react.svg", "./fastapi.svg", "./tail.svg", "./fm.svg"],
      link: "https://github.com/akhatarmourad",
      category: "AI & Data Science"
    },
    {
      id: 5,
      title: "Medical Data Analytics",
      des: "Analyzes medical datasets to derive insights, understand trends, and inform decision-making.",
      img: "./spss.svg",
      iconLists: ["./spss-logo.png", "./excel.svg", "./word.svg", "./powerpoint.svg", "./google.png"],
      link: "https://github.com/akhatarmourad/Statistical-Analysis-SPSS",
      category: "Data Analysis"
    },
    {
      id: 6,
      title: "LIB SOH & SOC Monitoring",
      des: " An AI-driven platform for predicting the state of health and charge of lithium-ion batteries.",
      img: "./batteries.svg",
      iconLists: ["./python.svg", "./streamlit.svg", "./excel.svg", "./matplotlib.svg", "./numpy.svg", "./pandas.svg"],
      link: "https://github.com/akhatarmourad",
      category: "AI & Data Science"
    },
    {
      id: 7,
      title: "Full-Stack CRUD with React & Node.js",
      des: " A CRUD application for managing student records using React and Node.js with MySQL.",
      img: "./crud-nodejs.svg",
      iconLists: ["./nodejs.svg", "./javascript.svg", "./react.svg", "./tailwind.svg", "./mysql.svg"],
      link: "https://github.com/akhatarmourad",
      category: "Software Development"
    },
    {
      id: 8,
      title: "Full-Stack CRUD with React & Spring",
      des: "A CRUD application for managing employee data using React and Spring with PostgreSQL.",
      img: "./crud-spring.svg",
      iconLists: ["./springboot.png", "./spring-data.svg", "./react.svg", "./mui.svg", "./postgresql.svg"],
      link: "https://github.com/akhatarmourad",
      category: "Software Development"
    },
    {
      id: 9,
      title: "Glasses Design",
      des: "Design for Sanali Vision that creatively promotes their eyewear collection with modern aesthetics and comfort.",
      img: "./sanali.svg",
      iconLists: ["./photoshop.svg", "./illustrator.svg", "./pinterest.svg", "./behance.svg", "./freepik.png"],
      link: "https://github.com/akhatarmourad/Graphic-Design",
      category: "Graphic Design"
    },
    {
      id: 10,
      title: "Professional Event Posters",
      des: " Design for Club Industriel Arts et Métiers that showcases events in a visually compelling and effective manner.",
      img: "./indus.svg",
      iconLists: ["./photoshop.svg", "./illustrator.svg", "./pinterest.svg", "./behance.svg", "./freepik.png"],
      link: "https://github.com/akhatarmourad/Graphic-Design",
      category: "Graphic Design"
    },
    {
      id: 11,
      title: "Educational Services Promotion",
      des: "Design for M2S Academy that promotes educational services with engaging and dynamic visuals.",
      img: "./m2s.svg",
      iconLists: ["./photoshop.svg", "./illustrator.svg", "./pinterest.svg", "./behance.svg", "./freepik.png"],
      link: "https://github.com/akhatarmourad/Graphic-Design",
      category: "Graphic Design"
    },
    {
      id: 12,
      title: "Car Inspection Advertisement",
      des: "Design for 5abir that highlights car inspection services with sophisticated and attention-grabbing visuals.",
      img: "./5abir.svg",
      iconLists: ["./photoshop.svg", "./illustrator.svg", "./pinterest.svg", "./behance.svg", "./freepik.png"],
      link: "https://github.com/akhatarmourad/Graphic-Design",
      category: "Graphic Design"
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "./cloud.svg",
      nameImg: "./cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "./app.svg",
      nameImg: "./appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "./host.svg",
      nameImg: "./hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "./s.svg",
      nameImg: "./streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "./dock.svg",
      nameImg: "./dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "AI & Data Engineer",
      desc: "Developing GenAI features and implementing a Big Data pipeline for an electronic document management (EDM) system.",
      className: "md:col-span-2",
      thumbnail: "./digiup.png",
      duration: 25000,
      details: "Capstone Internship, March - August 2024",
      tools: "Hadoop, Spark, LLMs, RAG, Flask, Spring Boot, React JS, DevOps..."
    },
    {
      id: 2,
      title: "Mobile Developer",
      desc: "Designing and developing a mobile application for both iOS & Android platforms for managing IT equipment.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "./dxc-technology.svg",
      duration: 32000,
      details: "Specialization Internship, July - September 023",
      tools: "React Native, Node JS, Tailwind CSS, MongoDB, RESTful APIs, Android Studio, Adobe xd..."
    },
    {
      id: 3,
      title: "Digitalization Engineer",
      desc: "Designing and developing a web platform to process data generated by Maroc Telecom's infrastructure.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "./huawei.svg",
      duration: 43000,
      details: "Technical Internship, July - September 2022",
      tools: "HTML, CSS, Bootstrap, JavaScript, AJAX, PHP, MySQL..."
    },
    {
      id: 4,
      title: "Industrial Engineer",
      desc: "Developing a VBA application for managing stock and production of electrical equipment.",
      className: "md:col-span-2",
      thumbnail: "./ingelec.svg",
      duration: 55000,
      details: "Initiation Internship, July - August 2021",
      tools: "Excel, Access, VBA, Stock Management..."
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];


export const skills = [
  {
    id: 1,
    title: "Front End",
    subtitle: "My tech stack for creating intuitive UI & UX applications",
    techs: [
      {logo: "./css.svg", name: "CSS", style: ""},
      {logo: "./html.svg", name: "HTML", style: ""},
      {logo: "./bootstrap.svg", name: "Bootstrap", style: ""},
      {logo: "./mui.svg", name: "Material UI", style: ""},
      {logo: "./tailwind.svg", name: "Tailwind CSS", style: ""},
      {logo: "./javascript.svg", name: "JavaScript", style: ""},
      {logo: "./typescript.svg", name: "TypeScript", style: ""},
      {logo: "./react.svg", name: "React JS", style: ""},
      {logo: "./next.svg", name: "Next JS", style: ""},
      {logo: "./react-native.svg", name: "React Native", style: ""},
      {logo: "./jquery.svg", name: "JQuery"},
      {logo: "./fm.svg", name: "Framer Motion", style: ""},
      {logo: "./shadcn-ui.svg", name: "Shadcn UI", style: "bg-white rounded-md"},
      {logo: "./primereact.svg", name: "Prime React", style: ""},
      {logo: "./acternity-ui.png", name: "Acternity UI", style: "rounded-xl"},
      {logo: "./Streamlit.svg", name: "Streamlit"},
    ]
  },
  {
    id: 2,
    title: "Back End",
    subtitle: "Toolkit for building dynamic & fullstack apps",
    techs: [
      {logo: "./python.svg", name: "Python", style: ""},
      {logo: "./flask.svg", name: "Flask", style: "bg-white rounded-md p-1"},
      {logo: "./fastapi.svg", name: "FastAPI", style: ""},
      {logo: "./java.svg", name: "Java", style: ""},
      {logo: "./spring-boot.svg", name: "Spring Boot", style: ""},
      {logo: "./spring-data.svg", name: "Spring Data JPA", style: ""},
      {logo: "./spring-security.svg", name: "Spring Security", style: ""},
      {logo: "./jwt.svg", name: "JWT", style: ""},
      {logo: "./nodejs.svg", name: "Node JS", style: ""},
      {logo: "./expressjs.svg", name: "Express JS", style: "bg-white rounded-full p-1"},
      {logo: "./mysql.svg", name: "MySQL"},
      {logo: "./postgresql.svg", name: "PostgreSQL"},
      {logo: "./mongodb.svg", name: "MongoDB", style: ""},
      {logo: "./redis.svg", name: "Redis"},
      {logo: "./graphql.svg", name: "GraphQL", style: ""},
      {logo: "./postman.svg", name: "Postman", style: ""},
    ]
  },
  {
    id: 3,
    title: "AI & Data Science",
    subtitle: "Main tools I use to bring data-driven insights to the table",
    techs: [
      {logo: "./numpy.svg", name: "Processing", style: ""},
      {logo: "./matplotlib.svg", name: "Visualization", style: ""},
      {logo: "./scikit-learn.svg", name: "Machine Learning", style: ""},
      {logo: "./tensorflow.svg", name: "Deep Learning", style: ""},
      {logo: "./opencv.svg", name: "Computer Vision", style: ""},
      {logo: "./huggingface.svg", name: "GenAI - LLMs", style: "rounded-md"},
      {logo: "./langchain.png", name: "LangChain", style: ""},
      {logo: "./chromadb.svg", name: "ChromaDB", style: ""},
      {logo: "./mlflow.png", name: "ML Flow", style: ""},
    ]
  },
  {
    id: 4,
    title: "BI & Data Analysis",
    subtitle: "Technologies I use for building data ETL pipelines",
    techs: [
      {logo: "./hadoop.svg", name: "Hadoop", style: ""},
      {logo: "./spark.svg", name: "", style: ""},
      {logo: "./kafka.png", name: "Kafka", style: ""},
      {logo: "./hive.png", name: "Hive", style: ""},
      {logo: "./airflow.svg", name: "Airflow", style: "p-1"},
      {logo: "./powerbi.svg", name: "Power BI", style: ""},
      {logo: "./tableau.svg", name: "Tableau", style: ""},
      {logo: "./excel.svg", name: "Excel", style: ""},
      {logo: "./access.svg", name: "Access", style: ""},
      {logo: "./azure.png", name: "Microsoft Azure", style: ""},
      
    ]
  },
  {
    id: 5,
    title: "DevOps",
    subtitle: "Mourad's DevOps practices to automate workflows",
    techs: [
      {logo: "./linux.svg", name: "Linux", style: ""},
      {logo: "./git.svg", name: "Git", style: ""},
      {logo: "./github.svg", name: "Github", style: "bg-white rounded-full p-[1px]"},
      {logo: "./gitlab.svg", name: "Gitlab", style: ""},
      {logo: "./git-lfs.png", name: "Git LFS", style: "rounded-full"},
      {logo: "./docker.svg", name: "Docker", style: ""},
      {logo: "./compose.png", name: "Compose", style: ""},
      {logo: "./Kubernetes.png", name: "Kubernetes", style: ""},
      {logo: "./sonarqube.svg", name: "SonarQube", style: "bg-white p-1 rounded-full"},
      {logo: "./nexus.png", name: "Nexus", style: "bg-white rounded-full p-1"},
      {logo: "./github-actions.png", name: "Github Actions", style: ""},
      {logo: "./grafana.svg", name: "Grafana", style: ""},
      {logo: "./prometheus.svg", name: "Prometheus"},
    ]
  },
  {
    id: 6,
    title: "Graphic Design",
    subtitle: "Softwares I use to visualize ideas into creative designs",
    techs: [
      {logo: "./photoshop.svg", name: "Photoshop", style: ""},
      {logo: "./illustrator.svg", name: "Illustrator", style: ""},
      {logo: "./indesign.svg", name: "InDesign", style: ""},
      {logo: "./premiere.svg", name: "Premier Pro", style: ""},
      {logo: "./xd.svg", name: "Adobe XD", style: ""},
      {logo: "./figma.svg", name: "Figma", style: ""},
      {logo: "./canva.svg", name: "Canva", style: ""},
      {logo: "./capcut.svg", name: "Capcut", style: "bg-white rounded-md"},
      {logo: "./obs.png", name: "OBS Studio", style: ""},
      {logo: "./videoscribe.png", name: "Video Scribe", style: ""},
      {logo: "./meta.svg", name: "Facebook Ads", style: "py-1"},
      {logo: "./google-ads.svg", name: "Google Ads"},
      {logo: "./postgresql.svg", name: "PostgreSQL"},
    ]
  },
  {
    id: 7,
    title: "Industry",
    subtitle: "Methodologies for managing manufacturing processes",
    techs: [
      {name: "Environment MS ISO 14001", style: ""},
      {name: "Health & Safety MS ISO 45001", style: ""},
      {name: "Quality MS ISO 9001", style: ""},
      {name: "Info Security MS ISO 27001", style: ""},
      {name: "Risk Management ISO 31000", style: ""},
      {name: "Lean Six Sigma", style: ""},
      {name: "Statistical Process Control (SPC)", style: ""},
      {name: "Supply Chain Management", style: ""},
      {name: "Stock & Production Management", style: ""},
      {name: "Industrial Supervision", style: ""},
      {name: "PDCA", style: ""},
      {name: "DMAIC", style: ""},
      {name: "5S", style: ""},
      {name: "JIT", style: ""},
      {name: "Kanban", style: ""},
      {name: "ERP", style: ""},
      {name: "5S", style: ""},
      {name: "Gemba Walks", style: ""},
      {name: "Visual Management", style: ""},
      {name: "FMEA", style: ""},
      {name: "Jidoka", style: ""},
      {name: "Andon System", style: ""},
      {name: "Control Charts"},
      {name: "Kaizen"},      
      {name: "TPS", style: ""},
      {name: "Poka-Yoke", style: ""},
      {name: "Ishikawa", style: ""},
      {name: "SMED", style: ""},
      {name: "RACI Matrix", style: ""},
      {name: "Agile & Scrum", style: ""},
      {name: "8D", style: ""},
      {name: "Eco Design", style: ""},
      {name: "3Ms", style: ""},
      {name: "5 Whys Analysis", style: ""},
    ]
  },
  {
    id: 8,
    title: "Additional Skills",
    subtitle: "Extra skills that level up my work",
    techs: [
      {logo: "./word.svg", name: "Word", style: ""},
      {logo: "./powerpoint.svg", name: "PowerPoint", style: ""},
      {logo: "./vscode.svg", name: "VS Code", style: ""},
      {logo: "./intellij-idea.svg", name: "Intellij Idea", style: ""},
      {logo: "./cursor.png", name: "Cursor", style: ""},
      {logo: "./minitab.svg", name: "Minitab", style: "rounded-md"},
      {logo: "./spss-logo.png", name: "IBM SPSS", style: "p-1"},
      {logo: "./rapid-miner.png", name: "Rapid Miner", style: ""},
      {logo: "./overleaf.png", name: "LaTex", style: ""},
      {logo: "./catia.jpg", name: "Catia V5", style: "rounded-md"},
      {logo: "./vba.png", name: "VBA"},
      {logo: "./c++.svg", name: "C++"},
      {logo: "./php.svg", name: "PHP", style: ""},
    ]
  },
  {
    id: 9,
    title: "Soft Skills",
    subtitle: "The soft side qualities & strengths",
    techs: [
      {name: "Volunteering", subtitle: "Team Collaboration", subtitleStyle: "bg-gradient-to-r from-green-700 via-lime-500 to-green-500"},
      {name: "Engineering", subtitle: "Problem-Solving", subtitleStyle: "bg-gradient-to-r from-blue-700 via-sky-500 to-blue-500"},
      {name: "Teaching", subtitle: "Communication", subtitleStyle: "bg-gradient-to-r from-violet-700 via-fuchsia-500 to-violet-500"},
      {name: "Graphic Design", subtitle: "Creativity", subtitleStyle: "bg-gradient-to-r from-orange-700 via-yellow-500 to-orange-500"},
      {name: "Activities", subtitle: "Agility", subtitleStyle: "bg-gradient-to-r from-slate-300 via-white to-slate-300"},
      {name: "Internships", subtitle: "Professionalism", subtitleStyle: "bg-gradient-to-r from-red-700 via-rose-500 to-red-500"},
    ]
  }
];