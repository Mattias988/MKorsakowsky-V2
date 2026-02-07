import { Card } from '@/types/components'
import { Code, Palette, Rocket, Search } from "lucide-react";



export const cards: Card[] = [
    {
        title: "Clean Code",
        description: "Writing maintainable, scalable, and efficient code following best practices.",
        icon: Code,
    },
    {
        title: "Responsive Design",
        description: "Creating user-friendly interfaces that adapt seamlessly to various devices and screen sizes.",
        icon: Palette,
    },
    {
        title: "Performance Optimization",
        description: "Enhancing application speed and efficiency for a smooth user experience.",
        icon: Rocket,
    },
    {
        title: "SEO Optimization",
        description: "Optimizing websites for search engines to improve visibility and ranking.",
        icon: Search,
    }
]