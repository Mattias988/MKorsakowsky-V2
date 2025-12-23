import styles from './ProjectCard.module.scss';
import {ProjectCardProps} from "@/types/components";
import Image from 'next/image'

export default function ProjectCard({title, description, technologies, src} : ProjectCardProps) {

    return (
        <section className={styles.ProjectCardContainer}>
            <div className={styles.imageContainer}>
                <Image src={src} alt={title} className={styles.image}/>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.technologiesUsed}>
                    {technologies.map((tech, index) => (
                        <div key={index} className={styles.techItem}>
                            <p>{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}