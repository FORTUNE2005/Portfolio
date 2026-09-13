export const person = {
  firstName: "Ange Fortune",
  lastName: "Djire",
  name: "Djire Ange Fortune",
  role: "Développeur Web & Étudiant en Informatique",
  avatar: "/images/og/home.jpg",
  heroImage: "/images/image 1 couleur.png",
  heroImageBw: "/images/image 1 couleur noir.png",
  email: "fortunedjire@gmail.com",
  phone: "+2250748552699",
  location: "Abidjan, Côte d'Ivoire",
  timezone: "Africa/Abidjan",
  locale: "fr",
  languages: ["Français", "Anglais"],
  headline: "Je développe des solutions web pour résoudre des problèmes concrets",
  description:
    "Développeur web et étudiant en Licence 3 MIAGE à l'UFHB. Je conçois des applications web rapides, fiables et soignées.",
  bio: "Passionné par le développement web et les nouvelles technologies, je développe mes compétences en analyse, développement et gestion de projets informatiques.",
  isAvailable: true,
  availabilityLabel: "Disponible pour de nouveaux projets",
  yearsExperience: 2,
};

export const socials = [
  {
    platform: "github",
    label: "GitHub",
    url: "https://github.com/FORTUNE2005",
    showInHero: true,
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ange-fortune-djire-6241192a4",
    showInHero: true,
  },
  {
    platform: "email",
    label: "Email",
    url: "mailto:fortunedjire@gmail.com",
    showInHero: true,
  },
  {
    platform: "phone",
    label: "Téléphone",
    url: "tel:+2250748552699",
    showInHero: false,
  },
];

export const stack = [
  "HTML",
  "CSS",
  "React",
  "PHP",
  "Laravel",
  "Java",
  "SQL",
  "MySQL",
  "Git",
  "Figma",
];

export const projects = [
  {
    id: 1,
    title: "Lucia Chaussures",
    description:
      "Site e-commerce de vente de chaussures avec catalogue, panier et paiement en ligne.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    category: "real",
    image: "/images/projects/Lucia/image.png",
    link: "https://lucia-chaussures.vercel.app/",
  },
  {
    id: 2,
    title: "Gestion des ONG",
    description:
      "Plateforme de gestion d'ONG avec tableau de bord, gestion des membres et suivi de projets.",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    category: "exploration",
    image: "/images/projects/ong/01-accueil.png",
    link: "#projets",
  },
  {
    id: 3,
    title: "MIAGE Health",
    description:
      "Application de gestion des consultations médicales avec tableau de bord, gestion des patients, médecins, consultations et examens.",
    tags: ["Java", "JavaFX", "MySQL", "JDBC"],
    category: "exploration",
    image: "/images/projects/clinique/imageproject5.png",
    link: "#projets",
  },
];

export const services = [
  {
    title: "Développement Web",
    description:
      "Création d'interfaces web modernes et d'applications full-stack avec les technologies les plus récentes.",
    icon: "code",
  },
  {
    title: "API & Back-end",
    description:
      "Conception d'API robustes et sécurisées avec Laravel, PHP et bases de données MySQL.",
    icon: "server",
  },
  {
    title: "Bases de Données",
    description:
      "Conception, modélisation et optimisation de bases de données relationnelles.",
    icon: "database",
  },
  {
    title: "Formation & Support",
    description:
      "Accompagnement et formation sur les outils et technologies web.",
    icon: "book",
  },
];

export const skills = [
  {
    category: "Développement Web",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React", level: 75 },
      { name: "PHP", level: 80 },
      { name: "Laravel", level: 70 },
    ],
  },
  {
    category: "Programmation",
    items: [{ name: "Java", level: 50 }],
  },
  {
    category: "Bases de données",
    items: [
      { name: "SQL", level: 80 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    category: "Outils",
    items: [
      { name: "Git", level: 70 },
      { name: "Figma", level: 60 },
    ],
  },
];

export const experiences = [
  {
    company: "Université Félix Houphouët-Boigny",
    role: "Licence 3 MIAGE",
    period: "2025 – En cours",
    description: "Méthodes Informatiques Appliquées à la Gestion des Entreprises",
  },
  {
    company: "Université Félix Houphouët-Boigny",
    role: "Licence 2 MIAGE",
    period: "2024 – 2025",
    description: "",
  },
  {
    company: "Université Félix Houphouët-Boigny",
    role: "Licence 1 MIAGE",
    period: "2023 – 2024",
    description: "",
  },
  {
    company: "Côte d'Ivoire",
    role: "Baccalauréat",
    period: "2022 – 2023",
    description: "",
  },
];

export const contactTitle = "Un projet en tête ?";
export const contactText =
  "Ensemble, on peut créer quelque chose de clair et d'impactant. Écris-moi ou réserve un créneau : on en parle.";

export const navLinks = [
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competences" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
