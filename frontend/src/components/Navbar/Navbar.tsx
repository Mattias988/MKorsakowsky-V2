'use client';

import styles from './Navbar.module.scss'
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider/ThemeProvider";
import clsx from "clsx";
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, toggleTheme } = useTheme();

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills-and-expertise' },
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
                        <span />
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
                        aria-label={mounted && theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                        className={styles.toggleTheme}
                    >
                        {mounted && theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </nav>

                <div className={styles.navMenuContainerMobile}>
                    <button
                        onClick={toggleTheme}
                        aria-label={mounted && theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                        className={styles.toggleThemeMobile}
                    >
                        {mounted && theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <button
                        onClick={() => {
                            console.log("Mobile menu clicked, new state:", !isMobileMenuOpen);
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                        }}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        className={styles.navMenuMobileButton}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className={styles.mobileMenu}>
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
                    </div>
                )}
            </div>
        </header>
    )
}