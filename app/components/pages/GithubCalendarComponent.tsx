import ContributionGraph from "./ContributionGraph";
import { Slide } from "@/app/animation/Slide";

export default function GithubCalendarComponent() {
  return (
    <section className="mt-32">
      <Slide delay={0.16} className="mb-8">
        <h2 className="font-incognito text-4xl font-bold tracking-tight">
          Grafico de Contribuciones
        </h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
          Mi actividad pública en GitHub, curso a curso.
        </p>
      </Slide>

      <Slide delay={0.18}>
        <ContributionGraph />
      </Slide>
    </section>
  );
}