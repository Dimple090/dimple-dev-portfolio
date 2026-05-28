import { Github, Linkedin, Mail, FileDown, Heart, Terminal, Sparkles, Code2, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    { href: "https://github.com/Dimple090", icon: Github, label: "GitHub", color: "hover:bg-[#2c221b] hover:text-[#f8f6f2] dark:hover:bg-[#f8f6f2] dark:hover:text-[#2c221b]" },
    { href: "https://linkedin.com/in/dimpleparihar", icon: Linkedin, label: "LinkedIn", color: "hover:bg-[#0077b5] hover:text-white" },
    { href: "mailto:dimpleparihar.dp@gmail.com", icon: Mail, label: "Email", color: "hover:bg-[#ea4335] hover:text-white" },
  ];

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="relative w-full border-t border-[#6c584b]/15 light:border-slate-300/60 dark:bg-[#2c221b] bg-[#fbfaf8] pt-16 pb-10 overflow-hidden font-sans">
      
      {/* Premium Backing Visual Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6c584b]/3 to-[#6c584b]/8 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#a98467]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#6c584b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Decorative Top Accent line */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#6c584b]/15 to-[#6c584b]/40" />
          <div className="w-8 h-8 rounded-full border border-[#6c584b]/20 flex items-center justify-center shrink-0 bg-white/5 shadow-sm text-[#a98467]">
            <Code2 size={13} className="animate-pulse" />
          </div>
          <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-[#6c584b]/15 to-[#6c584b]/40" />
        </div>

        {/* Beautiful 4-Column Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#6c584b]/10 light:border-slate-300/40">
          
          {/* Column 1: Brand Info & Tagline (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <button
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 cursor-pointer text-left"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#6c584b] to-[#a98467] flex items-center justify-center text-[#f8f6f2] font-heading font-bold text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
                DP
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-wide text-slate-100 light:text-[#2c221b] group-hover:text-[#a98467] transition-colors duration-300">
                Dimple<span className="text-[#a98467]">.</span>p
              </span>
            </button>
            
            <p className="text-slate-400 light:text-[#544338] text-sm leading-relaxed max-w-sm">
              Computer Science Engineer and Full Stack Web Developer. Specializing in responsive architectures, high-performance API structures, and luxury digital design layers.
            </p>
          </div>

          {/* Column 2: Elegant Sitemap Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-[#a98467] light:text-[#6c584b] flex items-center gap-1.5">
              <Sparkles size={11} /> Sitemap
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 w-full">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group text-xs text-slate-400 light:text-[#544338]/85 hover:text-[#a98467] light:hover:text-[#2c221b] font-medium tracking-wide flex items-center gap-1.5 transition-colors duration-200 cursor-pointer w-full justify-center md:justify-start"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#6c584b]/40 group-hover:bg-[#a98467] transition-colors duration-200" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The coding console log terminal widget (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-[#a98467] light:text-[#6c584b] flex items-center gap-1.5">
              <Terminal size={11} /> System Status
            </h4>
            <div className="glass-card p-4.5 rounded-2xl w-full font-mono text-[10px] sm:text-xs border border-white/6 light:border-slate-300/40 text-slate-400 select-none shadow-md bg-slate-950/70 light:bg-white text-left">
              <div className="flex items-center gap-1.5 pb-2 border-b border-white/5 light:border-slate-200/50 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <div className="w-2 h-2 rounded-full bg-green-500/70" />
                <span className="ml-1 text-[9px] uppercase tracking-wider text-slate-500 font-sans font-bold">
                  dimpleparihar.js
                </span>
              </div>
              <div className="space-y-1 sm:leading-relaxed">
                <p className="text-[#a98467]"><span className="text-purple-400">const</span> dev = DimpleParihar;</p>
                <p className="text-green-600/80 light:text-green-700 font-sans font-semibold text-[9px]">// Status: Open to Roles</p>
                <p className="text-slate-300 light:text-[#2c221b]"><span className="text-yellow-600/80">console</span>.<span className="text-blue-400">log</span>(dev.status);</p>
                <p className="text-slate-500 light:text-[#6c584b]/70">&gt; "fresher_ready"</p>
              </div>
            </div>
          </div>

          {/* Column 4: Connections & Resume Portal (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-end text-center md:text-right space-y-5">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-[#a98467] light:text-[#6c584b] flex items-center gap-1.5 justify-center md:justify-end">
              Connect Channels
            </h4>
            
            {/* Elegant Luxury Social circle buttons */}
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 rounded-full border border-[#6c584b]/15 light:border-slate-300/80 bg-white/4 light:bg-white text-slate-400 light:text-[#6c584b] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm cursor-pointer ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>

            {/* Glowing premium Resume button */}
            <a
              href="/resume.pdf"
              download="Dimple_Parihar_Resume.pdf"
              className="flex items-center gap-2 text-xs font-semibold text-slate-200 light:text-[#f8f6f2] bg-gradient-to-r from-[#6c584b] to-[#a98467] hover:from-[#544338] hover:to-[#8c6a51] px-5 py-3 rounded-full hover:scale-105 active:scale-95 shadow-md hover:shadow-[0_0_15px_rgba(169,132,103,0.3)] transition-all duration-300 cursor-pointer uppercase tracking-wider"
            >
              <FileDown size={14} />
              <span>Download Resume</span>
              <ArrowUpRight size={12} className="-ml-0.5 opacity-60" />
            </a>
          </div>

        </div>

        {/* Bottom copyright details row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-center text-xs text-slate-500 light:text-[#6c584b]/70 gap-4 font-sans font-medium">
          <p>© {currentYear} Dimple Parihar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={11} className="text-red-500 animate-pulse fill-red-500" /> & React in Jammu, J&K
          </p>
        </div>

      </div>
    </footer>
  );
}
