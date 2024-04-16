import { TbBrandNextjs } from "react-icons/tb";

export const projectsData = [
  {
    id: 1,
    title: "GREEN HOUSE B&B",
    skills: ["Next.js", "Tailwind", "Typescript", "AOS", "Nodemailer", "Next-intl"],
    image: "/projects/greenhouse.jpeg",
    deploy: "https://www.greenhousevla.com.ar",
    description:
      "Proyecto Front-end realizado para un Bed & Breakfast sustentable. Es una app multi-idioma (español, portugues e ingles)",
    repository: "https://github.com/joacorojasmoschini/GreenHouse",
  },
  {
    id: 2,
    title: "CURUBETO",
    skills: ["Next.js", "Tailwind", "Fabric", "Nodemailer", "Adobe Photoshop"],
    image: "/projects/curubeto.jpg",
    deploy: "https://editor.curubeto.com/",
    description:
      "Desarrolle un editor de ropa para una empresa de buzos de egresados para facilitar el intercambio entre el cliente y la empresa. En ella al terminar el diseño, este se envía a la casilla de email de la empresa.",
  },
  {
    id: 3,
    title: "SURTONICA RECORDS / JUANSE",
    skills: ["Nodejs", "Express", "MongoDB", "JWT", "AWS S3"],
    image: "/projects/juanse.jpg",
    description: "Desarrolle el Back-end para un dashboard de una productora musical que cuenta con dos sitios web diferentes. Cuanta con autenticación, CRUD y las imagenes se alojan en el servicio S3 de AWS.",
    repository: "https://github.com/joacorojasmoschini/BE-juanse"
  },
  {
    id: 4,
    title: "FUNDACION ANIMAL",
    skills: [
      "Nodejs",
      "Express",
      "JWT",
      "Passport",
      "React",
      "MongoDB",
      "Nodemailer",
      "SCRUM",
    ],
    image: "/projects/fundacion-animal.jpg",
    deploy: "https://fe-shelter.vercel.app/",
    description:
      "Lidere un proyecto academico junto a 6 compañeros para una web de refugio de animales. Mi tarea principal fue centrado en el Back-end brindando autenticacion en las rutas y armado de CRUD para el dashboard.",
    repository: "https://github.com/T1Scaynet/BE-Shelter",
  },
];
