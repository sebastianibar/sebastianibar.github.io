# Portafolio de Sebastian Ibarra Padilla

Portafolio personal de Sebastián Ibarra Padilla, estudiante de Ingeniería en Sistemas de Información en la Universidad de Sonora, con interés en desarrollo de software y redes. Reúne los proyectos de la carrera y los trabajos que no pueden subirse como código, documentados como blogs.

🌐 **Sitio en vivo:** [https://sebastianibar.github.io](https://sebastianibar.github.io)

## Contenido del sitio

| Sección | Qué muestra |
|---|---|
| **Inicio** | Nombre, puesto al que aspiro, ciudad y datos de contacto (correo, teléfono y GitHub) |
| **About Me** | Quién soy, qué puedo hacer y mis habilidades, separadas en tecnológicas y sociales |
| **Projects** | Repositorios de los proyectos de la carrera |
| **Blog** | Proyectos que no se pueden subir como repositorio de código, explicados paso a paso |
| **Education** | Mi formación académica |

### Proyectos

| Proyecto | Tecnologías |
|---|---|
| [Sistema de Votación en Línea](https://github.com/sebastianibar/sistema-votacion-unison) | PHP, MySQL, Bootstrap, Chart.js |
| [Punto de Venta PollosTech](https://github.com/sebastianibar/pollos-tech) | Java, JavaFX, PostgreSQL |
| [API REST de Biblioteca](https://github.com/sebastianibar/api-rest-biblioteca) | Python, Flask, SQLite, JavaScript |
| [Calculadora de Sistemas de Coordenadas](https://github.com/sebastianibar/calculadora-coordenadas) | Java |
| [Generador de Datos de Alumnos](https://github.com/sebastianibar/generador-alumnos) | HTML, CSS, JavaScript |

### Blog

Cada entrada incluye: descripción, requerimientos del cliente, cómo se diseñó la solución, cómo se implementó y cuál fue el resultado.

| Entrada | Herramientas |
|---|---|
| [Estudio de Sitio WLAN y Análisis de Cobertura](https://github.com/sebastianibar/estudio-sitio) | InSSIDer, WiFiman |
| [Heaven's Kitchen: Diseño de Interfaz y Prototipo de Videojuego](https://github.com/sebastianibar/interfaz-juego) | Figma, UI/UX |

## Tecnologías

- **[Astro](https://astro.build/)**: generador de sitios estáticos
- **[Tailwind CSS](https://tailwindcss.com/)**: estilos
- **TypeScript**: configuración del sitio
- **GitHub Pages** y **GitHub Actions**: publicación automática

## Personalización sobre la plantilla

Partí de una plantilla de código abierto (ver [Créditos](#créditos)) y le hice estos cambios:

- **Nueva sección Blog** (`Blog.astro`), con la misma estructura de tarjetas que Projects, enlazada desde el menú y ubicada antes de Education.
- **Habilidades separadas** en tecnológicas y sociales (`skills` y `softSkills` en la configuración).
- **Portada rediseñada:** quité el saludo inicial y agregué ciudad y teléfono (`location` y `social.phone`).
- **Contenido en español:** puesto, descripción, proyectos, blogs y educación.

## Estructura del proyecto

```
sebastianibar.github.io/
├── .github/workflows/       # Despliegue automático a GitHub Pages
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.astro      # Sobre mí y habilidades
│   │   ├── Blog.astro       # Sección de blogs
│   │   ├── Education.astro  # Educación
│   │   ├── Experience.astro # Experiencia (oculta si no hay datos)
│   │   ├── Footer.astro     # Pie de página
│   │   ├── Header.astro     # Menú de navegación
│   │   ├── Hero.astro       # Portada
│   │   └── Projects.astro   # Proyectos
│   ├── pages/
│   │   └── index.astro      # Página principal
│   ├── styles/
│   │   └── global.css       # Estilos globales
│   └── config.ts            # Todo el contenido del sitio
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Configuración

Todo el contenido se edita en un solo archivo: `src/config.ts`.

| Campo | Qué controla |
|---|---|
| `name`, `title`, `description` | Nombre, puesto y descripción del sitio |
| `accentColor` | Color principal del sitio |
| `location` | Ciudad que aparece en la portada |
| `social` | Correo, teléfono y GitHub |
| `aboutMe` | Texto de presentación |
| `skills` y `softSkills` | Habilidades tecnológicas y sociales |
| `projects` | Tarjetas de la sección Projects |
| `blog` | Tarjetas de la sección Blog |
| `education` | Formación académica |

Si se elimina una sección del archivo de configuración, deja de mostrarse en el sitio.

Estructura de una tarjeta (`projects` y `blog` usan la misma):

```ts
{
  name: "Nombre del proyecto",
  description: "Qué hace el proyecto.",
  link: "https://github.com/sebastianibar/nombre-del-repo",
  skills: ["Tecnología 1", "Tecnología 2"],
}
```

## Ejecutar en local

```bash
git clone https://github.com/sebastianibar/sebastianibar.github.io.git
cd sebastianibar.github.io
npm install
npm run dev
```

El sitio queda disponible en `http://localhost:4321`.

## Despliegue

El sitio se publica solo con **GitHub Actions**: cada `push` a la rama `master` ejecuta el workflow *Deploy to GitHub Pages*. Para verificar el estado, revisa la pestaña **Actions** del repositorio. En *Settings → Pages*, el origen debe estar en **GitHub Actions**.

## Créditos

Este portafolio está basado en **DevPortfolio Template**, una plantilla de código abierto creada por **[Ryan Fitzgerald](https://github.com/RyanFitzgerald)**.

- Repositorio original: [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio)
- Vista previa de la plantilla: [ryanfitzgerald.github.io/devportfolio](https://ryanfitzgerald.github.io/devportfolio/)
- Contacto del autor: [@rfitzio en X](https://x.com/rfitzio)

Agradezco al autor por compartir un diseño limpio y fácil de adaptar. El contenido, los textos y las modificaciones descritas arriba son propios.

## Licencia

La plantilla original se distribuye bajo la **licencia MIT**, y este proyecto la conserva. Consulta el archivo [LICENSE.md](LICENSE.md) para ver el texto completo.

## Autor

**Sebastián Ibarra Padilla** · [GitHub](https://github.com/sebastianibar)
