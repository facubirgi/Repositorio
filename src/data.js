// src/data.js
export const portfolioData = {
  title: "Fullstack Developer",
  name: "Facundo Birgi",
  about: "Desarrollador Fullstack con enfoque en crear experiencias digitales fluidas y escalables. Me apasiona resolver problemas reales. Conoce más acerca de mí.",
  cv_link: "/CVFacu.pdf",

  // Lista plana de habilidades con logotipos visuales
  skills: [
    { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "NestJS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
    { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: ".NET (C#)", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    { name: "React Native", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Kotlin", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
  ],
  projects: [
    {
      name: "Sistema de gestion ERP para PYMEs y negocios",
      description: "Sistema de gestion de stock, ventas y facturacion",
      fullDescription: "Sistema creado con NestJS en el backend y React en el frontend, desplegado en Railway y Netlify.",
      techs: "NestJS, React, PostgreSQL, Docker, TypeOrm, TailwindCss",
      repo: "https://github.com/facubirgi/ERP---Sistema-Saas",
      link: "#"
    },
    {
      name: "CRM para gestion de clientes y operaciones",
      description: "Sistema para estudios contables y de abogados que necesitan gestionar clientes, casos y tareas.Desplegado en Railway y Netlify.",
      fullDescription: "Panel administrativo donde el usuario puede gestionar clientes, casos, tareas y generar reportes. Desarrollado con Next.js, NestJS y PostgreSQL.",
      techs: "Next.js, NestJS, PostgreSQL, TailwindCss, Docker, TypeOrm",
      repo: "https://github.com/facubirgi/Blatter-y-Asociados",
      link: "#"
    },
    {
      name: "Agente de Ia para Ventas y Soporte",
      description: "Chatbot inteligente para mejorar la experiencia del cliente en sitios web de comercio electrónico.",
      fullDescription: "Agente de IA desarrollado con Python y FastAPI, integrado con OpenAI para procesamiento de lenguaje natural. Desplegado en Railway.",
      techs: "Python, FastAPI, OpenAI, LangChain, GraphLang, Railway",
      repo: "https://github.com/facubirgi/laburo-agent-ia",
      link: "#"
    }
  ],

  contact: {
    email: "birgifacundo@gmail.com",
    linkedin: "https://www.linkedin.com/in/facundo-birgi/",
    github: "https://github.com/facubirgi"
  }
};