import {LucideIcon} from "lucide-react";
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

export interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    src: StaticImageData | string;
}

export type ProjectsCards = ProjectCardProps[];

export type SkillsAndExpertise = SkillCard[];