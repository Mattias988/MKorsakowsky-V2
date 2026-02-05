import { ProjectsCards } from "@/types/components";
import speedDateImg from "@/assets/speed-date-matcher.webp";
import deliveryAppImg from "@/assets/delivery-app.webp";
import realEstateImg from "@/assets/real-estate-app.webp";

export const projectsCardsData: ProjectsCards = [
    {
        title: "Speed Dating System",
        description: "A comprehensive event management system for speed dating, featuring Brevo email integration and deployed on Microsoft Azure.",
        technologies: ["Django", "Next.js", "Docker", "Azure", "PostgreSQL"],
        src: speedDateImg,
        githubUrl: "https://github.com/benhus8/SpeedDatingMatcher",
        demoUrl: "#"
    },
    {
        title: "DeliveryApp",
        description: "A full-stack food delivery platform built with Spring Boot and Angular, facilitating restaurant management and dietary product filtering.",
        technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Hibernate"],
        src: deliveryAppImg,
        githubUrl: "https://github.com/Mattias988/DeliveryApp",
        demoUrl: "#"
    },
    {
        title: "Real Estate Portal",
        description: "A frontend capstone project designed as a real estate marketplace, featuring advanced filtering and sorting for property listings.",
        technologies: ["HTML5", "SCSS", "JavaScript", "Vite"],
        src: realEstateImg,
        githubUrl: "https://github.com/Mattias988/capstone-project",
        demoUrl: "#"
    }
];