// This is where the studio component is mounted.
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { isSanityConfigured } from "@/lib/env.api";

export default function Studio() {
  if (!isSanityConfigured) {
    return (
      <main className="max-w-3xl mx-auto md:px-16 px-6 mt-32 mb-32">
        <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6">
          Sanity Studio no configurado
        </h1>
        <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          Para habilitar el estudio de contenido necesitas definir{" "}
          <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> y{" "}
          <code>NEXT_PUBLIC_SANITY_DATASET</code> en tu archivo{" "}
          <code>.env.local</code> y reiniciar el servidor de desarrollo.
        </p>
      </main>
    );
  }

  return <NextStudio config={config} />;
}