import cryptoImg from "@/public/projects/crypto.png";
import carRentImg from "@/public/projects/carRent.png";
import ecomImg from "@/public/projects/ecom.png";
import gymImg from "@/public/projects/gym.png";
import quizImg from "@/public/projects/quizzApp.png"
import aiTeacherImg from "@/public/projects/aiTeacher.jpeg"
import appDevImg from "@/public/services/1.png"
import saasDevImg from "@/public/services/2.png"
import featureEnhanceImg from "@/public/services/4.png"
import maintenanceImg from "@/public/services/5.png"
import authIntegrationImg from "@/public/services/6.png"
import paymentIntegrationImg from "@/public/services/7.png"
import aiIntegrationImg from "@/public/services/8.png"

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
  {
    name: "projectsPage",
    hash: "./projects",
  },

] as const;

export const Addlinks = [
  {
    name: "Services",
    hash: "./services",
  },
  {
    name: "projectsPage",
    hash: "./projects",
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
      "A dynamic SaaS platform for personalized AI-powered teaching solutions. Fully responsive with real-time data processing and interactive user experiences.",
    tags: ["Mongoose", "ReactJS", "Tailwind CSS", "JavaScript", "ExpressJS"],
    imageUrl: aiTeacherImg,
    link: "https://ai-teacher-psi.vercel.app/",
  },
  {
    title: "Learnrithm",
    description:
      "A comprehensive SaaS platform for interactive learning, featuring quizzes and study tools, built using modern technologies for scalability and responsiveness.",
    tags: ["Prisma", "Next.js", "Tailwind CSS", "TypeScript", "REST API"],
    imageUrl: quizImg,
    link: "https://quizzorithm-testapp.vercel.app/",
  },
  {
    title: "E-commerce MMRD",
    description:
      "A modern, minimalist e-commerce platform focusing on user experience, responsiveness, and fast load times. Built with best practices in front-end design.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: ecomImg,
    link: "https://iayvobecomercewebsiteproject.vercel.app/",
  },
  {
    title: "Car Rental Agency",
    description:
      "A high-performance, fully animated, and smoothly navigated car rental website. Responsive design with rich interactivity and modern UI elements.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: carRentImg,
    link: "https://carrentalagencysite.vercel.app/",
  },
  {
    title: "Gym Site",
    description:
      "A gym showcase web app that allows users to explore programs and define their fitness objectives. The app is dynamic, animated, and fully responsive.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: gymImg,
    link: "https://gymatemain.vercel.app/",
  },
  {
    title: "Crypto Wallet",
    description:
      "A live cryptocurrency tracking site offering real-time pricing and other features. High animation and responsiveness make it a standout web app.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "API Integration"],
    imageUrl: cryptoImg,
    link: "https://cryptositeproject.vercel.app/",
  },
] as const;

export const services = [
  {
    title: "Custom Application Development",
    description:
      "End-to-end development of web applications tailored to your unique business needs, ensuring scalability, security, and seamless user experiences.",
    tags: ["React.js", "Next.js", "JavaScript", "TypeScript", "Node.js", "Tailwind CSS", "API Integration", "MongoDB", "PostgreSQL"],
    imageUrl: appDevImg,  // Add appropriate image reference
    link: "/#contact",
  },
  {
    title: "SaaS Platform Development",
    description:
      "Building powerful and feature-rich SaaS platforms from the ground up, using the latest tech stacks to deliver solutions that grow with your business.",
    tags: ["React.js", "Next.js", "Node.js", "Prisma", "MongoDB", "PostgreSQL", "REST API", "Tailwind CSS"],
    imageUrl: saasDevImg,  // Add appropriate image reference
    link: "/#contact",
  },
  {
    title: "Feature Enhancement & Optimization",
    description:
      "Enhancing existing applications with new functionalities, while optimizing current features for better performance, usability, and scalability.",
    tags: ["React.js", "Next.js", "JavaScript", "TypeScript", "Node.js", "API Development", "UI/UX Optimization"],
    imageUrl: featureEnhanceImg,  // Add appropriate image reference
    link: "/#contact",
  },
  {
    title: "Ongoing Maintenance & Support",
    description:
      "Providing continuous support to ensure your applications run smoothly, with regular updates, performance checks, and feature upgrades as needed.",
    tags: ["Bug Fixes", "Performance Monitoring", "Security Updates", "Feature Upgrades", "UI/UX Improvements"],
    imageUrl: maintenanceImg,  // Add appropriate image reference
    link: "/#contact",
  },
  {
    title: "Authentication Integration",
    description:
      "Implementing secure and reliable user authentication systems such as Clerk or NextAuth to manage user accounts, sessions, and authorization.",
    tags: ["NextAuth", "Clerk", "OAuth", "User Authentication", "Session Management", "Security"],
    imageUrl: authIntegrationImg,  // Add appropriate image reference
    link: "/#contact",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Seamlessly integrating payment gateways like Flutterwave, Stripe, and Paystack to ensure secure, smooth, and reliable transaction processing.",
    tags: ["Flutterwave", "Stripe", "Paystack", "Payment Gateway", "Transaction Processing", "API Integration"],
    imageUrl: paymentIntegrationImg,  // Add appropriate image reference
    link: "/#contact",
  },
  {
    title: "AI Integration",
    description:
      "Incorporating advanced AI models such as OpenAI or Gemini to enable features like text generation, JSON output processing, and image/PDF analysis.",
    tags: ["OpenAI", "Gemini", "AI Integration", "JSON Output", "Image Processing", "PDF Analysis"],
    imageUrl: aiIntegrationImg,  // Add appropriate image reference
    link: "/#contact",
  }
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
