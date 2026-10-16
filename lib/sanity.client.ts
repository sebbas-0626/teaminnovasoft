import "server-only";
import { createClient, type ClientConfig, type QueryParams } from "next-sanity";
import {
  projectId,
  dataset,
  apiVersion,
  token,
  mode,
  isSanityConfigured,
} from "@/lib/env.api";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: mode === "development" ? true : false,
  ignoreBrowserTokenWarning: true,
  token,
  perspective: "published",
};

const client = isSanityConfigured ? createClient(config) : null;

export async function sanityFetch<T>({
  query,
  qParams = {},
  tags,
  fallback,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
  fallback: T;
}): Promise<T> {
  if (!client) return fallback;

  const response = await client.fetch<T | null>(query, qParams, {
    cache: mode === "development" ? "no-store" : "force-cache",
    next: { tags },
  });

  return response ?? fallback;
}