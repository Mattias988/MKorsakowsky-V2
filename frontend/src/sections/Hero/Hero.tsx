'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.scss'
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components';
import {heroContent} from "@/data/hero";
import {socialLinks} from "@/data/socialLinks";

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const {
        status, titlePrefix, name, description, primaryButton, secondaryButton, scrollText
    } = heroContent;

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
                        <span className={styles.glowingAvailability}>{status}</span>
                    </motion.div>

                    <h1>
                        {titlePrefix}{' '}
                        <span className={styles.introduceMyself}>
                          <span className={styles.myFullName}>
                                {name}
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
                        {description(styles.myPosition)}
                    </p>

                    <div className={styles.heroSocialsContainer}>
                        <Button
                            onClick={() => scrollToSection('projects')}
                            size="lg"
                            className={styles.myWorkButton}
                        >
                            {primaryButton}
                        </Button>
                        <Button
                            onClick={() => scrollToSection('contact')}
                            variant="outline"
                            size="lg"
                            className={styles.getInTouchButton}                        >
                            {secondaryButton}
                        </Button>
                    </div>

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
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className={styles.scrollDownIndicatorContainer}
                    onClick={() => scrollToSection('about')}
                >
                    <div style={{ display:"flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <span className={styles.scrollText}>{scrollText}</span>
                        <ArrowDown className={styles.arrowDownIcon} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
