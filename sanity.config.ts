import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";
import { projectId, dataset } from "./lib/env.api";

export default defineConfig({
  name: "teaminnovasoft",
  title: "Team Innovasoft",
  basePath: "/studio",
  projectId: projectId || "not-configured",
  dataset: dataset || "production",
  plugins: [deskTool(), visionTool(), codeInput(), table()],
  schema: { types: schemaTypes },
});
