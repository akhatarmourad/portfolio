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
    // {
    //   id: 4,
    //   title: "E-commerce Product Recommendation",
    //   des: " A intelligent recommendation engine for personalized product suggestions & promotions in online supermarkets.",
    //   img: "./recommendation.svg",
    //   iconLists: ["./python.svg", "./react.svg", "./fastapi.svg", "./tail.svg", "./fm.svg"],
    //   link: "https://github.com/akhatarmourad",
    //   category: "AI & Data Science"
    // },
    {
      id: 4,
      title: "Car Marketplace FullStack Web App",
      des: "A fullstack online marketplace for buying, renting & selling cars built using React SJ, Clerck, Drizzle, Shadcn UI...",
      img: "./car-marketplace.svg",
      iconLists: ["./react.svg", "./neon.png", "./c.svg", "./tail.svg", "./drizzle.png", "./firebase.svg"],
      link: "https://github.com/akhatarmourad/Car-Marketplace",
      category: "Software Development"
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
      iconLists: ["./python.svg", "./streamlit.svg", "./excel.svg", "./Matplotlib.svg", "./numpy.svg", "./Pandas.svg"],
      link: "https://github.com/akhatarmourad",
      category: "AI & Data Science"
    },
    // {
    //   id: 7,
    //   title: "Full-Stack CRUD with React & Node.js",
    //   des: " A CRUD application for managing student records using React and Node.js with MySQL.",
    //   img: "./crud-nodejs.svg",
    //   iconLists: ["./nodejs.svg", "./javascript.svg", "./react.svg", "./tailwind.svg", "./mysql.svg"],
    //   link: "https://github.com/akhatarmourad",
    //   category: "Software Development"
    // },
    {
      id: 7,
      title: "Modern UI & UX Next.js Portfolio",
      des: "A next generation portfolio with an intuitive UI & UX Design built using Next.js.",
      img: "./portfolio.svg",
      iconLists: ["./next.svg", "./typescript.svg", "./fm.svg", "./tailwind.svg", "./acternity-ui.png"],
      link: "https://github.com/akhatarmourad/portfolio",
      category: "Software Development"
    },
    {
      id: 8,
      title: "HR Excel Dashboard",
      des: "An advanced Excel dashsboard for HR department, built using excel, power pivot, pivot tables...",
      img: "./hr-excel-dashboard.svg",
      iconLists: ["./excel.svg", "./git.svg", "./behance.svg", "./flaticon.png", "./photoshop.svg"],
      link: "https://github.com/akhatarmourad/HR-Excel-Dashboard",
      category: "Business Intelligence"
    },
    // {
    //   id: 8,
    //   title: "Full-Stack CRUD with React & Spring",
    //   des: "A CRUD application for managing employee data using React and Spring with PostgreSQL.",
    //   img: "./crud-spring.svg",
    //   iconLists: ["./springboot.png", "./spring-data.svg", "./react.svg", "./mui.svg", "./postgresql.svg"],
    //   link: "https://github.com/akhatarmourad",
    //   category: "Software Development"
    // },
    {
      id: 9,
      title: "Commercial KPIs Dashboard",
      des: "An MS Excel dashboard for visualizing commerial insights, metrics & key measures.",
      img: "./commercial_dashboard.svg",
      iconLists: ["./excel.svg", "./google.png", "./behance.svg", "./freepik.png", "./photoshop.svg"],
      link: "https://github.com/akhatarmourad/Commercial-Services-KPIs-Excel-Dashboard",
      category: "Business Intelligence"
    },
    {
      id: 10,
      title: "Power BI Sales Dashboard",
      des: "An interactive Power BI dashboard for visualizing and analyzing sales metrics and trends.",
      img: "./PBI-sales-dashboard.svg",
      iconLists: ["./powerbi.svg", "./sql-server.png", "./sql.svg", "./powerpoint.svg", "./photoshop.svg", "./git.svg"],
      link: "https://github.com/akhatarmourad/Sales-Dashboard-Power-BI",
      category: "Business Intelligence"
    },
    {
      id: 11,
      title: "Glasses Design",
      des: "Design for Sanali Vision that creatively promotes their eyewear collection with modern aesthetics and comfort.",
      img: "./sanali.svg",
      iconLists: ["./photoshop.svg", "./illustrator.svg", "./pinterest.svg", "./behance.svg", "./freepik.png"],
      link: "https://github.com/akhatarmourad/Graphic-Design",
      category: "Graphic Design"
    },
    {
      id: 12,
      title: "Professional Event Posters",
      des: " Design for Club Industriel Arts et Métiers that showcases events in a visually compelling and effective manner.",
      img: "./indus.svg",
      iconLists: ["./photoshop.svg", "./illustrator.svg", "./pinterest.svg", "./behance.svg", "./freepik.png"],
      link: "https://github.com/akhatarmourad/Graphic-Design",
      category: "Graphic Design"
    },
    {
      id: 13,
      title: "Educational Services Promotion",
      des: "Design for M2S Academy that promotes educational services with engaging and dynamic visuals.",
      img: "./m2s.svg",
      iconLists: ["./photoshop.svg", "./illustrator.svg", "./pinterest.svg", "./behance.svg", "./freepik.png"],
      link: "https://github.com/akhatarmourad/Graphic-Design",
      category: "Graphic Design"
    },
    {
      id: 14,
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
      {logo: "./css.svg", name: "CSS", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./html.svg", name: "HTML", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./bootstrap.svg", name: "Bootstrap", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./mui.svg", name: "Material UI", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./tailwind.svg", name: "Tailwind CSS", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./javascript.svg", name: "JavaScript", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./typescript.svg", name: "TypeScript", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./react.svg", name: "React JS", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./next.svg", name: "Next JS", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./react-native.svg", name: "React Native", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./jquery.svg", name: "JQuery", subtitle: "", subtitleStyle: ""},
      {logo: "./fm.svg", name: "Framer Motion", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./shadcn-ui.svg", name: "Shadcn UI", style: "bg-white rounded-md", subtitle: "", subtitleStyle: ""},
      {logo: "./primereact.svg", name: "Prime React", style: ""},
      {logo: "./acternity-ui.png", name: "Acternity UI", style: "rounded-xl", subtitle: "", subtitleStyle: ""},
      {logo: "./streamlit.svg", name: "Streamlit", style: "", subtitle: "", subtitleStyle: ""},
    ]
  },
  {
    id: 2,
    title: "Back End",
    subtitle: "Toolkit for building dynamic & fullstack apps",
    techs: [
      {logo: "./python.svg", name: "Python", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./flask.svg", name: "Flask", style: "bg-white rounded-md p-1", subtitle: "", subtitleStyle: ""},
      {logo: "./fastapi.svg", name: "FastAPI", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./java.svg", name: "Java", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./spring-boot.svg", name: "Spring Boot", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./spring-data.svg", name: "Spring Data JPA", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./spring-security.svg", name: "Spring Security", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./jwt.svg", name: "JWT", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./nodejs.svg", name: "Node JS", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./expressjs.svg", name: "Express JS", style: "bg-white rounded-full p-1", subtitle: "", subtitleStyle: ""},
      {logo: "./mysql.svg", name: "MySQL", subtitle: "", subtitleStyle: ""},
      {logo: "./postgresql.svg", name: "PostgreSQL", subtitle: "", subtitleStyle: ""},
      {logo: "./mongodb.svg", name: "MongoDB", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./redis.svg", name: "Redis", subtitle: "", subtitleStyle: ""},
      {logo: "./graphql.svg", name: "GraphQL", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./postman.svg", name: "Postman", style: "", subtitle: "", subtitleStyle: ""},
    ]
  },
  {
    id: 3,
    title: "AI & Data Science",
    subtitle: "Main tools I use to bring data-driven insights to the table",
    techs: [
      {logo: "./numpy.svg", name: "Processing", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./Matplotlib.svg", name: "Visualization", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./scikit-learn.svg", name: "Machine Learning", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./Tensorflow.svg", name: "Deep Learning", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./opencv.svg", name: "Computer Vision", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./huggingface.svg", name: "GenAI - LLMs", style: "rounded-md", subtitle: "", subtitleStyle: ""},
      {logo: "./langchain.png", name: "LangChain", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./chromadb.svg", name: "ChromaDB", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./mlflow.png", name: "ML Flow", style: "", subtitle: "", subtitleStyle: ""},
    ]
  },
  {
    id: 4,
    title: "BI & Data Analysis",
    subtitle: "Technologies I use for building data ETL pipelines",
    techs: [
      {logo: "./hadoop.svg", name: "Hadoop", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./spark.svg", name: "", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./kafka.png", name: "Kafka", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./hive.png", name: "Hive", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./airflow.svg", name: "Airflow", style: "p-1", subtitle: "", subtitleStyle: ""},
      {logo: "./powerbi.svg", name: "Power BI", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./tableau.svg", name: "Tableau", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./excel.svg", name: "Excel", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./access.svg", name: "Access", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./azure.png", name: "Microsoft Azure", style: "", subtitle: "", subtitleStyle: ""},
      
    ]
  },
  {
    id: 5,
    title: "DevOps",
    subtitle: "Mourad's DevOps practices to automate workflows",
    techs: [
      {logo: "./linux.svg", name: "Linux", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./git.svg", name: "Git", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./github.svg", name: "Github", style: "bg-white rounded-full p-[1px]", subtitle: "", subtitleStyle: ""},
      {logo: "./gitlab.svg", name: "Gitlab", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./git-lfs.png", name: "Git LFS", style: "rounded-full", subtitle: "", subtitleStyle: ""},
      {logo: "./docker.svg", name: "Docker", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./compose.png", name: "Compose", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./Kubernetes.png", name: "Kubernetes", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./sonarqube.svg", name: "SonarQube", style: "bg-white p-1 rounded-full", subtitle: "", subtitleStyle: ""},
      {logo: "./nexus.png", name: "Nexus", style: "bg-white rounded-full p-1", subtitle: "", subtitleStyle: ""},
      {logo: "./github-actions.png", name: "Github Actions", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./grafana.svg", name: "Grafana", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./Prometheus.svg", name: "Prometheus", style: "", subtitle: "", subtitleStyle: ""},
    ]
  },
  {
    id: 6,
    title: "Graphic Design",
    subtitle: "Softwares I use to visualize ideas into creative designs",
    techs: [
      {logo: "./photoshop.svg", name: "Photoshop", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./illustrator.svg", name: "Illustrator", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./indesign.svg", name: "InDesign", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./premiere.svg", name: "Premier Pro", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./xd.svg", name: "Adobe XD", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./figma.svg", name: "Figma", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./canva.svg", name: "Canva", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./capcut.svg", name: "Capcut", style: "bg-white rounded-md", subtitle: "", subtitleStyle: ""},
      {logo: "./obs.png", name: "OBS Studio", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./videoscribe.png", name: "Video Scribe", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./meta.svg", name: "Facebook Ads", style: "py-1", subtitle: "", subtitleStyle: ""},
      {logo: "./google-ads.svg", name: "Google Ads", style: "", subtitle: "", subtitleStyle: ""},
    ]
  },
  {
    id: 7,
    title: "Industry",
    subtitle: "Methodologies for managing manufacturing processes",
    techs: [
      {logo: "", name: "Environment MS ISO 14001", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Health & Safety MS ISO 45001", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Quality MS ISO 9001", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Info Security MS ISO 27001", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Risk Management ISO 31000", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Lean Six Sigma", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Statistical Process Control (SPC)", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Supply Chain Management", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Stock & Production Management", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Industrial Supervision", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "PDCA", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "DMAIC", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "5S", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "JIT", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Kanban", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "ERP", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "5S", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Gemba Walks", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Visual Management", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "FMEA", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Jidoka", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Andon System", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Control Charts", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Kaizen", subtitle: "", subtitleStyle: ""},      
      {logo: "", name: "TPS", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Poka-Yoke", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Ishikawa", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "SMED", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "RACI Matrix", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Agile & Scrum", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "8D", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "Eco Design", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "3Ms", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "", name: "5 Whys Analysis", style: "", subtitle: "", subtitleStyle: ""},
    ]
  },
  {
    id: 8,
    title: "Additional Skills",
    subtitle: "Extra skills that level up my work",
    techs: [
      {logo: "./word.svg", name: "Word", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./powerpoint.svg", name: "PowerPoint", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./vscode.svg", name: "VS Code", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./intellij-idea.svg", name: "Intellij Idea", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./cursor.png", name: "Cursor", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./Minitab.svg", name: "Minitab", style: "rounded-md", subtitle: "", subtitleStyle: ""},
      {logo: "./spss-logo.png", name: "IBM SPSS", style: "p-1", subtitle: "", subtitleStyle: ""},
      {logo: "./rapid-miner.png", name: "Rapid Miner", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./overleaf.png", name: "LaTex", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./catia.jpg", name: "Catia V5", style: "rounded-md", subtitle: "", subtitleStyle: ""},
      {logo: "./vba.png", name: "VBA", subtitle: "", subtitleStyle: ""},
      {logo: "./c++.svg", name: "C++", subtitle: "", subtitleStyle: ""},
      {logo: "./php.svg", name: "PHP", style: "", subtitle: "", subtitleStyle: ""},
      {logo: "./trello.svg", name: "Trello", style: "p-1", subtitle: "", subtitleStyle: ""},
      {logo: "./jira.svg", name: "Jira", style: "", subtitle: "", subtitleStyle: ""},
    ]
  },
  {
    id: 9,
    title: "Soft Skills",
    subtitle: "The soft side qualities & strengths",
    techs: [
      {logo: "", name: "Volunteering", style: "", subtitle: "Team Collaboration", subtitleStyle: "bg-gradient-to-r from-green-700 via-lime-500 to-green-500"},
      {logo: "", name: "Engineering", style: "", subtitle: "Problem-Solving", subtitleStyle: "bg-gradient-to-r from-blue-700 via-sky-500 to-blue-500"},
      {logo: "", name: "Teaching", style: "", subtitle: "Communication", subtitleStyle: "bg-gradient-to-r from-violet-700 via-fuchsia-500 to-violet-500"},
      {logo: "", name: "Graphic Design", style: "", subtitle: "Creativity", subtitleStyle: "bg-gradient-to-r from-orange-700 via-yellow-500 to-orange-500"},
      {logo: "", name: "Activities", style: "", subtitle: "Agility", subtitleStyle: "bg-gradient-to-r from-slate-300 via-white to-slate-300"},
      {logo: "", name: "Internships", style: "", subtitle: "Professionalism", subtitleStyle: "bg-gradient-to-r from-red-700 via-rose-500 to-red-500"},
    ]
  }
];