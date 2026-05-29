import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Github, ExternalLink, X, ShoppingBag, Bot, ShieldAlert, Cpu, Sparkles, Terminal } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "kalakart",
      title: "KalaKart",
      subtitle: "Full-Stack Artisan E-Commerce Platform",
      tech: ["ReactJS", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
      description: "A complete high-performance e-commerce ecosystem built for local artisans. Empowers traditional craftsmen to list products, manage inventory, and securely sell unique handcrafted assets to global consumers.",
      features: [
        "JWT-based Secure Session Authentication & Role Routing (Buyer/Artisan).",
        "Interactive Redux/State Shopping Cart with real-time inventory checks.",
        "Secure Stripe/Mock Payment Gateway integration with digital receipts.",
        "Real-time Order tracking system using WebSocket connections.",
        "Fluid glassmorphic responsive dashboards for artisans to analyze sales data."
      ],
      icon: ShoppingBag,
      github: "https://github.com/Dimple090/KalaKart-AI-Artisan-E-commerce",
      live: "https://kala-kart-ai-artisan-e-commerce-xzn.vercel.app/",
      color: "from-[#6c584b] to-[#a98467] shadow-[0_0_30px_rgba(169,132,103,0.1)]",
      glowColor: "rgba(169,132,103,0.15)",
      visualMockup: (
        <div className="w-full h-full bg-slate-950/90 p-4 font-mono text-[10px] text-slate-400 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[#a98467] font-bold">🛒 KalaKart.API</span>
            <span className="text-[8px] bg-[#a98467]/10 text-[#a98467] px-1.5 py-0.5 rounded">v1.2.0</span>
          </div>
          <div className="space-y-1 my-3 text-left">
            <p className="text-purple-400">POST <span className="text-slate-200">/api/v1/orders/checkout</span></p>
            <p className="text-slate-500">Payload: &#123; cartId: "kk_902", pay: "stripe" &#125;</p>
            <p className="text-green-400">Response: 201 Created</p>
            <p className="text-slate-500">Status: "payment_approved", trackingId: "kk_tr_8109"</p>
          </div>
          <div className="w-full h-2 rounded bg-slate-900 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#6c584b] to-[#a98467] w-[85%] animate-pulse" />
          </div>
        </div>
      )
    },
    {
      id: "anabellabot",
      title: "Anabella Bot",
      subtitle: "AI-Powered Automation Assistant",
      tech: ["Python", "REST APIs", "OpenAI API", "SQLite", "Workflow Automation"],
      description: "A highly intelligent, low-overhead digital secretary designed to automate scheduling, parse business inquiries, and coordinate tasks utilizing natural language models and custom scheduling nodes.",
      features: [
        "Natural language intent parser for incoming emails and scheduling blocks.",
        "Automatic calendar sync via Outlook & Google Calendar REST APIs.",
        "Custom workflow automation triggered by key business phrases.",
        "Intelligent task prioritization pipelines based on urgency modeling.",
        "Detailed dashboard logs mapping bot actions, tokens used, and active cron timers."
      ],
      icon: Bot,
      github: "https://github.com/Dimple090/AnabellaBot",
      live: "",
      color: "from-[#6c584b] to-[#a98467] shadow-[0_0_30px_rgba(169,132,103,0.1)]",
      glowColor: "rgba(169,132,103,0.15)",
      visualMockup: (
        <div className="w-full h-full bg-slate-950/90 p-4 font-mono text-[10px] text-slate-400 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[#a98467] font-bold">🤖 Anabella.Core</span>
            <span className="text-[8px] bg-[#6c584b]/15 text-[#a98467] px-1.5 py-0.5 rounded">agent-on</span>
          </div>
          <div className="space-y-1 my-3 text-left">
            <p className="text-slate-200">&gt; Parsing email: "Meeting tomorrow at 2 PM?"</p>
            <p className="text-[#a98467]">Intent: ScheduleCalendarMeeting</p>
            <p className="text-green-400">Action: Calendar slot reserved (May 28, 14:00)</p>
            <p className="text-slate-500">&gt; Status: Auto-reply confirmation dispatched.</p>
          </div>
          <div className="w-full h-2 rounded bg-slate-900 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#6c584b] to-[#a98467] w-[95%] animate-pulse" />
          </div>
        </div>
      )
    },
    {
      id: "dpi_tool",
      title: "Deep Packet Inspection Tool",
      subtitle: "C++ Network Traffic Analysis Tool",
      tech: ["C++", "pcap", "Network Protocols", "TCP/IP Stack", "Performance Tuning"],
      description: "A high-performance command-line utility engineered to intercept, dissect, and log packet arrays in real-time. Crucial for debugging protocol pipelines and auditing local network transactions.",
      features: [
        "Real-time packet parsing over active Ethernet controllers utilizing `libpcap` nodes.",
        "Deep inspection of core protocol trees (TCP, UDP, ICMP, DNS, HTTP/HTTPS frames).",
        "Custom rule-based alert engine triggering warnings for suspicious port queries.",
        "Optimized heap allocation algorithms preventing latency spikes under heavy packet loads.",
        "Formatted hex/ASCII output blocks visualizers to inspect packet payload slices."
      ],
      icon: ShieldAlert,
      github: "https://github.com/Dimple090/deep-packet-inspection-project",
      live: "",
      color: "from-[#6c584b] to-[#a98467] shadow-[0_0_30px_rgba(169,132,103,0.1)]",
      glowColor: "rgba(169,132,103,0.15)",
      visualMockup: (
        <div className="w-full h-full bg-slate-950/90 p-4 font-mono text-[9px] text-slate-400 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/5 pb-1">
            <span className="text-[#a98467] font-bold">🛡️ DPI.Analyzer</span>
            <span className="text-[7px] text-red-500 animate-pulse font-bold">SNIFFING...</span>
          </div>
          <div className="space-y-0.5 my-2 text-left">
            <p className="text-slate-300"># [Frame 1092] size: 104 bytes</p>
            <p className="text-[#a98467]">SRC: 192.168.1.12 &lt;&gt; DST: 8.8.8.8</p>
            <p className="text-purple-400">Protocol: DNS Query (dimpleparihar.com)</p>
            <p className="text-green-400">0000: 4500 0054 1c2a 4000 4001 70c0 c0a8 010c</p>
          </div>
          <div className="w-full h-2 rounded bg-slate-900 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#6c584b] to-[#a98467] w-[70%] animate-pulse" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-transparent overflow-hidden">
      
      {/* Visual glowing bubbles */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#a98467]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#6c584b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section title */}
        <div className="text-center md:text-left space-y-2 mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#a98467] font-mono text-xs font-semibold uppercase tracking-wider">
            <Code size={13} /> / Case Studies
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-slate-100 light:text-[#2c221b] tracking-tight">
            Featured <span className="serif-italic font-normal text-[#a98467]">Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#6c584b] to-[#a98467] rounded" />
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={project.id}
                className="glass-card rounded-3xl border border-white/6 shadow-xl relative overflow-hidden flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                
                {/* Image / Code mockup screen */}
                <div className="w-full h-48 border-b border-white/5 light:border-slate-200 overflow-hidden relative bg-slate-950 flex items-center justify-center">
                  {project.visualMockup}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-all duration-300 pointer-events-none" />
                </div>

                {/* Card Info body */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-xl bg-[#6c584b]/10 text-[#a98467] border border-[#a98467]/10 shadow-sm flex items-center justify-center">
                        <ProjectIcon size={14} />
                      </div>
                      <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                        Case Study
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-slate-100 light:text-[#2c221b] tracking-tight group-hover:text-[#a98467] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 light:text-[#6c584b]/75 font-sans font-medium mt-1">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-slate-400 light:text-[#6c584b]/80 leading-relaxed mt-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer (tech badges & trigger) */}
                  <div className="pt-6 mt-6 border-t border-white/5 light:border-slate-200/50">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="text-[9px] font-mono text-slate-400 light:text-[#6c584b]/80 bg-white/4 light:bg-slate-100 px-2 py-0.5 rounded border border-white/5"
                        >
                          {badge}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[9px] font-mono text-[#a98467] light:text-[#6c584b] bg-[#a98467]/5 px-2 py-0.5 rounded border border-[#a98467]/5">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action indicators */}
                    <div className="flex items-center justify-between text-xs font-semibold text-[#a98467] dark:text-[#a98467] light:text-[#6c584b] font-sans group-hover:translate-x-1.5 transition-transform duration-300">
                      <span>View Specifications</span>
                      <ExternalLink size={12} />
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Deep Specification Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-[#2c221b]/80 backdrop-blur-md px-4 py-8 md:py-16 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="w-full max-w-2xl rounded-3xl glass-card border border-white/8 shadow-2xl overflow-hidden text-left relative flex flex-col my-auto"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass-panel text-slate-400 hover:text-red-500 transition-colors duration-300 cursor-pointer z-10 hover:scale-105"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              {/* Modal Visual Mockup Header */}
              <div className="w-full h-48 bg-slate-950 flex items-center justify-center overflow-hidden relative border-b border-white/5 light:border-slate-200">
                {selectedProject.visualMockup}
              </div>

              {/* Details content */}
              <div className="p-6 space-y-6 flex-grow">
                
                {/* Title */}
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[#a98467] font-mono text-[10px] font-semibold uppercase tracking-widest mb-1.5">
                    <Sparkles size={10} /> Specifications Sheet
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-100 light:text-[#2c221b] leading-none">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-slate-400 light:text-[#6c584b]/75 font-sans font-medium mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-xs text-slate-200 light:text-[#2c221b] uppercase tracking-widest border-b border-white/5 light:border-slate-300/40 pb-1 flex items-center gap-1.5">
                    <Terminal size={12} className="text-[#a98467]" /> Summary / Scope
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 light:text-[#6c584b]/80 leading-relaxed font-sans">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Core Features Specs */}
                <div className="space-y-3">
                  <h4 className="font-heading font-bold text-xs text-slate-200 light:text-[#2c221b] uppercase tracking-widest border-b border-white/5 light:border-slate-300/40 pb-1 flex items-center gap-1.5">
                    <Cpu size={12} className="text-[#a98467]" /> Functional Modules
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-400 light:text-[#6c584b]/80 font-sans">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed bg-white/2 light:bg-slate-50 border border-white/3 light:border-slate-200/40 p-2.5 rounded-xl">
                        <span className="w-5 h-5 rounded bg-[#a98467]/10 text-[#a98467] flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">
                          0{idx + 1}
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-xs text-slate-200 light:text-[#2c221b] uppercase tracking-widest border-b border-white/5 light:border-slate-300/40 pb-1">
                    System Architecture Tags
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1.5">
                    {selectedProject.tech.map((badge, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] sm:text-[10px] font-mono text-slate-300 light:text-[#6c584b]/90 bg-white/4 light:bg-slate-100 border border-white/5 px-3 py-1 rounded-md"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Trigger footer */}
              <div className="p-6 bg-slate-950/60 light:bg-slate-50 border-t border-white/5 light:border-slate-200/60 flex items-center justify-end gap-3 shrink-0">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 light:border-slate-300 text-slate-300 light:text-[#2c221b] hover:text-[#a98467] light:hover:text-[#a98467] bg-white/2 light:bg-white text-xs font-semibold hover:scale-103 shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <Github size={14} />
                  <span>GitHub Repository</span>
                </a>
                {selectedProject.live && selectedProject.live !== "#" && selectedProject.live !== "" && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6c584b] to-[#a98467] hover:from-[#544338] hover:to-[#8c6a51] text-[#f8f6f2] text-xs font-semibold hover:scale-103 shadow-[0_0_15px_rgba(169,132,103,0.3)] transition-all duration-300 cursor-pointer"
                  >
                    <ExternalLink size={14} />
                    <span>Live Sandbox</span>
                  </a>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
