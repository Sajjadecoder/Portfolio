import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./motion";

const TERMINAL_LINES = [
  { key: "name", val: '"Sajjad Ahmed"', color: "text-[#00D4FF]" },
  { key: "role", val: '"Backend Engineer"', color: "text-[#A78BFA]" },
  { key: "location", val: '"Karachi, PK 🇵🇰"', color: "text-[#34D399]" },
  { key: "focus", val: '["Scalable APIs", "AI/ML", "System Design"]', color: "text-[#F59E0B]" },
  { key: "languages", val: '["Python", "JS", "TS", "C", "C++"]', color: "text-[#F87171]" },
  { key: "status", val: '"Open to Opportunities"', color: "text-[#00D4FF]" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#1E2740] relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono'] text-[#00D4FF] text-xs tracking-[0.4em] uppercase">
            01 / about
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 h-px bg-gradient-to-r from-[#00D4FF]/40 via-[#1E2740] to-transparent origin-left"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h2
              variants={fadeUp}
              className="font-['JetBrains_Mono'] text-3xl md:text-4xl font-bold text-[#E8EDF5] leading-tight mb-6"
            >
              I build systems
              <br />
              that <span className="text-[#00D4FF]">scale.</span>
            </motion.h2>

            <motion.div variants={stagger} className="space-y-4 text-[#E8EDF5]/55 leading-relaxed">
              {[
                "I'm a Backend Software Engineer with a strong foundation in computer science fundamentals, passionate about building production-ready systems and integrating AI into real-world applications.",
                "My work spans full-stack development (MERN & PERN stacks), machine learning pipelines with 90%+ accuracy, and intelligent systems like RAG-based chatbots and AI code reviewers.",
                "Currently focused on architecting scalable backend systems and mastering distributed systems design — always learning, always building.",
              ].map((p, i) => (
                <motion.p key={i} variants={fadeUp}>
                  {p}
                </motion.p>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,212,255,0.12)" }}
                whileTap={{ scale: 0.97 }}
                href="https://www.linkedin.com/in/sajjad-ahmed-7904952b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['JetBrains_Mono'] text-xs text-[#00D4FF] border border-[#00D4FF]/30 px-4 py-2 transition-colors tracking-wider uppercase"
              >
                LinkedIn ↗
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, borderColor: "rgba(232,237,245,0.4)" }}
                whileTap={{ scale: 0.97 }}
                href="https://github.com/Sajjadecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['JetBrains_Mono'] text-xs text-[#E8EDF5]/50 border border-[#1E2740] px-4 py-2 transition-colors tracking-wider uppercase"
              >
                GitHub ↗
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, boxShadow: "0 20px 60px -20px rgba(0,212,255,0.25)" }}
            transition={{ duration: 0.4 }}
            className="bg-[#0D1120] border border-[#1E2740] hover:border-[#00D4FF]/30"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E2740] bg-[#1E2740]/50">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="font-['JetBrains_Mono'] text-xs text-[#E8EDF5]/30 ml-2">whoami.sh</span>
            </div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="p-6 font-['JetBrains_Mono'] text-sm space-y-3"
            >
              {TERMINAL_LINES.map(({ key, val, color }) => (
                <motion.div key={key} variants={fadeUp} className="flex gap-2">
                  <span className="text-[#E8EDF5]/30">{key}:</span>
                  <span className={color}>{val}</span>
                  <span className="text-[#E8EDF5]/20">,</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}