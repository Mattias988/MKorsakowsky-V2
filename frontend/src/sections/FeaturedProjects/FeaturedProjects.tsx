import TitleAndDesc from "@/components/TitleAndDesc/TitleAndDesc";
import {featuredProjectsTitleAndDesc} from "@/data/featuredProjects";
import styles from "./FeaturedProjects.module.scss";

export default function FeaturedProjects() {
    const { title, description } = featuredProjectsTitleAndDesc;

    return (
        <section className={styles.featuredProjectsContainer}>
            <TitleAndDesc title={title} description={description} />
        </section>
    );
}