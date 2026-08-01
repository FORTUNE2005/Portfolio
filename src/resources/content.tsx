import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ange Fortune",
  lastName: "Djiré",
  name: `Djiré Ange Fortune`,
  role: "Étudiant en Informatique",
  avatar: "/images/avatar3.jpg",
  email: "fortunedjire@gmail.com",
  location: "Africa/Abidjan", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français", "Anglais"], // optional: Leave the array empty if you don't want to display languages
  locale: "fr", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Abonnez-vous à la newsletter de {person.firstName}</>,
  description: <>Mes actualités sur le développement web</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/FORTUNE2005",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ange-fortune-djire-6241192a4",
    essential: true,
  },
  {
    name: "Téléphone",
    icon: "phone",
    link: "tel:+2250748552699",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio de ${person.name}`,
  description: `Site portfolio de ${person.name}, ${person.role.toLowerCase()} à la recherche d'un stage`,
  headline: <>Je développe des solutions web pour résoudre des problèmes concrets</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Gestion des ONG</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projet personnel
        </Text>
      </Row>
    ),
    href: "/work/ong-management-platform",
  },
  subline: (
    <>
      Je suis {person.firstName}, étudiant en Licence 3 MIAGE à l'Université Félix Houphouët-Boigny.
      Motivé, curieux et autonome, je recherche un <br /> stage en informatique pour mettre à profit
      mes compétences en développement web.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `En savoir plus sur ${person.name}, ${person.role.toLowerCase()} à Abidjan`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} est étudiant en Licence 3 MIAGE à l'Université Félix Houphouët-Boigny
        (Abidjan, Côte d'Ivoire), passionné par le développement web, les nouvelles technologies et
        la veille numérique. Motivé, curieux et autonome, il développe ses compétences en analyse,
        développement et gestion de projets informatiques, avec l'objectif de contribuer à des
        projets concrets au sein d'une équipe.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Expérience professionnelle",
    experiences: [],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formation",
    institutions: [
      {
        name: "Licence 3 MIAGE",
        description: (
          <>
            2025 – En cours · Université Félix Houphouët-Boigny (UFHB) — Abidjan · Méthodes
            Informatiques Appliquées à la Gestion des Entreprises
          </>
        ),
      },
      {
        name: "Licence 2 MIAGE",
        description: <>2024 – 2025 · Université Félix Houphouët-Boigny (UFHB) — Abidjan</>,
      },
      {
        name: "Licence 1 MIAGE",
        description: <>2023 – 2024 · Université Félix Houphouët-Boigny (UFHB) — Abidjan</>,
      },
      {
        name: "Baccalauréat",
        description: <>2022 – 2023 · Côte d'Ivoire</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences techniques",
    skills: [
      {
        title: "Développement web",
        description: <>Création d'interfaces web et d'applications full-stack.</>,
        tags: [
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
        ],
      },
      {
        title: "Programmation",
        description: <>Java — notions.</>,
        tags: [
          {
            name: "Java",
            icon: "java",
          },
        ],
      },
      {
        title: "Bases de données",
        description: <>Conception et manipulation de bases de données relationnelles.</>,
        tags: [
          {
            name: "SQL",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
        ],
      },
      {
        title: "Bureautique",
        description: <>Outils bureautiques et création de contenus visuels.</>,
        tags: [
          {
            name: "Word",
            icon: "document",
          },
          {
            name: "Excel",
            icon: "excel",
          },
          {
            name: "PowerPoint",
            icon: "powerpoint",
          },
          {
            name: "Canva",
            icon: "canva",
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Écrire sur le développement web...",
  description: `Lire les articles de ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Projets de développement web réalisés par ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie photos – ${person.name}`,
  description: `Une collection de photos par ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
