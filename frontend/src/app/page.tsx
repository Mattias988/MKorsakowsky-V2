'use client';

import Hero from '@/sections/Hero/Hero';
import About from "@/sections/About/About";
import Experience from "@/sections/Experience/Experience";
import '@/styles/main.scss';
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';
import Navbar from '@/components/Navbar/Navbar';

export default function Page() {

  return (
      <ThemeProvider>
        <div id="home" className="min-h-screen">
          <Navbar />
          <Hero />
          {/*<About />*/}
          {/*<Skills />*/}
          {/*<Experience />*/}
          {/*<Projects />*/}
          {/*<Contact />*/}
          {/*<Footer />*/}
        </div>
      </ThemeProvider>
  );
}
