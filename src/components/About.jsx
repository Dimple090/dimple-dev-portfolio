import { useState } from "react";
import { motion } from "framer-motion";
import { User, Code2, Award, GraduationCap, MapPin, Terminal, Settings } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("profile.json");

  const codeSnippets = {
    "profile.json": `{
  "name": "Dimple Parihar",
  "title": "Full Stack Web Developer",
  "education": {
    "degree": "B.E. Computer Science Engineering",
    "status": "Student",
    "location": "Jammu, J&K"
  },
  "focus": [
    "Scalable Architectures",
    "High Performance APIs",
    "Clean UI/UX Design"
  ],
  "mindset": {
    "problemSolving": "strong",
    "continuousLearning": true,
    "coffeeToCodeRatio": "optimal"
  }
}`,
    "passions.js": `// Core Engineering Drivers
const developerProfile = {
  passion: "Building efficient & robust web tech",
  interests: [
    "RESTful APIs",
    "Modern Frontends (React)",
    "Distributed Systems",
    "Memory Optimization in C++"
  ],
  goal: "Become an impact-driven Software Engineer",
  philosophy: "Write code that is easy to read, hard to break."
};`
  };

  const bioCards = [
    { icon: GraduationCap, title: "Education", text: "Computer Science Engineering Student, learning fundamental engineering practices." },
    { icon: Code2, title: "Tech Focus", text: "Passionate about full-stack engineering, clean reusable code, and design architecture." },
    { icon: Award, title: "Mindset", text: "Strong problem solver focusing on optimal algorithms, data structures, and APIs." }
  ];

  return (
    <section id="about" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center md:text-left space-y-2 mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#a98467] font-mono text-xs font-semibold uppercase tracking-wider">
            <User size={13} /> / Biography
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-slate-100 light:text-[#2c221b] tracking-tight">
            Engineering Modern <span className="serif-italic font-normal text-[#a98467]">Digital Spaces</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#6c584b] to-[#a98467] rounded" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bio text container (Left) */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-200 light:text-[#2c221b] tracking-wide">
              Aspiring Software Engineer & Full Stack Web Developer
            </h3>
            
            <p className="text-slate-400 light:text-[#6c584b]/80 font-sans text-sm sm:text-base leading-relaxed">
              I am a <strong className="font-bold text-slate-200 light:text-[#2c221b]">Computer Science Engineering</strong> student with a deep passion for building high-performance, responsive, and visually rich full-stack web applications. I love solving algorithmic challenges and architecting clean, maintainable backend structures and intuitive frontends.
            </p>

            <p className="text-slate-400 light:text-[#6c584b]/80 font-sans text-sm sm:text-base leading-relaxed">
              My core developer mindset centers around <strong className="font-bold text-slate-200 light:text-[#2c221b]">continuous learning</strong>, <strong className="font-bold text-slate-200 light:text-[#2c221b]">meticulous problem solving</strong>, and <strong className="font-bold text-slate-200 light:text-[#2c221b]">writing optimized systems</strong>. Whether it's crafting responsive glassmorphic interfaces with React, engineering API nodes in Node.js, or optimizing low-level memory in C++, I strive for architectural excellence.
            </p>

            {/* Quick Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {bioCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div key={idx} className="glass-card p-4.5 rounded-2xl border border-white/5 shadow-sm text-left">
                    <div className="w-9 h-9 rounded-xl bg-[#6c584b]/10 text-[#a98467] flex items-center justify-center mb-3">
                      <Icon size={18} />
                    </div>
                    <h4 className="font-heading font-extrabold text-sm text-slate-200 light:text-[#2c221b] mb-1">{card.title}</h4>
                    <p className="text-xs text-slate-400 light:text-[#6c584b]/70 leading-relaxed font-sans">{card.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 light:text-[#6c584b]/80 pt-2 font-mono">
              <MapPin size={15} className="text-[#a98467]" />
              <span>Based in: Jammu, J&K, India</span>
            </div>



          </motion.div>

          {/* Interactive IDE Mock Container (Right) */}
          <motion.div
            className="lg:col-span-6 z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full rounded-2xl glass-card border border-white/6 shadow-2xl overflow-hidden text-left font-mono">
              
              {/* VS Code title bar */}
              <div className="bg-slate-900/60 light:bg-slate-200/50 px-4 py-3 flex items-center justify-between border-b border-white/5 light:border-slate-300/40">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="text-[10px] text-slate-500 font-sans font-semibold flex items-center gap-1">
                  <Terminal size={11} className="text-slate-500" /> DimpleParihar - VS Code
                </div>
                <Settings size={13} className="text-slate-500" />
              </div>

              {/* VS Code tab headers */}
              <div className="bg-slate-900/30 light:bg-slate-100/30 px-3 flex gap-1 border-b border-white/5 light:border-slate-300/40 overflow-x-auto scrollbar-none">
                {Object.keys(codeSnippets).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-[10px] sm:text-xs font-semibold border-t-2 border-r border-white/5 cursor-pointer flex items-center gap-1.5 transition-all duration-200 ${
                      activeTab === tab
                        ? "bg-slate-950/60 light:bg-white text-[#a98467] border-t-[#a98467]"
                        : "text-slate-500 border-t-transparent hover:text-slate-300"
                    }`}
                  >
                    <span className={tab.endsWith(".json") ? "text-yellow-600/80" : "text-blue-500"}>❖</span>
                    {tab}
                  </button>
                ))}
              </div>

              {/* IDE Code Content */}
              <div className="p-4 bg-slate-950/60 light:bg-white text-slate-300 font-mono text-[10px] sm:text-xs sm:leading-relaxed overflow-x-auto min-h-[300px]">
                <pre className="text-slate-400">
                  {codeSnippets[activeTab].split("\n").map((line, idx) => {
                    // Syntax highlightings
                    let highlightedLine = line
                      .replace(/"(.*?)"/g, '<span class="text-green-600/80 light:text-green-700">$1</span>')
                      .replace(/const|let|var|function|return/g, '<span class="text-purple-500 font-semibold">$&</span>')
                      .replace(/Dimple Parihar|Full Stack Web Developer|B.E. Computer Science Engineering/g, '<span class="text-[#a98467] font-heading serif-italic font-bold">$&</span>')
                      .replace(/\/\/ (.*)/g, '<span class="text-slate-500">$1</span>');

                    return (
                      <div key={idx} className="flex hover:bg-white/3 px-2">
                        <span className="w-6 text-right select-none text-slate-600 mr-4 border-r border-white/5">{idx + 1}</span>
                        <code dangerouslySetInnerHTML={{ __html: highlightedLine || "&nbsp;" }} />
                      </div>
                    );
                  })}
                </pre>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
