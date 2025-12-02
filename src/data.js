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
    ket: "Framework",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "SIKARIR Web App",
    subtitle: "This platform helps UNSIKA students find internships, with vacancies that have partnered with UNSIKA.",
    fullDescription:"As a Full-Stack Developer, I was responsible for the end-to-end development of the SIKARIR platform. This included designing and implementing the backend with Laravel, managing the database through migrations and seeders, building the admin panel with Filament for easy management, and optimizing the frontend using Tailwind CSS and Vite. I also handled API integration, functionality testing, and deployment, ensuring the platform was ready to use and scalable. The main challenge I faced was optimizing performance for diverse job categories, which I addressed through database indexing and strategic caching.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/mraficaturw",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Self-Ordering System",
    subtitle: "Self-Ordering System for Culinary Product",
    fullDescription:"Self-Ordering System for Culinary Products that has many variants, developed to streamline the ordering process in food establishments. This system allows customers to browse the menu, customize their orders, and make payments directly from their devices. The application enhances customer experience by reducing wait times and minimizing errors in order processing. This project showcases my skills in creating efficient and user-friendly solutions for the food service industry.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/mraficaturw",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Tix Concert",
    subtitle: "TixConcert is a front-end web application for concert ticket booking that I developed using modern technologies. This project demonstrates my ability to build complex e-commerce applications, with a focus on high performance, intuitive UX, and code scalability.",
    fullDescription:"In the development of TixConcert, a React-based concert ticketing platform, I solved complex problems such as synchronizing authentication and cart states using Zustand with persist middleware to prevent data loss during navigation, and implementing modular components such as TicketSelector for efficient handling of quantity updates; improved web performance through Vite which accelerated build time, lazy loading of routes for lightweight initial load, and caching with React Query which reduced repeated API calls, ensuring a responsive application with smooth animations and optimal bundle size; as a full-stack frontend developer, my role included designing the application architecture from scratch, integrating TypeScript for type safety, optimizing UX with Tailwind CSS and shadcn/ui, and ensuring code scalability for features such as e-ticket QR codes and user dashboards, demonstrating skills in technical problem-solving and delivering a robust e-commerce application.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/mraficaturw/TixConcert-frontend/",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Personal Web Portfolio",
    subtitle: "An interactive web portfolio showcasing my professional journey...",
    fullDescription:"An interactive web portfolio showcasing my professional journey, skills, and projects. Designed with a clean yet modern aesthetic, the portfolio highlights my technical expertise in web development, software engineering, and IoT. The site also serves as a central hub for potential employers and collaborators to explore my works, reflecting both my creativity and technical precision.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/mraficaturw",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "OPER Website",
    subtitle: "A Learning Management Platform for Sports Teacher and Students.",
    fullDescription: "A Learning Management Platform for Sports Teachers and Students, designed to facilitate online education in physical education. The platform allows teachers to create and manage courses, share resources, and track student progress. Students can access course materials, submit assignments, and engage in interactive learning activities. This project highlights my ability to develop educational technology solutions that enhance learning experiences and support remote education.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/mraficaturw",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "SkeduApp",
    subtitle: "Application that helps students to manage their tasks or assignments.",
    fullDescription:"I worked with figma to help team designing Application that helps students to manage their tasks or assignments. This project demonstrates my ability to collaborate with design teams and contribute to the development of user-centric applications that enhance productivity and organization for students.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/mraficaturw",
    dad: "600",
  },
];
