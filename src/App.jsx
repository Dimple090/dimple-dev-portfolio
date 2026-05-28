import { useState, useEffect } from "react";
import ParticlesBg from "./components/ParticlesBg";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference, default to dark
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return true; // Dark mode by default
  });

  // Dynamically apply classes on state switch
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.remove("light");
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen relative text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300 overflow-x-hidden">
      
      {/* Visual Canvas Particle System */}
      <ParticlesBg />

      {/* Trailing Pointer Glow */}
      <CustomCursor />

      {/* Sticky Top Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Container Layout */}
      <main className="relative max-w-7xl mx-auto z-10">
        
        {/* Hero Landing */}
        <Hero />

        {/* Divider details */}
        <div className="w-[85%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/5 light:via-slate-200 to-transparent" />

        {/* Biography */}
        <About />

        <div className="w-[85%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/5 light:via-slate-200 to-transparent" />

        {/* Skillsets Grid */}
        <Skills />

        <div className="w-[85%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/5 light:via-slate-200 to-transparent" />

        {/* Internship Timeline */}
        <Experience />

        <div className="w-[85%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/5 light:via-slate-200 to-transparent" />

        {/* Projects Specification Cards */}
        <Projects />

        <div className="w-[85%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/5 light:via-slate-200 to-transparent" />

        {/* PDF Download Portal */}
        <Resume />

        <div className="w-[85%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/5 light:via-slate-200 to-transparent" />

        {/* Validator Form & Locations */}
        <Contact />

      </main>

      {/* Terminal Mock console Footer */}
      <Footer />

    </div>
  );
}
