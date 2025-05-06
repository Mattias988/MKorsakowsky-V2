'use client'

import styles from './Footer.module.scss'
import { motion } from 'framer-motion';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <motion.div
                initial={{ y: 500 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                06 05 22*
            </motion.div>
        </footer>
    )
}