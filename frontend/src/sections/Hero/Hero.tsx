'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.scss'

export default function Hero() {
    return (
        <section className={styles.heroSection}>
                <motion.h1
                    initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    exit={{ y: -1000 }}
                    transition={{ duration: 0.8 }}
                >
                    I am Maciek. I&#39;m Frontend Developer
                </motion.h1>
        </section>
    );
}
