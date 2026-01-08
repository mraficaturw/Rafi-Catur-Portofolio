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
    image: Proyek1,
    title: "SIKARIR Web App",
    subtitle: "Full-stack internship platform connecting students with opportunities",
    fullDescription: "Campus project demonstrating full-stack capabilities by building an internship platform. Developed complete backend with Laravel (migrations, seeders, REST API), admin panel using Filament for content management, and responsive frontend with Tailwind CSS + Vite. Implemented database optimization techniques including indexing and caching for scalability.",
    gradient: "linear-gradient(145deg, #00B074, #000)",
    url: "https://github.com/mraficaturw/",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Personal Web Portfolio",
    subtitle: "Interactive portfolio showcasing projects and professional journey",
    fullDescription: "Self-designed portfolio website featuring modern UI animations, dark mode, and responsive layouts. Built with React + Vite, implementing smooth transitions and glassmorphism design principles. Serves as a comprehensive showcase of my technical skills, completed projects, and development approach.",
    gradient: "linear-gradient(180deg, #3B82F6, #000)",
    url: "https://github.com/mraficaturw/",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Tix Concert",
    subtitle: "Concert ticketing platform with cart management and QR code generation",
    fullDescription: "Personal e-commerce project built to master React + TypeScript and state management. Implemented persistent shopping cart using Zustand with local storage, modular ticket selection components, and QR code generation for e-tickets. Optimized performance through lazy loading, React Query caching, and code splitting. Features include user authentication, responsive UI with shadcn/ui, and scalable component architecture.",
    url: "https://github.com/mraficaturw/TixConcert-frontend/",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "MentorSphere LMS",
    subtitle: "Learning management system with course creation and progress tracking",
    fullDescription: "Portfolio project demonstrating frontend development skills in educational technology. Built responsive UI components for course management, student progress tracking, and interactive learning materials. Ensured cross-browser compatibility and implemented smooth user interactions. Designed to showcase API integration skills and modern React development patterns.",
    gradient: "linear-gradient(145deg, #3B6FFF, #000)",
    url: "https://github.com/mraficaturw/MentorSpehere-LMS",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Atlas Creative Studio",
    subtitle: "Agency website template with modern animations and service showcases",
    fullDescription: "Personal project creating a premium agency website template with conversion-focused design. Built with React 18 + TypeScript, featuring service showcases, portfolio galleries, and testimonials. Implemented form validation using React Hook Form + Zod, and optimized performance with TanStack Query. Demonstrates ability to create polished, production-ready interfaces.",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/mraficaturw",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "DigitalCraft Studio",
    subtitle: "E-commerce showcase platform with glassmorphism UI design",
    fullDescription: "Portfolio project showcasing e-commerce frontend development skills. Implemented pixel-perfect responsive design with glassmorphism effects, dynamic product displays, and smooth animations. Built using React 18 + TypeScript, shadcn/ui components, and TanStack Query for state management. Features include product galleries, contact forms, and client-side routing with React Router DOM.",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://github.com/mraficaturw/digital-showcase-hub",
    dad: "600",
  },
  {
    id: 7,
    image: Proyek7,
    title: "Laundry Invoice PWA",
    subtitle: "Smart Digital Invoicing for Laundry Businesses",
    fullDescription: "Addressed the inefficiencies of manual invoicing in small-scale laundry businesses. Developed a Progressive Web App (PWA) to provide an offline-first, installable digital solution that streamlines operations. Built with Golang to leverage its speed and concurrency for a robust, high-performance backend, ensuring reliable data handling.",
    gradient: "linear-gradient(145deg, #0EA5E9, #000)",
    url: "https://github.com/mraficaturw/",
    dad: "700",
  },
];
