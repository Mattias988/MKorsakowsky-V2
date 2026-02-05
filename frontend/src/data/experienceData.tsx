// experienceData.tsx
import { Briefcase, Code } from 'lucide-react';
import { Experiences } from "@/types";

export const experienceData: Experiences = [
    {
        id: 1,
        title: "Backend developer - INTERN",
        company: "Prognosis Sp. z o.o.",
        date: "VII.2023 - IX.2023",
        description: "I possess a basic knowledge of Java, object-oriented programming, and the Spring Boot framework, and I have gained valuable experience working with microservices. Additionally, I am familiar with Hibernate and writing SQL queries, and I have worked with PostgreSQL.",
        achievements: [
            "Built scalable microservices using Java and Spring Boot framework",
            "Optimized database interactions using Hibernate and PostgreSQL",
            "Developed REST API endpoints ensuring high code quality with object-oriented programming"
        ],
        icon: <Briefcase size={24} color="white" />,
        color: "#6366f1"
    },
    {
        id: 2,
        title: "Frontend developer - INTERN",
        company: "Prognosis Sp. z o.o.",
        date: "X.2023 - V.2024",
        description: "I possess knowledge of TypeScript and React, along with experience in creating responsive user interfaces using React.js and Tailwind CSS. I am also familiar with Figma and have a proven track record of building reusable components in React.",
        achievements: [
            "Created responsive user interfaces using React.js and Tailwind CSS",
            "Built a set of reusable components in TypeScript based on Figma designs",
            "Maintained and improved frontend codebase ensuring high performance and responsiveness"
        ],
        icon: <Code size={24} color="white" />,
        color: "#6366f1"
    },
    {
        id: 3,
        title: "Web developer",
        company: "Kamal-bet",
        date: "VII.2025 - Present",
        description: "I have a solid understanding of WordPress and Elementor, supported by strong technical skills in PHP. I specialize in building complex websites and developing custom plugins for WordPress and WooCommerce. Additionally, I ensure that all websites are built with responsiveness in mind, delivering a seamless user experience across all devices.",
        achievements: [
            "Developed custom plugins for WordPress and WooCommerce using PHP",
            "Built complex, responsive websites using Elementor and WordPress",
            "Optimized website performance and user experience across diverse devices"
        ],
        icon: <Code size={24} color="white" />,
        color: "#6366f1"
    },
];
