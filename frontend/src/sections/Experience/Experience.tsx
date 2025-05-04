'use client';

import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <motion.section
            className="h-screen flex items-center justify-center bg-blue-500 text-white"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-5xl font-bold">Experience Section</h1>
        </motion.section>
    );
}
