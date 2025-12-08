import {SkillsAndExpertiseTitleAndDesc} from "@/types";
import {SkillsAndExpertise} from "@/types/components";
import {PanelsTopLeft, Server, Database, Smartphone} from "lucide-react";

export const skillsAndExpertiseTitleAndDesc: SkillsAndExpertiseTitleAndDesc = {
    title: "Skills & Expertise",
    description: "A diverse skill set to tackle any challenge",
}

export const skillsAndExpertise: SkillsAndExpertise = [
    {
        cardTitle: "Frontend Development",
        icon: PanelsTopLeft,
        skills: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Sass",
            "Tailwind CSS",
            "Responsive Design"
        ],
    },
    {
        cardTitle: "Backend Development",
        icon: Server,
        skills: [
            "Node.js",
            "Express.js",
            "Python",
            "Django",
            "RESTful APIs",
            "GraphQL",
            "Database Management (SQL & NoSQL)"
        ],
    },
    {
        cardTitle: "Database & Tools",
        icon: Database,
        skills: [
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Git & GitHub",
            "Docker",
            "CI/CD Pipelines",
            "Cloud Services (AWS, Azure)"
        ],
    },
    {
        cardTitle: "Mobile & Other",
        icon: Smartphone,
        skills: [
            "React Native",
            "Flutter",
            "UI/UX Principles",
            "Agile Methodologies",
            "Problem-Solving",
            "Team Collaboration"
        ]
    }
]