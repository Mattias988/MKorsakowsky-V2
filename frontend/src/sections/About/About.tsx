'use client';

import styles from './About.module.scss'
import DescriptionCardsWithIcon from "../../components/InfoCards/DescriptionCardsWithIcon";
// 1. Import komponentu 3D
import Avatar3D from "../../components/Avatar/Avatar";

const Cards = [
    {
        title: "Clean Code",
        description: "Writing maintainable, scalable, and efficient code following best practices.",
        iconSrc: "../../public/icons/clean-code-icon.png"
    },
    {
        title: "Responsive Design",
        description: "Creating user-friendly interfaces that adapt seamlessly to various devices and screen sizes.",
        iconSrc: "../../public/icons/responsive-design-icon.png"
    },
    {
        title: "Performance Optimization",
        description: "Enhancing application speed and efficiency for a smooth user experience.",
        iconSrc: "../../public/icons/performance-optimization-icon.png"
    }
]

export default function About() {

    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.titleWithDescContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.firstTitleLine}/>
                    <h2 className={styles.sectionTitle}>About Me</h2>
                    <div className={styles.secondTitleLine}/>
                </div>
                <div className={styles.descContainer}>
                    <p className={styles.sectionDesc}>
                        I'm a developer who loves turning complex problems into simple, beautiful solutions.
                    </p>
                </div>
            </div>

            <div className={styles.contentContainer}>
                {/* 2. Podmiana w tym miejscu */}
                <div className={styles.imageContainer}>
                    <Avatar3D />
                </div>

                <div className={styles.textContainer}>
                    <h3 className={styles.sectionTitle}>
                        Building digital experiences that matter
                    </h3>
                    <p className={styles.sectionDesc}>
                        With over 5 years of experience in web development, I've worked with startups and established companies to create impactful digital solutions. My approach combines technical expertise with a keen eye for design, ensuring every project is both functional and beautiful.
                        <br/><br/>
                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                    </p>
                </div>
            </div>

            <div className={styles.allCardsContainer}>
                {Cards.map((card, index) => (
                    <div key={index} className={styles.cardsContainer}>
                        <DescriptionCardsWithIcon key={index} title={card.title} description={card.description} iconSrc={card.iconSrc}/>
                    </div>
                ))}
            </div>
        </section>
    );
}