import cryptoImg from "@/public/crypto.png";
import carRentImg from "@/public/carRent.png";
import ecomImg from "@/public/ecom.png";
import gymImg from "@/public/gym.png";

export const links = [
  {
    name: "Home",
    hash: "./#home",
  },
  {
    name: "About",
    hash: "./#about",
  },
  {
    name: "Projects",
    hash: "./#projects",
  },
  {
    name: "Skills",
    hash: "./#skills",
  },
  {
    name: "Contact",
    hash: "./#contact",
  },
  {
    name: "Articles",
    hash: "./articles",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce MMRD",
    description:
      "I worked on this project which is Modern Minimalist and Responsive design applying all what I learn.",
    tags: ["React", "Next.js", "Tailwind" , "TypeScript"],
    imageUrl: ecomImg,
    link: "https://iayvobecomercewebsiteproject.vercel.app/",
  },
  {
    title: "Car Rental Agency",
    description:
      "For making different project I try to make a Responsive high and fully animated and smoothly navigated website for car rental agency.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: carRentImg,
    link: "https://carrentalagencysite.vercel.app/",
  },
  {
    title: "Gym Site",
    description:
      "A public web app for quick showcase for each of a serbian gym salle",
    tags: ["React", "Next.js" , "Tailwind", "TypeScript"],
    imageUrl: gymImg,
    link: "https://gymatemain.vercel.app",
  },
  {
    title: "Crypto Wallet",
    description:
      "Crypto live update pricing and all features all so it is Responsive and high animated site",
    tags: ["React", "Next.js" , "Tailwind", "TypeScript" , "API"],
    imageUrl: cryptoImg,
    link: "https://cryptositeproject.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Sass&Scss",
  "Figma",
] as const;