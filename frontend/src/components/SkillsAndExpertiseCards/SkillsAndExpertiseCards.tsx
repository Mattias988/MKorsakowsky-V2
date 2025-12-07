import React from 'react';
import styles from './SkillsAndExpertiseCards.module.scss';
import { SkillsAndExpertise} from "@/types/components";

export default function SkillsAndExpertiseCards({title, icon: Icon, skills}: SkillsAndExpertise) {

    return (
        <div className={styles.skillCardContainer}>
            <div className={styles.iconContainer}>
                <Icon className={styles.icon} />
            </div>
            <div className={styles.titleContainer}>
                <h4>{title}</h4>
            </div>
            <div className={styles.skillsContainer}>
                <p>{skills}</p>
            </div>
        </div>
    )
}