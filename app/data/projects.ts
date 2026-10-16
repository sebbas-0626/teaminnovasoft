import type { PortableTextBlock } from "sanity";
import type { ProjectType } from "@/types";

function paragraphs(texts: string[]): PortableTextBlock[] {
  return texts.map((text, index) => ({
    _type: "block",
    _key: `block-${index}`,
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `span-${index}`,
        text,
        marks: [],
      },
    ],
  }));
}

export const projects: ProjectType[] = [
  {
    _id: "impulso-jobs",
    name: "Impulso Jobs",
    slug: "impulso-jobs",
    tagline:
      "Plataforma de empleo multitenant con Angular, NestJS y PostgreSQL",
    projectUrl: "https://demo.impulsojobs.com/inicio",
    repository: "https://github.com/cristian-123-fox/impulso-jobs",
    logo: "/images/impulso-jobs.png",
    coverImage: {
      image: "/teaminnovasoft/impulsojobs.jpeg",
      alt: "Pantalla principal de Impulso Jobs",
      lqip: "",
    },
    description: paragraphs([
      "Impulso Jobs es una plataforma de empleo con arquitectura multitenant, construida sobre Angular y NestJS con PostgreSQL como base de datos principal. Su diseño permite operar empresas y vacantes en distintos países desde una misma instalación.",
      "El proyecto nació como una migración: la plataforma original funcionaba sobre WordPress y necesitaba una base sólida para escalar. El equipo desarrolló un CMS y una plataforma de gestión propios, con una API REST que sirve tanto al frontend como a las integraciones internas.",
      "Uno de los componentes centrales es el sistema de planes. La integración con Stripe permite la contratación de planes y servicios de forma automática, gestionando suscripciones y cobros sin intervención manual.",
      "También se desarrolló la publicación y administración de vacantes empresariales, con herramientas para que cada empresa gestione sus propias vacantes y candidatos dentro de su cuenta.",
      "El despliegue se realizó en infraestructura de Hostinger y el soporte operativo cubre los mercados de México, Estados Unidos, Colombia y Canadá.",
    ]),
  },
];