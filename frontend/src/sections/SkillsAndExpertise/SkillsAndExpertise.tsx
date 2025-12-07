import styles from './SkillsAndExpertise.module.scss';
import TitleAndDesc from "@/components/TitleAndDesc/TitleAndDesc";
import {skillsAndExpertise} from "@/data/skillsAndExpertise";


export default function SkillsAndExpertise() {
    const { title, description } = skillsAndExpertise;

    return (
        <section id="skills-and-expertise" className={styles.skillsSection}>
            <TitleAndDesc title={title} description={description}/>


        </section>
    );
}