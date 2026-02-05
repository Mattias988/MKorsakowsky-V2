import TitleAndDesc from "@/components/TitleAndDesc/TitleAndDesc";
import { featuredProjectsTitleAndDesc } from "@/data/featuredProjects";
import styles from "./FeaturedProjects.module.scss";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projectsCardsData } from "@/data/projectsCards";

export default function FeaturedProjects() {
    const { sectionTitle, sectionDescription } = featuredProjectsTitleAndDesc;

    return (
        <section className={styles.featuredProjectsContainer}>
            <TitleAndDesc title={sectionTitle} description={sectionDescription} />

            <div className={styles.projectsCardsContainer}>
                {projectsCardsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        src={project.src}
                        githubUrl={project.githubUrl}
                        demoUrl={project.demoUrl}
                    />
                ))}
            </div>
        </section>
    );
}