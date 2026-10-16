import { Metadata } from "next";
import NotFoundComponent from "./components/shared/NotFound";

export const metadata: Metadata = {
  title: "Error 404",
};

export default function NotFound() {
  return (
    <NotFoundComponent
      title="Error 404!"
      description="Oops! Esta página no existe en Team Innovasoft. Mientras estás aquí, puedes revisar nuestros proyectos."
    />
  );
}
