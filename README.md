<div align="center">
<a href="https://teaminnovasoft.com"><img src="./public/teaminnovasoft/teaminnovasoft.jpeg" width="60px"></a>
</div>

<div align="center">
<h1>Team Innovasoft</h1>
<p>Sitio web institucional</p>
</div>

# Tech Stack

- [NextJS][nextjs] - UI framework
- [TypeScript][typescript] - Lenguaje
- [TailwindCSS][tailwind] / CSS - Styling and UI
- [Framer Motion][framer] - Animaciones
- [React Icons][icons] - Iconografía
- [Next Themes][nexttheme] - Color Theme

## Project Overview

| Descripción                                              |
| -------------------------------------------------------- |
| Portafolio y sitio institucional de Team Innovasoft.      |

## Content

Todo el contenido visible del sitio vive en datos estáticos dentro de `app/data/`:

| Archivo                  | Contenido                                            |
| ------------------------ | ---------------------------------------------------- |
| `app/data/company.ts`    | Presentación, equipo, servicios y propuesta de valor |
| `app/data/jobs.ts`       | Experiencia laboral                                  |
| `app/data/projects.ts`   | Proyectos                                            |
| `app/data/social.ts`     | Enlaces de redes sociales                            |
| `lib/site.ts`            | Dominio, nombre del sitio, GitHub e imagen social    |

Para actualizar el dominio, el título o las redes sociales basta con editar `lib/site.ts` y `app/data/`.

## Images

| Ruta                                        | Uso                     |
| ------------------------------------------- | ----------------------- |
| `public/teaminnovasoft/teaminnovasoft.jpeg` | Logo e imagen social    |
| `public/teaminnovasoft/impulsojobs.jpeg`    | Portada de Impulso Jobs |
| `public/images/impulso-jobs.png`            | Logo de Impulso Jobs    |

## Running Locally

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts

```bash
pnpm dev     # servidor de desarrollo
pnpm build   # lint + build de producción
pnpm start   # servir el build de producción
```

El proyecto **no necesita variables de entorno**. `lib/env.api.ts` expone constantes vacías a propósito, por lo que el sitio funciona sin configuración externa.

## Credits

Este sitio está basado en el portfolio de [Victor Eke](https://victoreke.com) ([código original](https://github.com/Evavic44/victoreke.com)), bajo licencia MIT. El diseño, la estructura y los componentes se mantienen; el contenido y la identidad fueron adaptados por Team Innovasoft.

<!-- prettier-ignore -->
[nextjs]: https://nextjs.org
[typescript]: https://www.typescriptlang.org
[tailwind]: https://tailwindcss.com
[framer]: https://www.framer.com/motion/
[icons]: https://react-icons.github.io/react-icons
[nexttheme]: https://github.com/pacocoursey/next-themes