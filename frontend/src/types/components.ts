import {LucideIcon} from "lucide-react";

export interface Card {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface TitleAndDescProps {
    title: string;
    description: string;
}

export interface SkillsAndExpertise {
    title: string;
    icon: LucideIcon;
    skills: [string];
}