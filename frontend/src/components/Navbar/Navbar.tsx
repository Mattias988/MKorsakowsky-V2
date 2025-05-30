'use client';

import styles from './Navbar.module.scss'
import { motion } from 'framer-motion';
import Link from "next/link";

export default function Navbar() {

    return (
        <nav className={styles.nav}>
            <motion.div
                className={styles.greetings}
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.welcome}>Good morning</div>
                <div className={styles.date}>12 dec</div>
            </motion.div>
            <motion.div
                className={styles.menu}
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Link className={styles.Link} href={"/"}>Home</Link>
                <Link className={styles.Link} href={"#"}>Experience</Link>
                <Link className={styles.Link} href={"#"}>About</Link>
            </motion.div>
        </nav>
    )
}