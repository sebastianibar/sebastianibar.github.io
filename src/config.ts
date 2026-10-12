export const siteConfig = {
  name: "Sebastián Ibarra Padilla",
  title: "Aspirante a Desarrollador de Software y Redes | Estudiante de Ingeniería en Sistemas de Información",
  description: "Portafolio de proyectos de la carrera - Universidad de Sonora",
  accentColor: "#1d4ed8",
  social: {
    email: "sebasip181@ejemplo.com",
    github: "https://github.com/sebastianibar",
  },
  aboutMe:
    "Soy estudiante de Ingeniería en Sistemas de Información en la Universidad de Sonora. Desarrollo aplicaciones web y de escritorio, APIs REST y herramientas de apoyo al desarrollo con Java, Python, PHP y JavaScript, conectadas a bases de datos como PostgreSQL y MySQL. También me interesa el área de redes y el manejo de herramientas como Wireshark, inSSIDer y Cisco Packet Tracer. Trabajo bien en equipo y busco una oportunidad en desarrollo de software o redes para aportar a proyectos reales.",
  skills: [
    "Java",
    "JavaFX",
    "PostgreSQL",
    "JavaScript",
    "Python",
    "Flask",
    "PHP",
    "MySQL",
    "SQLite",
    "HTML",
    "CSS",
    "Bootstrap",
    "Chart.js",
    "API REST",
    "Figma",
    "Git",
    "GitHub",
    "Wireshark",
    "inSSIDer",
    "WiFiman",
    "Acrylic Suite",
    "Cisco Packet Tracer",
    "Trabajo en equipo",
    "Comunicación",
    "Adaptación a tiempos limitados",
  ],
  projects: [
    {
      name: "Sistema de Votación en Línea (simulación)",
      description:
        "Simulación de votación para candidatos a rectoría de la UNISON. Valida el expediente de 9 dígitos, evita el voto duplicado y muestra los resultados en una gráfica de dona que se actualiza cada 30 segundos. Proyecto en equipo.",
      link: "https://github.com/sebastianibar/sistema-votacion-unison",
      skills: ["PHP", "MySQL", "Bootstrap", "Chart.js"],
    },
    {
      name: "Punto de Venta PollosTech",
      description:
        "Aplicación de escritorio para administrar un negocio de pollos: inicio de sesión, gestión de personal, productos, clientes y proveedores, ventas y compras con inventario automático, y dashboard de pedidos. Proyecto en equipo.",
      link: "https://github.com/sebastianibar/pollos-tech",
      skills: ["Java", "JavaFX", "PostgreSQL"],
    },
    {
      name: "API REST de Biblioteca",
      description:
        "Aplicación web para registrar, consultar, editar y eliminar autores y libros. Backend en Flask con SQLite (dos tablas relacionadas) y frontend en HTML, CSS y JavaScript que consume la API con fetch.",
      link: "https://github.com/sebastianibar/api-rest-biblioteca",
      skills: ["Python", "Flask", "SQLite", "JavaScript"],
    },
    {
      name: "Calculadora de Sistemas de Coordenadas",
      description:
        "Calculadora de consola que convierte puntos entre sistemas de coordenadas 2D (cartesiano y polar) y 3D (rectangular, cilíndrico y esférico), y calcula la distancia entre dos puntos. Proyecto en equipo.",
      link: "https://github.com/sebastianibar/calculadora-coordenadas",
      skills: ["Java"],
    },
    {
      name: "Generador de Datos de Alumnos (Dummy Data)",
      description:
        "Herramienta web que genera hasta 50,000 registros de alumnos de prueba con matrículas y correos institucionales, y los exporta como SQL (MySQL/MariaDB o PostgreSQL), CSV o JSON.",
      link: "https://github.com/sebastianibar/generador-alumnos",
      skills: ["HTML", "CSS", "JavaScript"],
    },
  ],
  blog: [
    {
      name: "Estudio de Sitio WLAN y Análisis de Cobertura",
      description:
        "Estudio de sitio inalámbrico (site survey) en una casa de dos plantas: detección de redes vecinas, congestión de canales, clientes y seguridad, y mapas de calor de cobertura en 2.4 y 5 GHz. Proyecto en equipo para Comunicación de Datos II.",
      link: "https://github.com/sebastianibar/estudio-sitio",
      skills: ["InSSIDer", "WiFiman", "Acrylic Suite"],
    },
  ],
  education: [
    {
      school: "Universidad de Sonora",
      degree: "Ingeniería en Sistemas de Información",
      dateRange: "2024 - Presente",
      achievements: [
        "Proyectos con Java, PHP, Python y JavaScript",
        "Experiencia con bases de datos MySQL, PostgreSQL y SQLite",
        "Prototipado de interfaces en Figma",
        "Análisis y simulación de redes con Wireshark, inSSIDer y Cisco Packet Tracer",
        "Trabajo en equipo en proyectos de software y diseño de interfaces",
      ],
    },
  ],
};
