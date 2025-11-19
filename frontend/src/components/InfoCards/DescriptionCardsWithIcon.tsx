import React from 'react';
import styles from './DescriptionCardsWithIcon.module.scss';

export default function DescriptionCardsWithIcon({title ="Clean Code", description="Writing maintainable, scalable, and efficient code following best practices.\n", iconSrc}: {title: string, description: string, iconSrc: string}) {

    return (
        <div className={styles.descriptionCardContainer}>
            <div className={styles.iconContainer}>
                <img className={styles.icon} src={iconSrc} />
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