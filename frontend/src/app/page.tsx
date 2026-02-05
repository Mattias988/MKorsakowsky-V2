'use client';

import Hero from '@/sections/Hero/Hero';
import About from "@/sections/About/About";
import Navbar from '@/components/Navbar/Navbar';
import styles from '@/app/page.module.scss'
import SkillsAndExpertise from "@/sections/SkillsAndExpertise/SkillsAndExpertise";
import Experience from "@/sections/Experience/Experience";
import FeaturedProjects from "@/sections/FeaturedProjects/FeaturedProjects";
import Contact from '@/sections/Contact/Contact';
import Footer from '@/sections/Footer/Footer';
import { Reveal } from '@/components/Reveal/Reveal';

export default function Page() {
  return (
    <>
      <Navbar />
      <div id="home" className={styles.pageView}>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <SkillsAndExpertise />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <FeaturedProjects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
        <Footer />
      </div>
    </>
  );
}
