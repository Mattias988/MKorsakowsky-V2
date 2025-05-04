import { motion } from 'framer-motion';
import styles from "./Button.module.scss"

export default function Button(){
    return (
        <motion.div
            className={styles.btn}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: -1000 }}
            transition={{ duration: 1 }}
        >
            See more!
        </motion.div>
    )
}