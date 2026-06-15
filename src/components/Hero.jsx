import { useState, useEffect } from "react";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 pt-24 pb-16">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#00D4FF 1px, transparent 1px),
            linear-gradient(90deg, #00D4FF 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00D4FF]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Terminal bar */}
        

        {/* Main heading */}
        <div
          className={`transition-all duration-700 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-['JetBrains_Mono'] text-[#00D4FF]/70 text-sm tracking-[0.3em] uppercase mb-3">
            Hello, I'm
          </p>
          <h1 className="font-['JetBrains_Mono'] font-bold text-5xl md:text-7xl lg:text-8xl text-[#E8EDF5] leading-none tracking-tight mb-6">
            Sajjad
            <br />
            <span className="text-[#00D4FF]">Ahmed.</span>
          </h1>
        </div>

        {/* Typewriter role */}
        <div
          className={`flex items-center gap-3 mb-10 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[#E8EDF5]/30 font-['JetBrains_Mono'] text-lg md:text-2xl">&gt;</span>
          <span className="font-['JetBrains_Mono'] text-lg md:text-2xl text-[#E8EDF5]/80">
            {role}
            <span className="inline-block w-0.5 h-6 bg-[#00D4FF] ml-1 animate-pulse" />
          </span>
        </div>

        {/* Description */}
        <p
          className={`text-[#E8EDF5]/50 text-base md:text-lg max-w-2xl leading-relaxed mb-12 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Building scalable, production-ready web applications and AI-powered solutions.
          Strong foundation in backend systems, machine learning, and full-stack architecture.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-4 transition-all duration-700 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#projects"
            className="bg-[#00D4FF] text-[#0A0E1A] font-['JetBrains_Mono'] font-bold text-sm px-8 py-3.5 hover:bg-[#00D4FF]/80 transition-colors tracking-wider uppercase"
          >
            View Projects →
          </a>
          <a
            href="#contact"
            className="border border-[#E8EDF5]/20 text-[#E8EDF5]/70 font-['JetBrains_Mono'] text-sm px-8 py-3.5 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all tracking-wider uppercase"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats row */}
        <div
          className={`grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-[#1E2740] max-w-lg transition-all duration-700 delay-[900ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { val: "27+", label: "Repositories" },
            { val: "3", label: "ML Certs" },
            { val: "5+", label: "Tech Stacks" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-['JetBrains_Mono'] text-2xl font-bold text-[#00D4FF]">{s.val}</div>
              <div className="text-[#E8EDF5]/40 text-xs mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-['JetBrains_Mono'] text-xs text-[#E8EDF5]/50 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#00D4FF]/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}