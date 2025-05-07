import { motion } from 'framer-motion';
import styles from "./Button.module.scss"

export default function Button(){
    return (
        <motion.div
            className={styles.btn}
            initial={{ y: 1300 }}
            animate={{ y: 0 }}
            exit={{ y: -1000 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            See more!
        </motion.div>
    )
}