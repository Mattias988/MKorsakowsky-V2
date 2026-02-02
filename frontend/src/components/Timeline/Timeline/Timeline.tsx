import React, {useRef} from 'react';
import styles from './Timeline.module.scss';
import { Calendar } from 'lucide-react';
import {Experiences} from "@/types";
import {motion, useScroll, useSpring} from "framer-motion";

interface TimelineProps {
    data: Experiences;
}

export default function Timeline ({ data }: TimelineProps) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const hasData = data && data.length > 0;

    return (
        <div className={styles.container} ref={ref}>
            {hasData && (
                <div className={styles.timeline}>
                    <motion.div
                        className={styles.progressLine}
                        style={{ scaleY }}
                    />

                    {data.map((item) => (
                        <div key={item.id} className={styles.item}>
                            {/* Kropka */}
                            <motion.span
                                className={styles.dot}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }} // Animuj tylko raz
                                transition={{ duration: 0.4, delay: 0.1 }}
                            ></motion.span>

                            {/* Karta */}
                            <div className={styles.content}>
                                <div className={styles.cardHeader}>
                                    <div
                                        className={styles.iconBox}
                                        style={{ backgroundColor: item.color || '#6366f1' }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div className={styles.titleBox}>
                                        <h3>{item.title}</h3>
                                        <span className={styles.company}>{item.company}</span>
                                        <div className={styles.date}>
                                            <Calendar size={14} />
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className={styles.description}>{item.description}</p>

                                {item.achievements && (
                                    <div className={styles.achievements}>
                                        <h4>Key Achievements:</h4>
                                        <ul>
                                            {item.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

