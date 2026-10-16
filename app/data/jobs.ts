import type { JobType } from "@/types";

export const jobs: JobType[] = [
  {
    _id: "impulso-jobs",
    name: "Impulso Jobs",
    jobTitle: "Desarrollador Full Stack",
    logo: "/images/impulso-jobs.png",
    url: "https://demo.impulsojobs.com/inicio",
    meta: "México · Contrato temporal · 6 meses",
    contract: "Prestación de servicios",
    startDate: "2026-05-01",
    endDate: "2026-10-01",
    description:
      "Participé en la transformación de una plataforma de empleo que inicialmente funcionaba sobre WordPress, desarrollando una nueva solución web con arquitectura moderna y enfoque multitenant.",
    highlights: [
      "Desarrollo de un CMS y plataforma de gestión utilizando Angular y NestJS.",
      "Implementación de PostgreSQL como base de datos principal.",
      "Desarrollo de arquitectura multitenant para permitir la operación de empresas y vacantes en distintos países.",
      "Integración de Stripe como pasarela de pagos para la contratación de planes y servicios.",
      "Desarrollo de funcionalidades para publicación y administración de vacantes empresariales.",
      "Configuración y despliegue de la plataforma en infraestructura de Hostinger.",
      "Soporte para operación en mercados como México, Estados Unidos, Colombia y Canadá.",
    ],
    technologies: [
      "Angular",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "REST API",
      "Hostinger",
      "Git",
    ],
  },
];