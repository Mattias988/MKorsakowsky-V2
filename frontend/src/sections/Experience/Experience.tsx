'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.scss'; // Tu trzymaj style tylko dla nagłówka sekcji
import { experienceData } from '@/data/timeLineData';
import Timeline from "@/components/Timeline/Timeline/Timeline";

export default function Experience() {
    return (
        <section className={styles.experienceSection} id="experience">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2>Professional Experience</h2>
                    <p>Moja ścieżka rozwoju i kluczowe projekty.</p>
                </motion.div>

                {/* Przekazujemy dane bezpośrednio do komponentu */}
                <Timeline data={experienceData} />
            </div>
        </section>
    );
}