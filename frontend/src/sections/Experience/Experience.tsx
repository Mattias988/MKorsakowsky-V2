'use client';

import { motion } from 'framer-motion';
import styles from './Experience.module.scss'
import Timeline, {TimelineEvent} from "@/components/Timeline/Timeline/Timeline";

const timelineData: TimelineEvent[] = [
    {
        id:1,
        date: "2024",
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. duis venenatis lectus.',
        onSeeMore : ()=>console.log('see'),
    },
    {
        id:2,
        date: "VII.2024",
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. duis venenatis lectus.',
        onSeeMore : ()=>console.log('see'),
    },
    {
        id:3,
        date: "2024",
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. duis venenatis lectus.',
        onSeeMore : ()=>console.log('see'),
    },
    {
        id:4,
        date: "2024",
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. duis venenatis lectus.',
        onSeeMore : ()=>console.log('see'),
    },
]

export default function Experience() {

    return (
        <section className={styles.experienceSection}>
            <div className={styles.textContent}>
                <motion.p
                    initial={{ x: -1300 }}
                    animate={{ y: 0, x: 0 }}
                    exit={{ y: -1000 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    EXPERIENCE
                </motion.p>
                <motion.h1
                    initial={{ x: -1300 }}
                    animate={{ y: 0, x: 0 }}
                    exit={{ y: -1000 }}
                    transition={{ duration:1,delay: 0.3 }}
                >
                    How Much Experience Do I Have?
                </motion.h1>
                <motion.p
                    className={styles.desc}
                    initial={{ x: -1300 }}
                    animate={{ y: 0, x: 0 }}
                    exit={{ y: -1000 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis  lectus non faucibus elementum. Quisque elementum, augue sit amet  imperdiet pharetra.                </motion.p>
            </div>
            <Timeline items={timelineData}/>
        </section>
    );
}
