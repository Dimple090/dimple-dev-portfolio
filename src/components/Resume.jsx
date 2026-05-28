import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, FileDown, Award, Calendar, GraduationCap, MapPin, Briefcase, Eye, X } from "lucide-react";

export default function Resume() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const sections = [
    {
      title: "Education Profile",
      icon: GraduationCap,
      color: "text-[#a98467]",
      content: (
        <div className="space-y-3">
          <div className="border-l-2 border-[#a98467]/30 pl-4 py-0.5 text-left">
            <h4 className="font-heading font-extrabold text-sm text-slate-200 light:text-[#2c221b]">B.E. Computer Science Engineering</h4>
            <p className="text-xs text-slate-400 light:text-[#6c584b]/75 mt-0.5">CSE Engineering Student</p>
            <p className="text-[10px] font-mono text-slate-500 light:text-[#6c584b]/60 mt-1 flex items-center gap-1">
              <Calendar size={10} /> 2022 - 2026
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Technical Internships",
      icon: Briefcase,
      color: "text-[#a98467]",
      content: (
        <div className="space-y-3 text-left">
          <div className="border-l-2 border-[#a98467]/30 pl-4 py-0.5">
            <h4 className="font-heading font-extrabold text-sm text-slate-200 light:text-[#2c221b]">Web Development Intern</h4>
            <p className="text-xs text-slate-400 light:text-[#6c584b]/75 mt-0.5">PrernaGati Technology</p>
          </div>
          <div className="border-l-2 border-[#a98467]/30 pl-4 py-0.5">
            <h4 className="font-heading font-extrabold text-sm text-slate-200 light:text-[#2c221b]">C/C++ Developer Intern</h4>
            <p className="text-xs text-slate-400 light:text-[#6c584b]/75 mt-0.5">Programming Pathshala</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="resume" className="relative py-24 bg-transparent overflow-hidden">
      
      {/* Visual background glows */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#a98467]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#6c584b]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section title */}
        <div className="text-center space-y-2 mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#a98467] font-mono text-xs font-semibold uppercase tracking-wider">
            <FileText size={13} /> / Document Portal
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-slate-100 light:text-[#2c221b] tracking-tight">
            Curriculum <span className="serif-italic font-normal text-[#a98467]">Vitae</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#6c584b] to-[#a98467] rounded mx-auto" />
        </div>

        {/* Outer Flex/Grid wrap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mock Document Visualizer (Left) */}
          <motion.div
            className="lg:col-span-7 z-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full rounded-3xl glass-card border border-white/6 shadow-2xl overflow-hidden p-6 sm:p-8 relative select-none">
              
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#a98467]/10 to-[#6c584b]/5 blur-[20px] rounded-bl-full pointer-events-none" />

              {/* Document Header mockup */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 light:border-slate-300/40 pb-6 mb-6 gap-4 text-left">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-slate-100 light:text-[#2c221b]">
                    Dimple Parihar
                  </h3>
                  <p className="text-xs font-semibold text-[#a98467] font-mono tracking-widest mt-1 uppercase">
                    Full Stack Web Developer
                  </p>
                </div>
                <div className="text-[10px] text-slate-400 light:text-[#6c584b]/80 space-y-1 font-sans">
                  <p className="flex items-center gap-1.5"><MapPin size={10} className="text-[#a98467]" /> Jammu, J&K</p>
                  <p className="flex items-center gap-1.5">✉ dimpleparihar.dp@gmail.com</p>
                </div>
              </div>

              {/* Mock Resume Content Grids */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {sections.map((sec, idx) => {
                  const Icon = sec.icon;
                  return (
                    <div key={idx} className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-white/5 light:border-slate-300/40 pb-1.5 text-left">
                        <Icon size={14} className={sec.color} />
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-300 light:text-[#2c221b]">
                          {sec.title}
                        </h4>
                      </div>
                      {sec.content}
                    </div>
                  );
                })}
              </div>

              {/* Mock Skills grid summary */}
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-2 border-b border-white/5 light:border-slate-300/40 pb-1.5">
                  <Award size={14} className="text-[#a98467]" />
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-300 light:text-[#2c221b]">
                    Core Competence Summary
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["ReactJS", "Node.js", "Express.js", "MongoDB", "MySQL", "C++", "Tailwind CSS", "REST APIs", "Git"].map((sk, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-mono text-slate-400 light:text-[#6c584b]/80 bg-white/4 light:bg-slate-200/50 border border-white/5 px-2.5 py-1 rounded"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Description & Action Trigger (Right) */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading font-extrabold text-2xl text-slate-100 light:text-[#2c221b] tracking-tight">
              Looking for a Complete Technical Profile?
            </h3>
            
            <p className="text-slate-400 light:text-[#6c584b]/80 font-sans text-sm sm:text-base leading-relaxed">
              My structured resume outlines my academic performance, technical internship highlights, complex algorithmic projects details, and complete developer tools proficiencies.
            </p>

            <p className="text-slate-400 light:text-[#6c584b]/80 font-sans text-sm sm:text-base leading-relaxed">
              Download the official PDF resume directly using the button below to review offline or share with hiring teams.
            </p>

            {/* Action Buttons Row */}
            <div className="pt-4 w-full flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="flex items-center gap-2.5 bg-gradient-to-r from-[#6c584b] via-[#a98467] to-[#eae6df] hover:from-[#544338] hover:to-[#8c6a51] text-[#f8f6f2] font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-[0_0_20px_rgba(169,132,103,0.15)] hover:shadow-[0_0_30px_rgba(169,132,103,0.35)] hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <Eye size={16} className="group-hover:scale-110 transition-transform" />
                <span>View Resume</span>
              </button>

              <a
                href="/resume.pdf"
                download="Dimple_Parihar_Resume.pdf"
                className="flex items-center gap-2.5 bg-white/3 hover:bg-white/8 light:bg-slate-200/50 light:hover:bg-slate-300 border border-white/8 light:border-slate-300 rounded-full font-semibold text-xs uppercase tracking-wider text-slate-200 light:text-[#2c221b] px-6 py-3.5 hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <FileDown size={16} />
                <span>Download PDF</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Interactive Full-Screen PDF Previewer Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#2c221b]/80 backdrop-blur-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              className="w-full max-w-5xl h-[85vh] rounded-3xl glass-card border border-white/8 shadow-2xl overflow-hidden flex flex-col relative"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-6 py-4 bg-slate-950/60 light:bg-slate-50 border-b border-white/5 light:border-slate-200/60 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="font-heading font-extrabold text-slate-200 light:text-[#2c221b] tracking-tight ml-2">
                    Curriculum Vitae Preview
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <a
                    href="/resume.pdf"
                    download="Dimple_Parihar_Resume.pdf"
                    className="p-2.5 rounded-full glass-panel text-slate-400 hover:text-[#a98467] transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center"
                    title="Download PDF"
                  >
                    <FileDown size={15} />
                  </a>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-2.5 rounded-full glass-panel text-slate-400 hover:text-red-500 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center"
                    aria-label="Close modal"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer Frame */}
              <div className="flex-grow w-full bg-white relative">
                <iframe
                  src="/resume.pdf#toolbar=0"
                  className="w-full h-full border-none"
                  title="Dimple Parihar Resume Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
