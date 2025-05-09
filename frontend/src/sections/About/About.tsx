'use client';

import { motion } from 'framer-motion';
import LaptopImg from '@/assets/laptop-image.png'
import Button from "@/components/Button/button";
import styles from './About.module.scss'

export default function About() {

    return (
        <section className={styles.aboutSection}>
            <motion.img
                src={LaptopImg.src}
                alt="My Laptop"
                initial={{ x: -1300 }}
                animate={{ x: 0 }}
                exit={{ x: -1300}}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
            />
            <div className={styles.textContent}>
                <motion.p
                    initial={{ x: 1300 }}
                    animate={{ x: 0 }}
                    exit={{ x: 1300}}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                >
                    About me
                </motion.p>
                <motion.h1
                    initial={{ x: 1300 }}
                    animate={{ x: 0 }}
                    exit={{ x: 1300}}
                    transition={{ duration:1, ease: 'easeOut', delay: 0.6 }}
                >
                    Who am I?
                </motion.h1>
                <motion.p
                    initial={{ x: 1300 }}
                    animate={{ x: 0 }}
                    exit={{ x: 1300}}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis  lectus non faucibus elementum. Quisque elementum, augue sit amet  imperdiet pharetra, risus diam tristique risus, sit amet pharetra lorem  massa vitae felis. Etiam malesuada, nisi vel pharetra bibendum, magna  magna laoreet erat, eu posuere purus dui sed sapien.
                </motion.p>
                <Button />
            </div>
        </section>
    );
}
