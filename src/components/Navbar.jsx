import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Home, User, Briefcase, Code, Award, Mail, FileDown } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Award },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code },
  { id: "resume", label: "Resume", icon: FileDown },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll depth for active link highlighters
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighters
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && scrollPosition >= sec.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 90,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 transition-all duration-500 rounded-2xl md:rounded-full ${
          scrolled
            ? "glass-panel shadow-md py-3 scale-98"
            : "bg-transparent py-4 border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6">
          {/* Logo / Brand Name */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#6c584b] to-[#a98467] flex items-center justify-center text-[#f8f6f2] font-heading font-extrabold text-lg shadow-[0_0_15px_rgba(169,132,103,0.25)] group-hover:shadow-[0_0_20px_rgba(108,88,75,0.4)] transition-all duration-300">
              DP
            </div>
            <span className="font-heading font-bold text-xl tracking-wide bg-gradient-to-r from-slate-100 to-slate-300 light:from-[#2c221b] light:to-[#6c584b] bg-clip-text text-transparent group-hover:from-[#a98467] group-hover:to-[#6c584b] transition-all duration-300">
              Dimple<span className="text-[#a98467] font-extrabold">.</span>p
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 dark:bg-white/5 light:bg-slate-200/50 border dark:border-white/5 light:border-slate-300/40 px-2 py-1 rounded-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full font-sans font-medium text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "text-[#a98467] dark:text-[#a98467] light:text-[#6c584b] font-bold"
                    : "text-slate-400 dark:text-slate-400 light:text-[#6c584b]/70 hover:text-slate-200 light:hover:text-[#2c221b]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#a98467] shadow-[0_0_10px_rgba(169,132,103,0.8)] animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full glass-panel text-slate-400 light:text-[#6c584b]/80 hover:text-[#a98467] light:hover:text-[#2c221b] cursor-pointer transition-all duration-300 hover:scale-110 shadow-sm"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Resume button for desktop */}
            <a
              href="/resume.pdf"
              download="Dimple_Parihar_Resume.pdf"
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#6c584b] to-[#a98467] hover:from-[#544338] hover:to-[#8c6a51] text-[#f8f6f2] font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(169,132,103,0.3)] shadow"
            >
              <FileDown size={13} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="p-2 md:hidden rounded-full glass-panel text-slate-400 light:text-[#6c584b]/80 hover:text-[#a98467] cursor-pointer transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#2c221b]/60 light:bg-[#f4f1eb]/70 backdrop-blur-md md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        {/* Drawer panel */}
        <div
          className={`fixed right-4 top-24 w-64 rounded-2xl glass-card p-6 flex flex-col gap-4 shadow-2xl transition-all duration-500 transform ${
            isOpen ? "translate-x-0 scale-100 opacity-100" : "translate-x-10 scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl text-left font-medium text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#a98467]/10 to-[#6c584b]/10 text-[#a98467] border-l-4 border-[#a98467] font-bold"
                      : "text-slate-400 dark:text-slate-400 light:text-[#6c584b]/80 hover:bg-white/5 hover:text-slate-200 light:hover:text-[#2c221b]"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <hr className="border-white/5 light:border-slate-200 my-1" />

          {/* Quick Contact & Download Resume */}
          <a
            href="/resume.pdf"
            download="Dimple_Parihar_Resume.pdf"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#6c584b] to-[#a98467] hover:from-[#544338] hover:to-[#8c6a51] text-[#f8f6f2] font-semibold text-xs uppercase tracking-wider py-3 rounded-xl transition-all duration-200 active:scale-95"
          >
            <FileDown size={14} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </>
  );
}
