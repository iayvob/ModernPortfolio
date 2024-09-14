import cryptoImg from "@/public/crypto.png";
import carRentImg from "@/public/carRent.png";
import ecomImg from "@/public/ecom.png";
import gymImg from "@/public/gym.png";
import quizImg from "@/public/quizzApp.png"
import aiTeacherImg from "@/public/aiTeacher.jpeg"

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
    name: "Skills",
    hash: "./#skills",
  },
  {
    name: "Projects",
    hash: "./#projects",
  },
  {
    name: "Contact",
    hash: "./#contact",
  },
  {
    name: "Services",
    hash: "./services",
  },

] as const;

export const linksType = [
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
    name: "projectsPage",
    hash: "./projects",
  },
  {
    name: "Services",
    hash: "./services",
  },

] as const;

export const projectsData = [
  {
    title: "AI Teacher",
    description:
      "Responsive and dynamic Saas Application for Pear softwares using the latest techStack",
    tags: ["Mongoose", "ReactJS" , "Tailwind", "JavaScript" , "ExpressJS"],
    imageUrl: aiTeacherImg,
    link: "https://ai-teacher-psi.vercel.app/",
  },
  {
    title: "Learnrithm",
    description:
      "Responsive and dynamic Saas Application for Pear softwares using the latest techStack",
    tags: ["Pisma", "Next.js" , "Tailwind", "TypeScript" , "API"],
    imageUrl: quizImg,
    link: "https://quizzorithm-testapp.vercel.app/",
  },
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
      "A public web app for quick showcase Gym, here you can see all programs, also you can presize your Objectif to gain, Responsive, Dynamic and Animated application",
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
  "TypeScript",
  "ReactJS",
  "NextJS",
  "ExpressJS",
  "NodeJS",
  "MongoDB",
  "SqlDB",
  "Tailwind",
  "Sass&Scss",
  "Bootstrap",
] as const;

export const Url = 'https://iayvob.vercel.app/projects'
