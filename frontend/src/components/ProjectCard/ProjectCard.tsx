import styles from './ProjectCard.module.scss';
import { ProjectCardProps } from "@/types/components";
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description, technologies, src, githubUrl, demoUrl }: ProjectCardProps) {

    return (
        <section className={styles.ProjectCardContainer}>
            <div className={styles.imageContainer}>
                <Image src={src} alt={title} className={styles.image} />

                {/* Overlay with Links */}
                <div className={styles.overlay}>
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkButton}
                            title="View Code"
                        >
                            <Github className={styles.icon} />
                        </a>
                    )}
                    {/* {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkButton}
                            title="Live Demo"
                        >
                            <ExternalLink className={styles.icon} />
                        </a>
                    )} */}
                </div>
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