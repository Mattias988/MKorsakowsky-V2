'use client'

import { motion } from 'framer-motion';
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

    const lineVariants = {
        initial: { scaleX: 0 },
        animate: {
            scaleX: 1,
            transition: { duration: 1, ease: 'easeOut', delay: 0.4 },
        },
        exit: {
            scaleX: 0,
            transition: { duration: 1, ease: 'easeIn' },
        },
    };

    return (
        <motion.div
            className={styles.timelineContainer}
            variants={lineVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div
                className={styles.timeline}
            >
                {items.map((item, index) => (
                    <TimelineItem
                        key={index}
                        index={index}
                        title={item.title}
                        date={item.date}
                        description={item.description}
                        onSeeMore={item.onSeeMore}
                    />
                ))}
            </div>
        </motion.div>
    )
}