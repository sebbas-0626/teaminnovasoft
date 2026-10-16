import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";
import EmptyState from "@/app/components/shared/EmptyState";
import { photos } from "../data/photos";
import { siteImage } from "@/lib/site";
import { HiCamera } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Fotos | Team Innovasoft",
  description: "Explora las fotos de Team Innovasoft",
  openGraph: {
    title: "Fotos | Team Innovasoft",
    description: "Explora las fotos de Team Innovasoft",
    images: siteImage,
  },
};

export default function Photos() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Fotos"
        description="Imágenes de nuestro día a día: los escritorios, las herramientas y los procesos que sostienen cada proyecto que entregamos."
      />

      {photos.length > 0 ? (
        <Slide delay={0.1}>
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mb-12">
            {photos.map((photo) => (
              <figure
                key={photo.id}
                className="group relative w-full aspect-[3/4] overflow-hidden rounded-lg border border-transparent dark:border-zinc-800 dark:bg-primary-bg bg-zinc-50"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover duration-300 group-hover:scale-105"
                  quality={100}
                />
              </figure>
            ))}
          </section>
        </Slide>
      ) : (
        <EmptyState
          icon={<HiCamera />}
          title="No Hay Fotos"
          message="Todavía no hemos publicado fotos. Vuelve pronto para ver las novedades."
        />
      )}
    </main>
  );
}