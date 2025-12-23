'use client';

import styles from './Navbar.module.scss'
import {useEffect, useState} from "react";
import {useTheme} from "@/components/ThemeProvider/ThemeProvider";
import {AnimatePresence, motion} from "framer-motion";
import clsx from "clsx";

export default function Navbar() {
    const [isScrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    }

    return (
        <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
            <div className={styles.navContainer}>
                <button
                    onClick={() => scrollToSection('home')}
                    className={styles.logoButton}
                >
                    <span>
                        Maciej Korsakowski
                        <span/>
                    </span>
                </button>

                {/* Desktop Navigation */}
                <nav className={styles.navMenuContainerDesktop}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={styles.navMenuDesktopButton}
                        >
                            {item.name}
                        </button>
                    ))}

                    <button
                        onClick={toggleTheme}
                        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                        className={styles.toggleTheme}
                    >
                    </button>
                </nav>

                <div className={styles.navMenuContainerMobile}>
                    <button
                        onClick={toggleTheme}
                        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                        className={styles.toggleThemeMobile}
                    >

                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        className={styles.navMenuMobileButton}
                    >

                    </button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className={styles.mobileMenu}
                            >
                            <div>
                                {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={styles.mobileNavigationButton}
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}