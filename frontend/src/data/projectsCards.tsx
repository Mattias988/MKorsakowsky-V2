import { ProjectsCards } from "@/types/components";
import speedDateImg from "@/assets/speed-date-matcher.webp";
import deliveryAppImg from "@/assets/delivery-app.webp";
import realEstateImg from "@/assets/real-estate-app.webp";
import kamalBetCzechImg from "@/assets/Kamal-bet-Czech-Version.webp";
import kamalBetSlovakImg from "@/assets/Kamal-bet-Slovak-Version.webp";

export const projectsCardsData: ProjectsCards = [
    {
        title: "Speed Dating System",
        description: "A comprehensive event management system for speed dating, featuring Brevo email integration and deployed on Microsoft Azure.",
        technologies: ["Django", "Next.js", "Docker", "Azure", "PostgreSQL"],
        src: speedDateImg,
        githubUrl: "https://github.com/benhus8/SpeedDatingMatcher",
        demoUrl: ""
    },
    {
        title: "DeliveryApp",
        description: "A full-stack food delivery platform built with Spring Boot and Angular, facilitating restaurant management and dietary product filtering.",
        technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Hibernate"],
        src: deliveryAppImg,
        githubUrl: "https://github.com/Mattias988/DeliveryApp",
        demoUrl: ""
    },
    {
        title: "Real Estate Portal",
        description: "A frontend capstone project designed as a real estate marketplace, featuring advanced filtering and sorting for property listings.",
        technologies: ["HTML5", "SCSS", "JavaScript", "Vite"],
        src: realEstateImg,
        githubUrl: "https://github.com/Mattias988/capstone-project",
        demoUrl: ""
    },
    {
        title: "Kamal-bet Czech version",
        description: "A localized corporate website dedicated to the Czech market. Built on WordPress using Elementor for dynamic layouts and custom PHP development for specific functionality. The project features a fully integrated WooCommerce store tailored for Czech customers.",
        technologies: ["WordPress", "WooCommerce", "PHP", "Elementor", "JavaScript", "HTML5", "CSS", "Redis"],
        src: kamalBetCzechImg,
        githubUrl: "",
        demoUrl: "https://betonovejimki-kamal.cz"
    },
    {
        title: "Kamal-bet Slovak version",
        description: "The Slovak edition of the Kamal-bet business platform. Developed with WordPress and Elementor, featuring custom PHP solutions and a robust WooCommerce e-commerce system. Designed to serve as a professional showcase and online store for the Slovak region.",
        technologies: ["WordPress", "WooCommerce", "PHP", "Elementor", "JavaScript", "HTML5", "CSS", "Redis"],
        src: kamalBetSlovakImg,
        githubUrl: "",
        demoUrl: "https://betonovezumpy-kamal.sk"
    },

];