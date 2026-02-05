import styles from './Footer.module.scss';
import { socialLinks } from "@/data/socialLinks";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.glow}></div>

            <div className={styles.footerContent}>
                <div className={styles.leftContentFooter}>
                    <p className={styles.fullName}>Maciej Korsakowski</p>
                    <h2 className={styles.position}>Full Stack Developer</h2>
                    <p>Building the future, one line at a time</p>
                </div>

                <div className={styles.rightContentFooter}>
                    <div className={styles.socialIcons}>
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.id}
                                whileHover={{ scale: 1.1, y: -2 }}
                                transition={{ duration: 0.01 }}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.iconContainer}
                                aria-label={social.name}
                            >
                                <social.icon className={styles.icon} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}