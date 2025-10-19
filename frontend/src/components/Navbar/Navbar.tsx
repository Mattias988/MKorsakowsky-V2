'use client';

import styles from './Navbar.module.scss'

export default function Navbar() {

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={styles.nav}>
            <div>
                <button
                    onClick={() => {}}
                    className={styles.logoButton}
                >
                    <span>
                        Maciej Korsakowski
                        <span/>
                    </span>
                </button>

                {/* Desktop Navigation */}
                <div>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                            }}
                        >
                            {item.name}
                        </button>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        key={item.id}
                        onClick={() => {
                        }}
                    >
                        {item.name}
                    </button>
                </div>

                {/* Mobile Menu & Theme Toggle */}
                <div>
                    <button
                        onClick={}
                        aria-label=""
                    >

                    </button>

                    <button
                        onClick={}
                        aria-label=""
                    >

                    </button>
                </div>

            </div>
        </nav>
    )
}