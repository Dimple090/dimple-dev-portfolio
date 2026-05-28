import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, FileDown, Terminal, Cpu } from "lucide-react";

const roles = ["React Developer", "Backend Developer", "Problem Solver"];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typing effect implementation
  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 90,
        behavior: "smooth",
      });
    }
  };

  const socials = [
    { href: "https://github.com/Dimple090", icon: Github, color: "hover:text-[#a98467] border-[#6c584b]/20 text-[#6c584b] light:text-[#6c584b]" },
    { href: "https://linkedin.com/in/dimpleparihar", icon: Linkedin, color: "hover:text-[#a98467] border-[#6c584b]/20 text-[#6c584b] light:text-[#6c584b]" },
    { href: "mailto:dimpleparihar.dp@gmail.com", icon: Mail, color: "hover:text-[#a98467] border-[#6c584b]/20 text-[#6c584b] light:text-[#6c584b]" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden grid-bg"
    >
      {/* Organic Warm Aurora Glows */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] bg-[#6c584b]/8 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-[#a98467]/8 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "2.5s" }} />

      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Hero Left Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Accent Label */}
          <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full glass-panel border border-[#6c584b]/15 text-[10px] tracking-widest font-semibold text-[#a98467] light:text-[#6c584b] uppercase shadow-sm font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a98467] animate-ping" />
            Full Stack Engineering Student
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl font-display font-light tracking-tight text-slate-100 light:text-[#2c221b] leading-tight">
              Hi, I'm <br />
              <span className="serif-italic bg-gradient-to-r from-[#a98467] via-[#8c6a51] to-[#6c584b] bg-clip-text text-transparent drop-shadow-sm font-medium">
                Dimple Parihar
              </span>
            </h1>
            
            {/* Dynamic typing role */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start pt-1">
              <span className="text-lg sm:text-xl font-heading font-medium tracking-wide text-slate-300 light:text-[#6c584b] bg-white/3 light:bg-slate-200/50 border border-white/5 light:border-slate-300/40 px-4 py-1.5 rounded-xl shadow-sm">
                &gt; <span className="typing-cursor text-[#a98467] serif-italic">{currentText}</span>
              </span>
            </div>
          </div>

          {/* Short tagline */}
          <p className="text-slate-400 light:text-[#6c584b]/80 font-sans text-sm sm:text-base max-w-lg leading-relaxed">
            “Passionate about building scalable web applications and creating modern digital experiences.”
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 w-full">
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center gap-2 bg-gradient-to-r from-[#6c584b] to-[#a98467] hover:from-[#544338] hover:to-[#8c6a51] text-[#f8f6f2] font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-[0_0_15px_rgba(169,132,103,0.15)] hover:shadow-[0_0_20px_rgba(108,88,75,0.3)] hover:scale-103 cursor-pointer transition-all duration-300 group"
            >
              <span>View Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3.5 bg-white/3 dark:bg-white/3 light:bg-slate-200/50 hover:bg-white/8 light:hover:bg-slate-300 border border-white/8 light:border-slate-300 rounded-full font-semibold text-xs uppercase tracking-wider text-slate-200 light:text-[#2c221b] hover:scale-103 cursor-pointer transition-all duration-300 shadow-sm"
            >
              Contact Me
            </button>

            <a
              href="/resume.pdf"
              download="Dimple_Parihar_Resume.pdf"
              className="flex items-center gap-2 text-slate-300 light:text-[#6c584b] hover:text-[#a98467] font-semibold text-xs uppercase tracking-wider border border-white/10 light:border-slate-300 px-5 py-3.5 rounded-full hover:scale-103 transition-all duration-300 shadow-sm"
            >
              <FileDown size={14} />
              <span>Resume</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 pt-6">
            {socials.map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-full border bg-white/3 light:bg-slate-100 shadow-sm transition-all duration-300 cursor-pointer ${soc.color} hover:scale-110 hover:shadow-lg`}
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

        </motion.div>

        {/* Hero Right Graphic Section */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            
            {/* Glowing organic frame background */}
            <div className="absolute inset-2 bg-gradient-to-tr from-[#6c584b] via-[#a98467] to-[#eae6df] rounded-full blur-[8px] opacity-75 animate-pulse-slow shadow-[0_0_50px_rgba(168,132,103,0.3)]" />

            {/* Glowing outer rotating lines */}
            <div className="absolute -inset-2 border-2 border-dashed border-[#6c584b]/20 rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute -inset-4 border border-dashed border-[#a98467]/15 rounded-full animate-[spin_50s_linear_infinite_reverse]" />

            {/* Main picture circle container */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-slate-900 dark:border-[#2c221b] light:border-white shadow-inner flex items-center justify-center bg-[#2c221b] light:bg-slate-100">
              <img
                src="/profile.jpeg"
                alt="Dimple Parihar Portrait"
                className="w-full h-full object-cover object-top scale-102 hover:scale-108 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=776&auto=format&fit=crop";
                }}
              />
            </div>

            {/* Floating technology icons overlay in coffee theme */}
            <motion.div
              className="absolute -top-3 left-4 p-3 rounded-2xl glass-card text-[#a98467] w-12 h-12 flex items-center justify-center shadow-lg border border-[#a98467]/15"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Cpu size={22} className="animate-pulse" />
            </motion.div>

            <motion.div
              className="absolute bottom-6 -left-6 p-3 rounded-2xl glass-card text-[#6c584b] w-12 h-12 flex items-center justify-center shadow-lg border border-[#6c584b]/15"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Terminal size={22} />
            </motion.div>

            <motion.div
              className="absolute right-0 top-1/4 p-2.5 rounded-xl glass-card text-[#a98467] text-[10px] font-heading serif-italic font-bold flex items-center justify-center shadow-md border border-[#a98467]/15"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              &lt;React /&gt;
            </motion.div>

            <motion.div
              className="absolute bottom-8 right-8 p-3 rounded-2xl glass-card text-[#6c584b] w-12 h-12 flex items-center justify-center shadow-lg border border-[#6c584b]/15"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="font-heading serif-italic font-bold text-sm">C++</span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
