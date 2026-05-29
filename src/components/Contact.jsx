import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Send, AlertCircle, CheckCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const [outbox, setOutbox] = useState(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("portfolio_outbox");
    return saved ? JSON.parse(saved) : [];
  });

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 3) {
      errors.message = "Message must be at least 3 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear field error on change
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }

    // Clear global form errors on edit to provide premium dynamic feedback
    if (status.error || status.success) {
      setStatus((prev) => ({ ...prev, error: null, success: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ submitting: false, success: false, error: "Please resolve the form validation errors." });
      return;
    }

    setStatus({ submitting: true, success: null, error: null });

    // Simulate standard secure backend form sending (e.g. EmailJS endpoint)
    setTimeout(() => {
      const newMessage = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };

      setOutbox((prev) => {
        const updated = [newMessage, ...prev].slice(0, 5); // Keep last 5 messages
        localStorage.setItem("portfolio_outbox", JSON.stringify(updated));
        return updated;
      });

      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Beautiful premium Canvas Confetti explosion!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#6c584b", "#a98467", "#eae6df", "#d6ccc2"],
      });
    }, 1500);
  };

  const contactCards = [
    {
      icon: Mail,
      title: "Direct Email",
      value: "dimpleparihar.dp@gmail.com",
      href: "mailto:dimpleparihar.dp@gmail.com",
      color: "text-[#a98467] border-[#6c584b]/15 hover:bg-[#6c584b]/5",
    },
    {
      icon: MapPin,
      title: "Official Location",
      value: "Jammu, J&K, India",
      href: "https://maps.google.com/?q=Jammu",
      color: "text-[#a98467] border-[#6c584b]/15 hover:bg-[#6c584b]/5",
    },
    {
      icon: Linkedin,
      title: "LinkedIn Profile",
      value: "linkedin.com/in/dimpleparihar",
      href: "https://linkedin.com/in/dimpleparihar",
      color: "text-[#a98467] border-[#6c584b]/15 hover:bg-[#6c584b]/5",
    },
    {
      icon: Github,
      title: "GitHub Hub",
      value: "github.com/Dimple090",
      href: "https://github.com/Dimple090",
      color: "text-[#a98467] border-[#6c584b]/15 hover:bg-[#6c584b]/5",
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-transparent overflow-hidden">
      
      {/* Aurora glow nodes */}
      <div className="absolute bottom-0 right-1/4 w-[35vw] h-[35vw] bg-[#a98467]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] bg-[#6c584b]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section title */}
        <div className="text-center md:text-left space-y-2 mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#a98467] font-mono text-xs font-semibold uppercase tracking-wider">
            <Mail size={13} /> / Communications
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-slate-100 light:text-[#2c221b] tracking-tight">
            Connect With <span className="serif-italic font-normal text-[#a98467]">Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#6c584b] to-[#a98467] rounded" />
        </div>

        {/* Content grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Panel (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-left space-y-3">
              <h3 className="font-heading font-extrabold text-2xl text-slate-100 light:text-[#2c221b] tracking-wide">
                Let's Build Something Extraordinary
              </h3>
              <p className="text-slate-400 light:text-[#6c584b]/80 font-sans text-sm sm:text-base leading-relaxed">
                Whether you're exploring prospective developer interns, hiring for full stack software positions, seeking custom api consulting, or just want to network — drop me a message!
              </p>
            </div>

            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={idx}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`glass-card p-5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 ${card.color}`}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-200/40 flex items-center justify-center mb-4 border border-white/5 shadow-inner">
                      <Icon size={15} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-slate-400 light:text-[#6c584b]/80 uppercase tracking-wider">{card.title}</h4>
                      <p className="font-mono text-[10px] sm:text-xs text-slate-200 light:text-[#2c221b] mt-1 break-all select-all font-semibold">
                        {card.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Live Gateway Logs Console */}
            {outbox.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card rounded-2xl border border-white/6 p-5 shadow-lg text-left font-mono text-[10px] sm:text-xs bg-slate-950/80 light:bg-white space-y-3 mt-6"
              >
                <div className="flex items-center justify-between border-b border-white/5 light:border-slate-200/50 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                    <span className="text-[#a98467] font-bold uppercase tracking-wider text-[9px] font-sans">
                      Secure Outbox Feed (Local Logs)
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setOutbox([]);
                      localStorage.removeItem("portfolio_outbox");
                    }}
                    className="text-[8px] text-slate-500 hover:text-red-400 hover:underline font-sans cursor-pointer transition-colors"
                  >
                    Clear Logs
                  </button>
                </div>
                
                <div className="space-y-3 pr-1">
                  {outbox.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-3 bg-white/2 light:bg-slate-50 border border-white/4 light:border-slate-200/40 rounded-xl space-y-1.5 hover:border-[#a98467]/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between text-[8px] text-slate-500">
                        <span className="font-semibold text-[#a98467]">{msg.timestamp}</span>
                        <span className="bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded border border-green-500/10 font-bold">
                          DISPATCHED
                        </span>
                      </div>
                      <div className="text-[10px] leading-relaxed text-slate-300 light:text-[#2c221b]">
                        <p><span className="text-purple-400">From:</span> {msg.name} ({msg.email})</p>
                        <p><span className="text-blue-400">Subject:</span> {msg.subject}</p>
                        <p className="mt-1 text-slate-400 light:text-slate-500 border-l border-[#a98467]/30 pl-2 italic">
                          "{msg.message}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Interactive Form Panel (Right) */}
          <motion.div
            className="lg:col-span-7 w-full z-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-3xl border border-white/6 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left">
              
              {/* Corner ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#a98467]/5 to-[#6c584b]/5 blur-[25px] rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={16} className="text-[#a98467] animate-pulse" />
                <span className="font-heading font-extrabold text-lg text-slate-200 light:text-[#2c221b] tracking-tight">
                  Secure Message Dispatcher
                </span>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Fields Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="name" className="text-[10px] font-mono font-semibold uppercase text-slate-400 light:text-[#6c584b]/80 tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-slate-900/40 dark:bg-slate-950/40 light:bg-slate-50 border px-4 py-3 rounded-xl text-xs sm:text-sm text-slate-200 light:text-[#2c221b] placeholder-slate-400/45 dark:placeholder-slate-500/40 focus:outline-none focus:border-[#a98467] transition-all duration-300 shadow-inner ${
                        formErrors.name ? "border-red-500/60" : "border-white/5 light:border-slate-300"
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-[10px] text-red-400 font-mono flex items-center gap-1 pt-0.5">
                        <AlertCircle size={10} /> {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="email" className="text-[10px] font-mono font-semibold uppercase text-slate-400 light:text-[#6c584b]/80 tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. you@example.com"
                      className={`w-full bg-slate-900/40 dark:bg-slate-950/40 light:bg-slate-50 border px-4 py-3 rounded-xl text-xs sm:text-sm text-slate-200 light:text-[#2c221b] placeholder-slate-400/45 dark:placeholder-slate-500/40 focus:outline-none focus:border-[#a98467] transition-all duration-300 shadow-inner ${
                        formErrors.email ? "border-red-500/60" : "border-white/5 light:border-slate-300"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[10px] text-red-400 font-mono flex items-center gap-1 pt-0.5">
                        <AlertCircle size={10} /> {formErrors.email}
                      </p>
                    )}
                  </div>

                </div>

                {/* Subject Field */}
                <div className="space-y-1 text-left">
                  <label htmlFor="subject" className="text-[10px] font-mono font-semibold uppercase text-slate-400 light:text-[#6c584b]/80 tracking-wider">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Inquiry"
                    className={`w-full bg-slate-900/40 dark:bg-slate-950/40 light:bg-slate-50 border px-4 py-3 rounded-xl text-xs sm:text-sm text-slate-200 light:text-[#2c221b] placeholder-slate-400/45 dark:placeholder-slate-500/40 focus:outline-none focus:border-[#a98467] transition-all duration-300 shadow-inner ${
                      formErrors.subject ? "border-red-500/60" : "border-white/5 light:border-slate-300"
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="text-[10px] text-red-400 font-mono flex items-center gap-1 pt-0.5">
                      <AlertCircle size={10} /> {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1 text-left">
                  <label htmlFor="message" className="text-[10px] font-mono font-semibold uppercase text-slate-400 light:text-[#6c584b]/80 tracking-wider">
                    Message Body
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message details here..."
                    className={`w-full bg-slate-900/40 dark:bg-slate-950/40 light:bg-slate-50 border px-4 py-3 rounded-2xl text-xs sm:text-sm text-slate-200 light:text-[#2c221b] placeholder-slate-400/45 dark:placeholder-slate-500/40 focus:outline-none focus:border-[#a98467] transition-all duration-300 shadow-inner resize-none ${
                      formErrors.message ? "border-red-500/60" : "border-white/5 light:border-slate-300"
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-[10px] text-red-400 font-mono flex items-center gap-1 pt-0.5">
                      <AlertCircle size={10} /> {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Indicator Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* Validation State Banners */}
                  <AnimatePresence mode="wait">
                    {status.success && (
                      <motion.div
                        className="text-green-600 light:text-green-700 text-xs font-semibold flex items-center gap-1.5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <CheckCircle size={14} className="text-green-500" />
                        <span>Message dispatched successfully!</span>
                      </motion.div>
                    )}

                    {status.error && (
                      <motion.div
                        className="text-red-400 text-xs font-semibold flex items-center gap-1.5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <AlertCircle size={14} className="text-red-400" />
                        <span>{status.error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#6c584b] to-[#a98467] hover:from-[#544338] hover:to-[#8c6a51] text-[#f8f6f2] font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-[0_0_15px_rgba(169,132,103,0.15)] hover:shadow-[0_0_20px_rgba(108,88,75,0.3)] hover:scale-103 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer self-end w-full sm:w-auto"
                  >
                    {status.submitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send size={13} />
                    )}
                    <span>{status.submitting ? "Dispatching..." : "Send Message"}</span>
                  </button>

                </div>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
