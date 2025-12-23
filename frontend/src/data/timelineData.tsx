// timelineData.js
import { Briefcase, Code } from 'lucide-react'; // Przykładowe ikony

export const timelineData = [
    {
        id: 1,
        title: "Senior Full Stack Developer",
        company: "TechCorp Solutions",
        date: "2022 - Present",
        description: "Leading development of enterprise-scale applications using React, Node.js, and cloud technologies.",
        achievements: [
            "Architected and deployed microservices infrastructure reducing load time by 40%",
            "Led a team of 5 developers in successful delivery of 3 major projects",
            "Implemented CI/CD pipeline improving deployment efficiency by 60%"
        ],
        icon: <Briefcase size={24} color="white" />,
        color: "#6366f1" // Indigo/Purple color z obrazka
    },
    {
        id: 2,
        title: "Full Stack Developer",
        company: "Digital Innovations Inc",
        date: "2020 - 2022",
        description: "Developed and maintained multiple client-facing web applications with focus on performance.",
        achievements: [
            "Built responsive e-commerce platform handling 10K+ daily transactions",
            "Optimized database queries reducing server response time"
        ],
        icon: <Code size={24} color="white" />,
        color: "#6366f1"
    }
];