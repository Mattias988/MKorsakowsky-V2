import { motion } from 'framer-motion';
import styles from "./Button.module.scss"

export default function Button(){
    return (
        <motion.button
            className={styles.btn}
            initial={{ y: 1300 }}
            animate={{ y: 0 }}
            exit={{ y: -1000 }}
            transition={{ duration: 0.8, delay: 0.24 }}
        >
            See more!
        </motion.button>
    )
}