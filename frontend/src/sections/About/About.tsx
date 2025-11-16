'use client';


import styles from './About.module.scss'

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
                <div className={styles.imageContainer}>
                    <img className={styles.image} src="../../assets/laptop-image.png" alt="Laptop Image" />
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
        </section>
    );
}
