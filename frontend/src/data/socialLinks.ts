import { SocialLink } from "@/types";
import { Github, Linkedin, Mail } from "lucide-react";

export const socialLinks: SocialLink[] = [
    {
        id: 1,
        name: 'GitHub',
        url: 'https://github.com/Mattias988',
        icon: Github,
    },
    {
        id: 2,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/maciej-korsakowski-a65b0226a/',
        icon: Linkedin,
    },
    {
        id: 3,
        name: 'Email',
        url: 'mailto:maciek.korsakowski@gmail.com',
        icon: Mail,
    },
]