import cryptoImg from "@/public/projects/crypto.png";
import carRentImg from "@/public/projects/carRent.png";
import ecomImg from "@/public/projects/ecom.png";
import gymImg from "@/public/projects/gym.png";
import quizImg from "@/public/projects/quizzApp.png"
import aiTeacherImg from "@/public/projects/aiTeacher.png"
import appDevImg from "@/public/services/appDev.png"
import saasDevImg from "@/public/services/SaasDev.png"
import featureEnhanceImg from "@/public/services/featureEnhance.png"
import maintenanceImg from "@/public/services/maintenance.png"
import authIntegrationImg from "@/public/services/authIntegration.png"
import paymentIntegrationImg from "@/public/services/paymentIntegration.png"
import aiIntegrationImg from "@/public/services/aiIntegration.png"
import affiliatePortalImg from "@/public/projects/affiliatePortal.png"

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
    name: "All Projects",
    hash: "./projects",
  },

] as const;

export const Addlinks = [
  {
    name: "Services",
    hash: "./services",
  },
  {
    name: "All Projects",
    hash: "./projects",
  },
  {
    name: "Testimonials",
    hash: "./testimonials",
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
    name: "All Projects",
    hash: "./projects",
  },
  {
    name: "Services",
    hash: "./services",
  },
  {
    name: "Testimonials",
    hash: "./testimonials",
  },

] as const;

export const projectsData = [
  {
    title: "Affiliate Portal",
    description:
      "An advanced affiliate management system designed for seamless integration with Ai Teacher and Ai Quiz. This platform allows affiliates to track their referrals, manage earnings, and receive payments.",
    tags: ["Next.js", "TypeScript", "API", "Prisma", "MongoDB"],
    imageUrl: affiliatePortalImg,
    link: "https://partner.learnrithm.com/",
  },  
  {
    title: "AI Teacher",
    description:
      "A dynamic SaaS platform for personalized AI-powered teaching solutions. Fully responsive with real-time data processing and interactive user experiences.",
    tags: ["Mongoose", "ReactJS", "Tailwind CSS", "JavaScript", "ExpressJS"],
    imageUrl: aiTeacherImg,
    link: "https://ai-teacher-psi.vercel.app/",
  },
  {
    title: "AI QUIZ",
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

export const testimonials = [
  {
    name: 'Peter Okafour',
    position: 'CEO at Learnrithm AI',
    imageLink: 'https://media.licdn.com/dms/image/v2/D4D03AQFkE5U_mjsA7g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693259935378?e=1732752000&v=beta&t=PF4ZguCRlEgokhAWbko7G1FXm6lDwQ3HVsToYkEWoUA',
    opinion: 'Great to collaborate with you. You have very good code quality, ensuring the business model follows and maintaining high visibility with team working and time management. Highly recommend them.',
    postLink: 'https://www.linkedin.com/posts/peterokafor_education-has-a-problem-its-a-problem-we-activity-7238233155172786176-dxdx?utm_source=share&utm_medium=member_desktop'
  },
  {
    name: 'Sarah Johnson',
    position: 'CTO at Tech Innovations',
    imageLink: 'https://randomuser.me/api/portraits/women/66.jpg',
    opinion: 'The project was handled with exceptional professionalism and efficiency. The attention to detail and commitment to delivering high-quality work was impressive. Would definitely work with them again.',
    postLink: 'https://www.linkedin.com/posts/sarahjohnson_technology-innovation-leadership-activity-7096588396243783680-UVWv'
  },
  {
    name: 'Michael Smith',
    position: 'Founder at Digital Nexus',
    imageLink: 'https://randomuser.me/api/portraits/men/83.jpg',
    opinion: 'Impressive results and excellent customer service. Their ability to adapt to our changing needs and deliver on time was crucial for the success of our project.',
    postLink: 'https://www.linkedin.com/posts/michaelsmith_digital-transformation-strategy-activity-7102954945539152896-p7Zn'
  },
  {
    name: 'Emily Davis',
    position: 'Marketing Director at Brand Boosters',
    imageLink: 'https://randomuser.me/api/portraits/women/54.jpg',
    opinion: 'Outstanding experience! Their expertise in integrating marketing automation tools helped streamline our processes and improve our ROI significantly.',
    postLink: 'https://www.linkedin.com/posts/emilydavis_marketing-automation-roi-activity-7088581287365934080-Mmql'
  },
  {
    name: 'James Wilson',
    position: 'Product Manager at Innovate Tech',
    imageLink: 'https://randomuser.me/api/portraits/men/91.jpg',
    opinion: 'Exceptional work and a great team to work with. They delivered a top-notch product that exceeded our expectations. Highly recommend for any tech needs.',
    postLink: 'https://www.linkedin.com/posts/jameswilson_product-management-activity-7121154043729842176-5kza'
  },
  {
    name: 'Olivia Brown',
    position: 'Head of Design at Creative Minds',
    imageLink: 'https://randomuser.me/api/portraits/women/42.jpg',
    opinion: 'Their design skills are top-notch. The user interfaces they created were not only aesthetically pleasing but also highly functional and user-friendly.',
    postLink: 'https://www.linkedin.com/posts/oliviabrown_ui-design-activity-7103159468324975616-Pxna'
  },
  {
    name: 'David Lee',
    position: 'Lead Developer at Code Craft',
    imageLink: 'https://randomuser.me/api/portraits/men/34.jpg',
    opinion: 'They demonstrated excellent technical skills and a deep understanding of complex systems. The final product was robust and well-executed.',
    postLink: 'https://www.linkedin.com/posts/davidlee_software-development-activity-7112080675792382976-8Op2'
  },
  {
    name: 'Sophia Martinez',
    position: 'Business Analyst at Data Insights',
    imageLink: 'https://randomuser.me/api/portraits/women/76.jpg',
    opinion: 'Their analytical approach to solving business problems was exactly what we needed. Their insights and recommendations greatly improved our strategic decisions.',
    postLink: 'https://www.linkedin.com/posts/sophiamartinez_business-analysis-activity-7118490225868231680-IbhG'
  },
  {
    name: 'Lucas Green',
    position: 'Operations Manager at Efficient Ops',
    imageLink: 'https://randomuser.me/api/portraits/men/60.jpg',
    opinion: 'Their operational solutions were spot on. They helped streamline our processes and significantly improved our overall efficiency.',
    postLink: 'https://www.linkedin.com/posts/lucasgreen_operations-management-activity-7124785511562687488-KjV2'
  }
]




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
