'use client';

import styles from '../Timeline/Timeline.module.scss';

interface TimelineItemProps {
    title?: string;
    date: string;
    description: string;
    onSeeMore?: () => void;
}

export default function TimelineItem({ date, title, description, onSeeMore }: TimelineItemProps) {

    return (
        <div className={styles.timelineItem}>
            <div className={styles.timelineItemDate}>{date}</div>
            <div className={styles.timelineItemMarkerContainer}>
                <div className={styles.timelineItemMarker}></div>
            </div>
            <div className={styles.timelineItemContainer}>
                {title && <h3 className={styles.timelineItemTitle}>{title}</h3>}
                <p className={styles.timelineItemDescription}>{description}</p>
                { onSeeMore && (
                    <button className={styles.timelineItemButton} onClick={onSeeMore}>See more!</button>
                )}
            </div>
        </div>
    )
};