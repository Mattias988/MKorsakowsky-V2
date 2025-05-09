'use client';

import styles from '../TimelineItem/TimelineItem.module.scss';
import { motion } from 'framer-motion';

interface TimelineItemProps {
    index: number;
    title?: string;
    date: string;
    description: string;
    onSeeMore?: () => void;
}

export default function TimelineItem({ date, title, description, onSeeMore, index }: TimelineItemProps) {

    const itemVariants = {
        hidden: { x: '-100vw', opacity: 0 },
        visible: (index: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: 1 + index * 0.3,
                duration: 1,
                ease: 'easeOut',
            },
        }),
        exit: {
            x: '-100vw',
            opacity: 0,
            transition: { duration: 2 },
        },
    };

    return (
        <motion.div
            className={styles.timelineItem}
            variants={itemVariants}
            custom={index}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div
                className={styles.timelineItemDate}
                initial={{ x: 1300 }}
                animate={{ x: 0 }}
                exit={{ x: -1000 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                {date}
            </motion.div>
            <motion.div
                className={styles.timelineItemMarkerContainer}
                initial={{ x: 1300 }}
                animate={{ x: 0 }}
                exit={{ x: -1000 }}
                transition={{ duration: 1, delay: 0.7 }}
            >
                <div className={styles.timelineItemMarker}></div>
            </motion.div>
            <div className={styles.timelineItemContainer}>
                {title && <h3 className={styles.timelineItemTitle}>{title}</h3>}
                <motion.p
                    className={styles.timelineItemDescription}
                    initial={{ x: 1300 }}
                    animate={{ x: 0 }}
                    exit={{ x: -1000 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >{description}</motion.p>
                { onSeeMore && (
                    <motion.button
                        className={styles.timelineItemButton}
                        onClick={onSeeMore}
                        initial={{ x: 1300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -1000 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        See more!
                    </motion.button>
                )}
            </div>
        </motion.div>
    )
};