import {HeroContent} from "@/types";

export const heroContent: HeroContent = {
    status: "Available for freelance projects",
    titlePrefix: "Hi, I'm",
    name: "Maciej Korsakowski",
    role: "Full Stack Developer",

    description: (className: string) => (
        <>
            A passionate <span className={className}>Full Stack Developer</span> crafting beautiful, functional, and user-centric digital experiences. Specialized in React, Node.js, and modern web technologies.
        </>
    ),

    primaryButton: "View My Work",
    secondaryButton: "Get In Touch",
    scrollText: "Scroll to explore"
}