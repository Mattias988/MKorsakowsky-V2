'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.scss'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/Button/button';

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.overlay} />

            <div className={styles.animatedBulbs}>
                <div className={styles.firstBulb}></div>
                <div className={styles.secondBuld} style={{ animationDelay: '1s' }}></div>
                <div className={styles.thirdBulb} style={{ animationDelay: '2s' }}></div>
            </div>

            <div className={styles.contentHero}>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                >
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                        className={styles.descAndButtonsSection}
                    >
                        <Sparkles className={styles.sparkles} />
                        <span className={styles.glowingAvailability}>Available for freelance projects</span>
                    </motion.div>

                    <h1>
                        Hi, I'm{' '}
                        <span className={styles.introduceMyself}>
                          <span className={styles.myFullName}>
                            Maciej Korsakowski
                          </span>
                          <motion.span
                              className={styles.underline}
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 0.8, delay: 0.5 }}
                          ></motion.span>
                        </span>
                    </h1>

                    <p className={styles.heroDescription}>
                        A passionate <span className={styles.myPosition}>Full Stack Developer</span> crafting beautiful, functional, and user-centric digital experiences.
                        Specialized in React, Node.js, and modern web technologies.
                    </p>

                    <div className={styles.heroSocialsContainer}>
                        <Button
                            onClick={() => scrollToSection('projects')}
                            size="lg"
                            className={styles.myWorkButton}
                        >
                            View My Work
                        </Button>
                        <Button
                            onClick={() => scrollToSection('contact')}
                            variant="outline"
                            size="lg"
                            className={styles.getInTouchButton}                        >
                            Get In Touch
                        </Button>
                    </div>

                    <div className={styles.socialIcons}>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconContainer}
                        >
                            <Github className={styles.icon} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconContainer}
                        >
                            <Linkedin className={styles.icon} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            href="mailto:alex@example.com"
                            className={styles.iconContainer}
                        >
                            <Mail className={styles.icon} />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className={styles.scrollDownIndicatorContainer}
                    onClick={() => scrollToSection('about')}
                >
                    <div style={{ display:"flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <span className={styles.scrollText}>Scroll to explore</span>
                        <ArrowDown className={styles.arrowDownIcon} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
