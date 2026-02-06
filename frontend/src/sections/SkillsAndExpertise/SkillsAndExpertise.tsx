import styles from './SkillsAndExpertise.module.scss';
import TitleAndDesc from "@/components/TitleAndDesc/TitleAndDesc";
import { skillsAndExpertise, skillsAndExpertiseTitleAndDesc } from "@/data/skillsAndExpertise";
import SkillsAndExpertiseCards from "@/components/SkillsAndExpertiseCards/SkillsAndExpertiseCards";


export default function SkillsAndExpertise() {
    const { title, description } = skillsAndExpertiseTitleAndDesc;
    return (
        <section id="skills-and-expertise" className={styles.skillsSection}>
            <TitleAndDesc title={title} description={description} />

            <div className={styles.skillCardsContainer}>
                {skillsAndExpertise.map((item, index) => (
                    <SkillsAndExpertiseCards key={index} cardTitle={item.cardTitle} icon={item.icon} skills={item.skills} />
                ))}
            </div>
        </section>
    );
}