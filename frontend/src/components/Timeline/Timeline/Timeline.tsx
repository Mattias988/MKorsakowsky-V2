'use client'

import styles from "./Timeline.module.scss";
import TimelineItem from "@/components/Timeline/TimelineItem/TimelineItem";

export interface TimelineEvent {
    id: string | number;
    date: string;
    title?: string;
    description: string;
    onSeeMore?: () => void;
}

interface TimelineProps {
    items: TimelineEvent[];
}

export default function Timeline({items}: TimelineProps) {
    if(!items || items.length === 0) {
        return null;
    }

    return (
        <div className={styles.timelineContainer}>
            <div className={styles.timeline}>
                {items.map((item, index) => (
                    <TimelineItem
                        key={index}
                        title={item.title}
                        date={item.date}
                        description={item.description}
                        onSeeMore={item.onSeeMore}
                    />
                ))}
            </div>
        </div>
    )
}