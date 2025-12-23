import {LucideIcon} from "lucide-react";
import {JSX} from "react";

export interface SocialLink {
    id: number;
    name: string;
    url: string;
    icon: LucideIcon;
}

export interface Project {
    id: number;
    title: string;
    description: (className: string) => JSX.Element;
    tags: string[];
    repoUrl: string;
    demoUrl?: string;
    imageUrl: string;
}

export interface HeroContent {
    status: string;
    titlePrefix: string;
    name: string;
    role: string;
    description: (className: string) => JSX.Element;
    primaryButton: string;
    secondaryButton: string;
    scrollText: string;
}

export interface AboutInfo {
    title: string;
    description: string;
    detailedInfo: {
        heading: string;
        paragraphs: string[];
    };
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    date: string;
    description: string;
    achievements: string[];
    icon: JSX.Element;
    color: string;
}

export type Experiences = Experience[];

export interface SkillsAndExpertiseTitleAndDesc {
    title: string;
    description: string;
}