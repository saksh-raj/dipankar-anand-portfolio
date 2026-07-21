import { useLenis } from "@/hooks/useLenis";
import { ToastProvider } from "@/components/ui/Toast";

import Background from "@/components/layout/Background";
import CursorGlow from "@/components/layout/CursorGlow";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import SEO from "@/components/seo/SEO";

export default function App() {
  useLenis();

  return (
    <>
      <SEO />

      <ToastProvider>
        {/* Skip link for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-black"
        >
          Skip to content
        </a>

        <Background />
        <CursorGlow />
        <ScrollProgress />
        <Navbar />

        <main id="main" className="relative">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </ToastProvider>
    </>
  );
}