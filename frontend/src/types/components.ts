import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface Card {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface TitleAndDescProps {
    title: string;
    description: string;
}

export interface SkillCard {
    cardTitle: string,
    icon: LucideIcon,
    skills: string[]
}

export type SkillsAndExpertise = SkillCard[];

export interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    src: StaticImageData | string;
    githubUrl?: string; // Link to GitHub repo
    demoUrl?: string;   // Link to live demo
}

export type ProjectsCards = ProjectCardProps[];

export interface ContactItemProps {
    icon: LucideIcon;
    contactItemTitle: string;
    contactItemDescription: string;
}

export type ContactsCards = ContactItemProps[];