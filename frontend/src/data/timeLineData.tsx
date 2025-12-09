// timelineData.js
import { Briefcase, Code } from 'lucide-react';

export const experienceData = [
    {
        id: 1,
        title: "Junior Full Stack Java Developer",
        company: "Company Name",
        date: "2023 - Present",
        description: "Developing scalable web applications and maintaining backend services using Spring Boot and React.",
        achievements: [
            "Developed and integrated 15+ REST API endpoints using Spring Boot and Hibernate",
            "Refactored legacy React components to Hooks, improving code readability and maintainability",
            "Increased unit test coverage by 20% using JUnit and Mockito"
        ],
        icon: <Briefcase size={24} color="white" />,
        color: "#6366f1"
    },
    {
        id: 2,
        title: "Intern Java Developer",
        company: "Company Name",
        date: "2022 - 2023",
        description: "Assisted the development team in building internal tools and fixing bugs in the core product.",
        achievements: [
            "Assisted in the migration of frontend modules from JSP to React",
            "Resolved 50+ minor bugs and UI issues in the issue tracker (Jira)",
            "Collaborated with senior developers to learn clean code principles and Git workflow"
        ],
        icon: <Code size={24} color="white" />,
        color: "#6366f1"
    }
];