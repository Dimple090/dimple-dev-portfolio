import { motion } from "framer-motion";
import { Sparkles, Monitor, Database, Terminal, Settings, Settings2 } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      color: "from-[#6c584b]/15 to-[#a98467]/15 text-[#a98467] border-[#a98467]/15",
      skills: [
        { name: "ReactJS", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 }
      ]
    },
    {
      title: "Backend Engineering",
      icon: Settings,
      color: "from-[#6c584b]/15 to-[#a98467]/15 text-[#a98467] border-[#a98467]/15",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "REST APIs", level: 88 },
        { name: "Express.js", level: 82 }
      ]
    },
    {
      title: "Programming Languages",
      icon: Terminal,
      color: "from-[#6c584b]/15 to-[#a98467]/15 text-[#a98467] border-[#a98467]/15",
      skills: [
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Databases & Systems",
      icon: Database,
      color: "from-[#6c584b]/15 to-[#a98467]/15 text-[#a98467] border-[#a98467]/15",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "Developer Tools",
      icon: Settings2,
      color: "from-[#6c584b]/15 to-[#a98467]/15 text-[#a98467] border-[#a98467]/15",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "MySQL Workbench", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-transparent overflow-hidden">
      
      {/* Decorative BG Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#6c584b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section title */}
        <div className="text-center md:text-left space-y-2 mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#a98467] font-mono text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} /> / Skillsets
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-slate-100 light:text-[#2c221b] tracking-tight">
            Technical <span className="serif-italic font-normal text-[#a98467]">Powerhouse</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#6c584b] to-[#a98467] rounded" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={catIdx}
                className={`glass-card p-6 rounded-3xl border shadow-lg flex flex-col justify-between ${
                  category.title.includes("Frontend") ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <div>
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-2xl bg-gradient-to-tr ${category.color} flex items-center justify-center border shadow-inner`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="font-heading font-extrabold text-lg text-slate-200 light:text-[#2c221b]">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Progress bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-semibold tracking-wide">
                          <span className="text-slate-300 light:text-[#6c584b]/80 font-sans">{skill.name}</span>
                          <span className="text-[#a98467] font-mono text-[10px] bg-[#a98467]/5 px-2 py-0.5 rounded-full">{skill.level}%</span>
                        </div>
                        {/* Progress Bar Container */}
                        <div className="w-full h-2 rounded-full bg-slate-900/50 light:bg-slate-200 overflow-hidden border border-white/5 light:border-slate-300/40">
                          {/* Inner glowing meter fill */}
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-[#6c584b] to-[#a98467] shadow-[0_0_10px_rgba(169,132,103,0.25)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: skillIdx * 0.05 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro tech grid graphic */}
                <div className="flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-white/5 light:border-slate-200/50">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono font-medium text-slate-400 light:text-[#6c584b]/70 bg-white/3 light:bg-slate-100 px-2.5 py-1 rounded-md border border-white/5"
                    >
                      {skill.name.toLowerCase()}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
