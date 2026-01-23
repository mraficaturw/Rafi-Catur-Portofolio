export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/Laravel.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/firebase.png";
import Tools13 from "/assets/tools/html.png";
import Tools14 from "/assets/tools/css.png";
import Tools15 from "/assets/tools/php.png";
import Tools16 from "/assets/tools/vite.png";
import Tools17 from "/assets/tools/mysql.png";
import Tools18 from "/assets/tools/typescript.png";
import Tools19 from "/assets/tools/golang.png";
import Tools20 from "/assets/tools/capcut.png";
import Tools21 from "/assets/tools/antigravity.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Firebase",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "MySql",
    ket: "Database",
    dad: "1900",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "TypeScript",
    ket: "Language",
    dad: "2000",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "Golang",
    ket: "Language",
    dad: "2100",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "CapCut",
    ket: "Video Editor",
    dad: "2200",
  },
  {
    id: 21,
    gambar: Tools21,
    nama: "Antigravity",
    ket: "Code Editor AI Assistant",
    dad: "2300",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";
import Proyek7 from "/assets/proyek/proyek7.webp";
// import Proyek8 from "/assets/proyek/proyek8.webp";
// import Proyek9 from "/assets/proyek/proyek9.webp";

export const listProyek = [
  {
    id: 1,
    isHasDemo: true,
    image: Proyek1,
    title: "SIKARIR Web App",
    subtitle: "Full-stack internship platform connecting students with opportunities",
    fullDescription: "Built a complete Fullstack Web Application (Migration, Models, Controller, Middleware, View) for an internship information platform at one of the leading universities in Karawang. It is increase the number of campus partners and students who do internships even though they have not graduated by 20-45%. Implementing the Filament admin panel for content management so that admins can add vacancies without deploying. Optimizing basic queries and caching to reduce the main page load time by up to 50%.",
    gradient: "linear-gradient(145deg, #00B074, #000)",
    themeColor: "#00B074",
    url: "https://sikarir-olive.vercel.app",
    dad: "100",
  },
  {
    id: 2,
    isHasDemo: true,
    image: Proyek2,
    title: "Personal Web Portfolio",
    subtitle: "Interactive portfolio showcasing projects and professional journey",
    fullDescription: "Personal portfolio site with dark Glassmorphism themed modern UI animation with responsive layout built with React Vite JavaScript implementing glassmorphism plus real time Google sign in and ChatRoom implementation using Firebase Authentication and Firestore.",
    gradient: "linear-gradient(180deg, #14B8A6, #000)",
    themeColor: "#14B8A6",
    url: "https://mraficw-portofolio.vercel.app",
    dad: "200",
  },
  {
    id: 3,
    isHasDemo: true,
    image: Proyek3,
    title: "Tix Concert",
    subtitle: "Concert ticketing platform with cart management and payment gateway integration",
    fullDescription: "Served as Frontend Developer for a 2025 personal e-commerce project, building the entire user interface with React and TypeScript. Implemented responsive UI components, persistent shopping cart functionality, Google authentication integration using Firebase, and seamless Midtrans payment gateway flow.",
    gradient: "linear-gradient(145deg, #F97316, #000)",
    themeColor: "#F97316",
    url: "https://tix-concert.vercel.app",
    dad: "300",
  },
  {
    id: 4,
    isHasDemo: false,
    image: Proyek4,
    title: "MentorSphere LMS",
    subtitle: "Learning management system with course creation and progress tracking",
    fullDescription: "Portfolio project demonstrating frontend development skills in educational technology. Built responsive UI components for course management, student progress tracking, and interactive learning materials. Ensured cross-browser compatibility and implemented smooth user interactions. Designed to showcase API integration skills and modern React development patterns.",
    gradient: "linear-gradient(145deg, #3B6FFF, #000)",
    themeColor: "#3B6FFF",
    url: "https://github.com/mraficaturw/MentorSpehere-LMS",
    dad: "400",
  },
  {
    id: 5,
    isHasDemo: true,
    image: Proyek5,
    title: "Atlas Creative Studio",
    subtitle: "Agency website template with modern animations and service showcases",
    fullDescription: "A personal project involved creating a premium agency website template with a conversion-focused design. Built with React 18 + TypeScript, it showcases service examples, a portfolio gallery, and testimonials. Implemented form validation using React Hook Form + Zod, and optimized performance with TanStack Query. Demonstrated ability to create clean, production-ready interfaces.",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    themeColor: "#10B981",
    url: "https://atlas-creative-henna.vercel.app/",
    dad: "500",
  },
  {
    id: 6,
    isHasDemo: false,
    image: Proyek6,
    title: "DigitalCraft Studio",
    subtitle: "E-commerce showcase platform with glassmorphism UI design",
    fullDescription: "Portfolio project showcasing e-commerce frontend development skills. Implemented pixel-perfect responsive design with glassmorphism effects, dynamic product displays, and smooth animations. Built using React 18 + TypeScript, shadcn/ui components, and TanStack Query for state management. Features include product galleries, contact forms, and client-side routing with React Router DOM.",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    themeColor: "#8B5CF6",
    url: "https://github.com/mraficaturw/digital-showcase-hub",
    dad: "600",
  },
  {
    id: 7,
    isHasDemo: true,
    image: Proyek7,
    title: "Laundry Invoice Progressive Web Application",
    subtitle: "Smart Digital Invoicing for Laundry Businesses",
    fullDescription: "Developing a web-based invoice application to replace the manual invoice creation process that previously required rewriting each transaction, reducing invoice creation time from approximately 5–10 minutes to less than 1 minute per transaction. Automating total price calculations based on weight and unit price inputs, reducing the risk of miscalculations common in manual recording. Providing a consistent, print-ready invoice display so that admins do not need to re-adjust the format before printing or sending invoices to customers.",
    gradient: "linear-gradient(145deg, #0EA5E9, #000)",
    themeColor: "#0EA5E9",
    url: "https://invoice-generator-app-liard.vercel.app/",
    dad: "700",
  },
];
