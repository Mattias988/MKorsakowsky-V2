'use client';

import styles from './Navbar.module.scss'
import {useEffect, useState} from "react";
import {useTheme} from "@/components/ThemeProvider/ThemeProvider";
import {AnimatePresence, motion} from "framer-motion";

export default function Navbar() {

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
            const root = document.documentElement;
            if (window.scrollY > 50) {
                root.classList.add('scrolled');
            } else {
                root.classList.remove('scrolled');
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
        <nav className={styles.nav}>
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
                <div className={styles.navMenuContainerDesktop}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={styles.navMenuDesktop}
                        >
                            {item.name}
                        </button>
                    ))}

                    {/* Theme Toggle */}

                    <button
                        onClick={toggleTheme}
                        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                        className={styles.toggleTheme}
                    >
                        {/* możesz wstawić ikonę tu bazując na `theme` */}
                    </button>
                </div>

                {/* Mobile Menu & Theme Toggle */}
                <div className={styles.navMenuContainerMobile}>
                    <button
                        onClick={toggleTheme}
                        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
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
        </nav>
    )
}