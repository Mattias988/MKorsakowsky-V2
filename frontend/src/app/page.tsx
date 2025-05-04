'use client';

import {useRef, useState} from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from '@/sections/Hero/Hero';
import About from "@/sections/About/About";
import Experience from "@/sections/Experience/Experience";
import '@/styles/main.scss';
import styles from './page.module.scss';

const sections = [Hero, About, Experience];

export default function Page() {
  const [index, setIndex] = useState(0);
  const isScrolling = useRef(false);

  const handleScroll = (e: React.WheelEvent) => {
    if (isScrolling.current) return;

    if (e.deltaY > 0 && index < sections.length - 1) {
      setIndex(index + 1);
    } else if (e.deltaY < 0 && index > 0) {
      setIndex(index - 1);
    }

    isScrolling.current = true;

    setTimeout(() => isScrolling.current = false, 2000);
  };


  const CurrentSection = sections[index];

  return (
      <div onWheel={handleScroll} className={styles.pageView}>
        <AnimatePresence mode="wait">
          <CurrentSection key={index} />
        </AnimatePresence>
      </div>
  );
}
