import { motion } from 'framer-motion';
import styles from "./Button.module.scss"

export default function Button(){
    return (
        <motion.button
            className={styles.btn}
            initial={{ x: 1300 }}
            animate={{ x: 0 }}
            exit={{ x: 1300 }}
            transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}>
            See more!
        </motion.button>
    )
}