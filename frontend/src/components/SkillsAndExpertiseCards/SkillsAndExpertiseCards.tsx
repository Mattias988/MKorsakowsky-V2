import React from 'react';
import styles from './SkillsAndExpertiseCards.module.scss';
import {SkillCard} from "@/types/components";

export default function SkillsAndExpertiseCards({cardTitle, icon: Icon, skills}: SkillCard) {

    return (
        <div className={styles.skillCardsContainer}>
            <div className={styles.skillCardContainer}>
                <div className={styles.iconContainer}>
                    <Icon className={styles.icon} />
                </div>
                <div className={styles.titleContainer}>
                    <h4>{cardTitle}</h4>
                </div>
            </div>
            <div className={styles.skillsContainer}>
                {skills.map((skill, index)=> (
                    <div className={styles.skillContainer} key={index}>
                         <p>{skill}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}