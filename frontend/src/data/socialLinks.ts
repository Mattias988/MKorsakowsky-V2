import {SocialLink} from "@/types";
import {Github, Linkedin, Mail} from "lucide-react";

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
        url: 'https://www.linkedin.com/in/mattias-schulze-989b621b4/',
        icon: Linkedin,
    },
    {
        id: 3,
        name: 'Email',
        url: 'mailto:maciek.korsakowski@gmail.com',
        icon: Mail,
    },
]