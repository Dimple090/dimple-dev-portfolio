import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "PrernaGati Technology",
      role: "Web Development Intern",
      period: "Winter / Spring Internship",
      type: "Internship",
      details: [
        "Developed responsive and highly user-friendly websites incorporating modern UI layout rules.",
        "Built modular, highly reusable frontend components in React, improving site scalability.",
        "Improved digital accessibility and boosted overall website performance metrics.",
        "Collaborated on responsive structures ensuring seamless compatibility across mobile, tablet, and desktop views."
      ],
      color: "from-[#6c584b] to-[#a98467]"
    },
    {
      company: "Programming Pathshala",
      role: "C/C++ Developer Intern",
      period: "Summer Internship",
      type: "Internship",
      details: [
        "Optimized complex data structures and algorithmic complexity for high-performance loops.",
        "Implemented clean systems focusing on recursion, sorting, searching, and dynamic programming paradigms.",
        "Focused on memory optimization, reducing memory overhead and improving binary safety.",
        "Authored highly readable code following strict industrial naming conventions."
      ],
      color: "from-[#6c584b] to-[#a98467]"
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-transparent overflow-hidden">
      
      {/* Decorative background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#a98467]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#6c584b]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center space-y-2 mb-20">
          <div className="inline-flex items-center gap-1.5 text-[#a98467] font-mono text-xs font-semibold uppercase tracking-wider">
            <Briefcase size={13} /> / Professional History
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-slate-100 light:text-[#2c221b] tracking-tight">
            My Internship <span className="serif-italic font-normal text-[#a98467]">Timeline</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#6c584b] to-[#a98467] rounded mx-auto" />
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l border-white/8 light:border-slate-300 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
          
          {/* Animated scrolling vertical line drawer */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#6c584b] via-[#a98467] to-[#d6ccc2] origin-top shadow-[0_0_15px_rgba(169,132,103,0.15)]" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Timeline marker node dot */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#2c221b] dark:bg-[#2c221b] light:bg-[#f4f1eb] border-2 border-[#a98467] flex items-center justify-center shadow-lg group-hover:border-[#6c584b] group-hover:scale-120 transition-all duration-300 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#6c584b] to-[#a98467] group-hover:from-[#a98467] group-hover:to-[#d6ccc2] transition-all duration-300" />
              </div>

              {/* Internship Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/6 shadow-xl hover:shadow-[0_0_30px_rgba(169,132,103,0.08)] relative overflow-hidden transition-all duration-300">
                
                {/* Visual gradient background corner tag */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${exp.color} opacity-[0.03] blur-[10px] pointer-events-none rounded-full`} />

                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                  <div>
                    <span className="text-[9px] font-semibold text-[#a98467] font-mono tracking-wider uppercase bg-[#a98467]/5 px-3 py-1 rounded-md border border-[#a98467]/10 shadow-sm">
                      {exp.type}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-100 light:text-[#2c221b] mt-2">
                      {exp.role}
                    </h3>
                    <p className="font-heading font-semibold text-slate-400 light:text-[#6c584b]/75 text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 light:text-[#6c584b]/70 font-mono bg-white/3 light:bg-slate-200/50 border border-white/5 px-3 py-1.5 rounded-full w-fit">
                    <Calendar size={12} className="text-[#a98467]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Card details body list */}
                <ul className="space-y-3 font-sans text-sm text-slate-400 light:text-[#6c584b]/80">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <ChevronRight size={14} className="text-[#a98467] mt-1 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
