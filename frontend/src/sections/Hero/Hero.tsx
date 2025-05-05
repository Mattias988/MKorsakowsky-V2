'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.scss'
import Typewriter from 'typewriter-effect';

export default function Hero() {
    return (
        <section className={styles.heroSection}>
            <motion.h1
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                exit={{ y: -1000 }}
                transition={{ duration: 0.8 }}
            >
                Hello, I’m Maciek.
            </motion.h1>
            <Typewriter
                options={{
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("I'm Frontend Developer")
                        .pauseFor(2500)
                        .deleteAll()
                        .start();
                }}
            />
        </section>
    );
}
