import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./motion";

const ROLES = [
  "Backend Software Engineer",
  "Full-Stack Developer",
  "AI Solutions Builder",
  "ML Engineer",
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 pt-24 pb-16">
      {/* Glow blobs */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00D4FF]/3 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        {/* Main heading */}
        <motion.div variants={fadeUp}>
          <p className="font-['JetBrains_Mono'] text-[#00D4FF]/70 text-sm tracking-[0.3em] uppercase mb-3">
            Hello, I'm
          </p>
          <h1 className="font-['JetBrains_Mono'] font-bold text-5xl md:text-7xl lg:text-8xl text-[#E8EDF5] leading-none tracking-tight mb-6">
            Sajjad
            <br />
            <span className="text-[#00D4FF]">Ahmed.</span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
          <span className="text-[#E8EDF5]/30 font-['JetBrains_Mono'] text-lg md:text-2xl">&gt;</span>
          <span className="font-['JetBrains_Mono'] text-lg md:text-2xl text-[#E8EDF5]/80">
            {role}
            <span className="inline-block w-0.5 h-6 bg-[#00D4FF] ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-[#E8EDF5]/50 text-base md:text-lg max-w-2xl leading-relaxed mb-12"
        >
          Building scalable, production-ready web applications and AI-powered solutions.
          Strong foundation in backend systems, machine learning, and full-stack architecture.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="bg-[#00D4FF] text-[#0A0E1A] font-['JetBrains_Mono'] font-bold text-sm px-8 py-3.5 hover:bg-[#00D4FF]/80 transition-colors tracking-wider uppercase"
          >
            View Projects →
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, borderColor: "rgba(0,212,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="border border-[#E8EDF5]/20 text-[#E8EDF5]/70 font-['JetBrains_Mono'] text-sm px-8 py-3.5 hover:text-[#00D4FF] transition-all tracking-wider uppercase"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-[#1E2740] max-w-lg"
        >
          {[
            { val: "27+", label: "Repositories" },
            { val: "3", label: "ML Certificates" },
            { val: "5+", label: "Tech Stacks" },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <div className="font-['JetBrains_Mono'] text-2xl font-bold text-[#00D4FF]">{s.val}</div>
              <div className="text-[#E8EDF5]/40 text-xs mt-1 tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      
    </section>
  );
}