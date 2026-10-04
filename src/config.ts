export const siteConfig = {
  name: "Sebastián Ibarra Padilla",
  title: "Estudiante de Ingeniería en Sistemas de Información",
  description: "Portafolio de proyectos de la carrera - Universidad de Sonora",
  accentColor: "#1d4ed8",
  social: {
    email: "TU-CORREO@ejemplo.com",
    github: "https://github.com/sebastianibar",
  },
  aboutMe:
    "Soy estudiante de Ingeniería en Sistemas de Información en la Universidad de Sonora. A lo largo de la carrera he desarrollado aplicaciones web y de escritorio, APIs y herramientas de apoyo al desarrollo, tanto en equipo como de forma individual. Me interesa conectar bases de datos, asegurar la información y convertir necesidades concretas en soluciones funcionales.",
  skills: [
    "Java",
    "JavaFX",
    "PostgreSQL",
    "PHP",
    "MySQL",
    "Python",
    "Flask",
    "SQLite",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Chart.js",
    "API REST",
  ],
  projects: [
    {
      name: "Sistema de Votación en Línea (simulación)",
      description:
        "Simulación de votación para candidatos a rectoría de la UNISON. Valida el expediente de 9 dígitos, evita el voto duplicado y muestra los resultados en una gráfica de dona que se actualiza cada 30 segundos. Proyecto en equipo.",
      link: "https://github.com/sebastianibar/NOMBRE-REPO-VOTACION",
      skills: ["PHP", "MySQL", "Bootstrap", "Chart.js"],
    },
    {
      name: "Punto de Venta PollosTech",
      description:
        "Aplicación de escritorio para administrar un negocio de pollos: inicio de sesión, gestión de personal, productos, clientes y proveedores, ventas y compras con inventario automático, y dashboard de pedidos. Proyecto en equipo.",
      link: "https://github.com/sebastianibar/NOMBRE-REPO-POS",
      skills: ["Java", "JavaFX", "PostgreSQL"],
    },
    {
      name: "API REST de Biblioteca",
      description:
        "Aplicación web para registrar, consultar, editar y eliminar autores y libros. Backend en Flask con SQLite (dos tablas relacionadas) y frontend en HTML, CSS y JavaScript que consume la API con fetch.",
      link: "https://github.com/sebastianibar/NOMBRE-REPO-BIBLIOTECA",
      skills: ["Python", "Flask", "SQLite", "JavaScript"],
    },
    {
      name: "Calculadora de Sistemas de Coordenadas",
      description:
        "Calculadora de consola que convierte puntos entre sistemas de coordenadas 2D (cartesiano y polar) y 3D (rectangular, cilíndrico y esférico), y calcula la distancia entre dos puntos. Proyecto en equipo.",
      link: "https://github.com/sebastianibar/NOMBRE-REPO-CALCULADORA",
      skills: ["Java"],
    },
    {
      name: "Generador de Datos de Alumnos (Dummy Data)",
      description:
        "Herramienta web que genera hasta 50,000 registros de alumnos de prueba con matrículas y correos institucionales, y los exporta como SQL (MySQL/MariaDB o PostgreSQL), CSV o JSON.",
      link: "https://github.com/sebastianibar/NOMBRE-REPO-DUMMY-DATA",
      skills: ["HTML", "CSS", "JavaScript"],
    },
  ],
  education: [
    {
      school: "Universidad de Sonora",
      degree: "Ingeniería en Sistemas de Información",
      dateRange: "20XX - Presente",
      achievements: [
        "Proyectos con Java, PHP, Python y JavaScript",
        "Experiencia con bases de datos MySQL, PostgreSQL y SQLite",
        "Trabajo en equipo en proyectos de software y diseño de interfaces",
      ],
    },
  ],
};
