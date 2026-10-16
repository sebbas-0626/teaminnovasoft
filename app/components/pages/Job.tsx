import Image from "next/image";
import { jobQuery } from "@/lib/sanity.query";
import type { JobType } from "@/types";
import { formatDate } from "../../utils/date";
import { Slide } from "../../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import RefLink from "../shared/RefLink";
import EmptyState from "../shared/EmptyState";
import { jobs as staticJobs } from "../../data/jobs";
import { RiBriefcase3Fill } from "react-icons/ri";

export default async function Job() {
  const cmsJobs = await sanityFetch<JobType[]>({
    query: jobQuery,
    tags: ["job"],
    fallback: [],
  });

  const allJobs = [...staticJobs, ...cmsJobs];

  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Experiencia Laboral
          </h2>
        </div>
      </Slide>

      {allJobs.length > 0 ? (
        <Slide delay={0.18}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
            {allJobs.map((job) => (
              <div
                key={job._id}
                className={`flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200 ${
                  job.highlights?.length ? "lg:col-span-2" : ""
                }`}
              >
                <div className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative">
                  {job.logo ? (
                    <RefLink href={job.url ?? "#"}>
                      <Image
                        src={job.logo}
                        className="object-contain duration-300"
                        alt={`${job.name} logo`}
                        width={50}
                        height={50}
                      />
                    </RefLink>
                  ) : (
                    <RiBriefcase3Fill className="text-3xl text-zinc-500" />
                  )}
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold">{job.name}</h3>
                  <p>{job.jobTitle}</p>
                  {job.meta && (
                    <p className="text-sm dark:text-zinc-500 text-zinc-500">
                      {job.meta}
                    </p>
                  )}
                  <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {formatDate(job.startDate, "es-MX")} -{" "}
                    {job.endDate ? (
                      formatDate(job.endDate, "es-MX")
                    ) : (
                      <span className="dark:text-primary-color text-tertiary-color">
                        Actualidad
                      </span>
                    )}
                  </time>
                  {job.contract && (
                    <p className="text-sm dark:text-zinc-500 text-zinc-500 italic">
                      {job.contract}
                    </p>
                  )}
                  <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                    {job.description}
                  </p>

                  {job.highlights?.length ? (
                    <ul className="list-disc list-inside space-y-2 tracking-tight dark:text-zinc-400 text-zinc-600 mb-4">
                      {job.highlights.map((highlight) => (
                        <li key={highlight} className="pl-1">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {job.technologies?.length ? (
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-zinc-500">Tecnologías:</span>
                      {job.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-sm dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Slide>
      ) : (
        <EmptyState
          icon={<RiBriefcase3Fill />}
          title="Experiencia Laboral No Registrada"
          message="No encontramos experiencia laboral por el momento. Para agregarla, visita el estudio de Sanity y comienza a editar el contenido."
        />
      )}
    </section>
  );
}