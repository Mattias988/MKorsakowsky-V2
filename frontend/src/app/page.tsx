'use client';

import Hero from '@/sections/Hero/Hero';
import About from "@/sections/About/About";
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';
import Navbar from '@/components/Navbar/Navbar';
import styles from '@/app/page.module.scss'
import SkillsAndExpertise from "@/sections/SkillsAndExpertise/SkillsAndExpertise";
import Experience from "@/sections/Experience/Experience";
import FeaturedProjects from "@/sections/FeaturedProjects/FeaturedProjects";

export default function Page() {

  return (
      <ThemeProvider>
        <div id="home" className={styles.pageView}>
          <Navbar />
          <Hero />
          <About />
          <SkillsAndExpertise />
          <Experience />
          <FeaturedProjects />
          {/*<Contact />*/}
          {/*<Footer />*/}
        </div>
      </ThemeProvider>
  );
}
