// explanation: Usunąłem nieużywane parametry w catch, usunąłem niepotrzebne eslint-disable oraz dodałem 'theme' jako zależność w efekcie logującym.
'use client';

import React, {createContext, useContext, useEffect, useState} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === 'undefined') return 'light';
        try {
            const stored = localStorage.getItem('theme') as Theme | null;
            return stored || 'light';
        } catch {
            // localStorage może rzucić w trybach prywatnych lub restrykcjach przeglądarki
            return 'light';
        }
    });

    useEffect(() => {
        const root = document.documentElement;

        if(theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        try {
            localStorage.setItem('theme', theme);
        } catch {
            // ignore
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme( prev => prev === 'light' ? 'dark' : 'light' );
    };

    // debug: upewnij się, że provider się renderuje
    useEffect(() => {
        console.log('[ThemeProvider] mounted, theme =', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if(!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}