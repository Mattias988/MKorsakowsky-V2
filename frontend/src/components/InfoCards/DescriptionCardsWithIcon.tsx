import React from 'react';
import styles from './DescriptionCardsWithIcon.module.scss';
import {Card} from "@/types/components";

export default function DescriptionCardsWithIcon({title, description, icon: Icon}: Card) {

    return (
        <div className={styles.descriptionCardContainer}>
            <div className={styles.iconContainer}>
                <Icon className={styles.icon} />
            </div>
            <div className={styles.titleContainer}>
                <h4>{title}</h4>
            </div>
            <div className={styles.descriptionContainer}>
                <p>{description}</p>
            </div>
        </div>
    )
}