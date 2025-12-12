// components/Timeline/Timeline.jsx
import React from 'react';
import styles from './Timeline.module.scss';
import { Calendar } from 'lucide-react';
import {Experiences} from "@/types";

interface TimelineProps {
    data: Experiences;
}

export default function Timeline ({ data }: TimelineProps) {
    if (!data) return null;

    return (
        <div className={styles.container}>
            <div className={styles.timeline}>
                {data.map((item) => (
                    <div key={item.id} className={styles.item}>
                        {/* Kropka */}
                        <span className={styles.dot}></span>

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
        </div>
    );
};

