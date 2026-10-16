import { Metadata } from "next";
import {
  presentation,
  pillars,
  team,
  services,
  reasons,
} from "../data/company";
import { Slide } from "../animation/Slide";
import PageHeading from "../components/shared/PageHeading";
import { siteDescription, siteImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros | Team Innovasoft",
  description: siteDescription,
  openGraph: {
    title: "Nosotros | Team Innovasoft",
    description: siteDescription,
    images: siteImage,
  },
};

export default function About() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title={presentation.title}
        description={presentation.tagline}
      />

      <Slide delay={0.1}>
        <p className="max-w-3xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          {presentation.paragraphs[1]}
        </p>
      </Slide>

      <section className="mt-32">
        <Slide delay={0.14}>
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Nuestro Equipo Especializado
          </h2>
          <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
            En Team Innovasoft reunimos los tres pilares clave para el éxito de
            cualquier proyecto tecnológico: Desarrollo, Cliente/Estrategia y
            Gestión.
          </p>
        </Slide>

        <Slide delay={0.16}>
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-12">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="flex flex-col dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 p-6 rounded-lg"
              >
                <div className="flex items-center gap-x-3 mb-4">
                  <pillar.icon className="text-2xl text-zinc-500" />
                  <h3 className="text-lg tracking-wide">{pillar.title}</h3>
                </div>
                <p className="font-semibold">{pillar.member}</p>
                <p className="text-sm dark:text-zinc-400 text-zinc-600">
                  {pillar.role}
                </p>
              </div>
            ))}
          </section>
        </Slide>

        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-5 mt-5">
          {team.map((member) => (
            <Slide key={member.id} delay={0.18}>
              <article className="h-full flex flex-col dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-6 rounded-lg">
                <div className="flex items-center gap-x-3 mb-4">
                  <member.icon className="text-3xl text-zinc-500" />
                  <div>
                    <h3 className="text-lg tracking-wide">{member.name}</h3>
                    <p className="text-sm dark:text-primary-color text-tertiary-color">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed">
                  {member.description}
                </p>
                {"technologies" in member && member.technologies ? (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {member.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="text-sm dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 rounded-md px-2 py-1"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            </Slide>
          ))}
        </div>
      </section>

      <section className="mt-32">
        <Slide delay={0.2}>
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            ¿Qué Hacemos?
          </h2>
          <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
            Nuestros servicios
          </p>
        </Slide>

        <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-12">
          {services.map((service) => (
            <Slide key={service.id} delay={0.22}>
              <article className="h-full flex items-start gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-6 rounded-lg">
                <service.icon className="text-2xl text-zinc-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg tracking-wide mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            </Slide>
          ))}
        </div>
      </section>

      <section className="mt-32 mb-12">
        <Slide delay={0.24}>
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            ¿Por qué trabajar con nosotros?
          </h2>
        </Slide>

        <div className="grid xl:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-5 mt-12">
          {reasons.map((reason) => (
            <Slide key={reason.id} delay={0.26}>
              <article className="h-full flex flex-col items-start dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 p-6 rounded-lg">
                <reason.icon className="text-3xl text-zinc-500 mb-4" />
                <h3 className="text-lg tracking-wide mb-1">{reason.title}</h3>
                <p className="text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed">
                  {reason.description}
                </p>
              </article>
            </Slide>
          ))}
        </div>
      </section>
    </main>
  );
}