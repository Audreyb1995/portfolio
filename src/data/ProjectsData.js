import PremieresFois from "../assets/images/img-project/img-mespremieresfois.png";
import LeBonCoin from "../assets/images/img-project/img-leboncoin.png";
import Easyjet from "../assets/images/img-project/img-easyjet.png";
import Pendu from "../assets/images/img-project/img-pendu-v2.png";
import Porfolio from "../assets/images/img-project/img-portfolio-julien.png";
import Vue from "../assets/images/icons-skills/vue.png";
import Html from "../assets/images/icons-skills/html.png";
import Css from "../assets/images/icons-skills/css.png";
import Strapi from "../assets/images/icons-skills/strapi.png";
import Sass from "../assets/images/icons-skills/sass.png";
import Javascript from "../assets/images/icons-skills/javascript.png";


export const ProjectList = [
  {
    title: "Projet personnel - Site Mes Premières fois",
    period: "Projet en cours de réalisation - Juillet 2024",
    description:
      " Site qui permet aux parents d'ajouter une page souvenir avec une photo des premières fois de leurs enfants.",
    stack: "Gestion du front avec Vue.js et gestion du back avec le CMS Strapi",
    skills: [Vue, Strapi, Sass],
    image: PremieresFois,
  },
  {
    title: "Réplique simplifiée du site leboncoin",
    period: "Projet réalisé en Juin/Juillet 2024",
    description:
      "Réplique du site Leboncoin réalisée dans le cadre de la formation Développeur Web et Web Mobile au Reacteur.",
    stack:
      "Gestion du front avec Vue.js, gestion du back avec le CMS Strapi et gestion des simulations de paiement avec Stripe.",
    skills: [Vue, Strapi],
    image: LeBonCoin,
    link: "https://reproduction-le-bon-coin.netlify.app/",
  },
  {
    title: "Réplique simplifiée du site Easyjet",
    period: "Projet réalisé en Mai/Juin 2024",
    description:
      "Réplique du site Easyjet réalisée dans le cadre de la formation Développeur Web et Web Mobile au Reacteur.",
    stack: null,
    skills: [Html, Css],
    image: Easyjet,
    link: "https://reproduction-easyjet.netlify.app/",
  },
  {
    title: "Jeu du pendu",
    period: "Projet réalisé en Avril 2024",
    description:
      "Réalisation d'un Jeu du pendu avec utilisation d'une API qui génère des mots aléatoires.",
    stack: null,
    skills: [Html, Css, Javascript],
    image: Pendu,

  },
  {
    title: "Portfolio Développeur Web",
    period: "Projet réalisé en Mars 2024",
    description: "Réalisation d'un Portfolio pour un Développeur Web.",
    stack: null,
    skills: [Html, Css, Javascript],
    image: Porfolio,
    link: "https://www.julien.grandgirard.net/",
  },
];
