export type PhotoType = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const photos: PhotoType[] = [
  {
    id: "laptop-cafe-codigo",
    src: "/fotos/laptop-cafe-codigo.jpg",
    alt: "Laptop, taza de café y código: el escritorio de un desarrollador",
    width: 736,
    height: 1308,
  },
  {
    id: "escritorio-desarrollo",
    src: "/fotos/escritorio-desarrollo.jpg",
    alt: "Escritorio con monitor y laptop escribiendo código de noche frente a la ciudad",
    width: 736,
    height: 1308,
  },
  {
    id: "infografia-full-stack",
    src: "/fotos/infografia-full-stack.jpg",
    alt: "Infografía de las áreas del desarrollo Full Stack: frontend, backend, base de datos, DevOps y testing",
    width: 720,
    height: 1280,
  },
  {
    id: "sistemas-negocio-online",
    src: "/fotos/sistemas-negocio-online.jpg",
    alt: "Ilustración de un sistema web simple que gestiona un negocio en línea",
    width: 736,
    height: 1096,
  },
];