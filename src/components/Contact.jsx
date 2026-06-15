import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "sajjadahmed102005@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#1E2740] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono'] text-[#00D4FF] text-xs tracking-[0.4em] uppercase">
            04 / contact
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 h-px bg-gradient-to-r from-[#00D4FF]/40 via-[#1E2740] to-transparent origin-left"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              variants={fadeUp}
              className="font-['JetBrains_Mono'] text-3xl md:text-4xl font-bold text-[#E8EDF5] leading-tight mb-6"
            >
              Let's build
              <br />
              something <span className="text-[#00D4FF]">together.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#E8EDF5]/50 leading-relaxed mb-8">
              I'm currently open to new opportunities — backend roles, full-stack positions,
              or AI/ML-integrated products. If you have a project or a role that aligns,
              let's talk.
            </motion.p>

            <motion.div variants={stagger} className="space-y-3">
              <motion.a
                variants={fadeUp}
                whileHover={{ x: 6 }}
                href="https://www.linkedin.com/in/sajjad-ahmed-7904952b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-[#1E2740] flex items-center justify-center group-hover:border-[#00D4FF]/30 transition-colors">
                  <span className="text-[#00D4FF]/60 text-xs font-['JetBrains_Mono']">in</span>
                </div>
                <div>
                  <div className="font-['JetBrains_Mono'] text-xs text-[#E8EDF5]/30 tracking-wider uppercase">LinkedIn</div>
                  <div className="font-['JetBrains_Mono'] text-sm text-[#E8EDF5]/70 group-hover:text-[#00D4FF] transition-colors">
                    sajjad-ahmed-7904952b0 ↗
                  </div>
                </div>
              </motion.a>

              <motion.a
                variants={fadeUp}
                whileHover={{ x: 6 }}
                href="https://github.com/Sajjadecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-[#1E2740] flex items-center justify-center group-hover:border-[#00D4FF]/30 transition-colors">
                  <span className="text-[#00D4FF]/60 text-xs font-['JetBrains_Mono']">gh</span>
                </div>
                <div>
                  <div className="font-['JetBrains_Mono'] text-xs text-[#E8EDF5]/30 tracking-wider uppercase">GitHub</div>
                  <div className="font-['JetBrains_Mono'] text-sm text-[#E8EDF5]/70 group-hover:text-[#00D4FF] transition-colors">
                    Sajjadecoder ↗
                  </div>
                </div>
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
              <span className="font-['JetBrains_Mono'] text-xs text-[#E8EDF5]/30 ml-2">send_message.sh</span>
            </div>
            <div className="p-6 font-['JetBrains_Mono'] text-sm space-y-4">
              <div>
                <div className="text-[#E8EDF5]/30 text-xs mb-1 tracking-wider">To</div>
                <div className="flex items-center justify-between bg-[#1E2740] px-3 py-2">
                  <span className="text-[#E8EDF5]/60 text-sm">{email}</span>
                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    onClick={handleCopy}
                    className="text-[10px] text-[#00D4FF]/60 hover:text-[#00D4FF] transition-colors ml-4 tracking-wider"
                  >
                    {copied ? "COPIED ✓" : "COPY"}
                  </motion.button>
                </div>
              </div>
              <div>
                <div className="text-[#E8EDF5]/30 text-xs mb-1 tracking-wider"> Subject</div>
                <div className="bg-[#1E2740] px-3 py-2 text-[#E8EDF5]/40 text-sm italic">
                  "Let's collaborate on [project]..."
                </div>
              </div>
              <div>
                <div className="text-[#E8EDF5]/30 text-xs mb-1 tracking-wider"> Status</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#28C840] rounded-full animate-pulse" />
                  <span className="text-[#34D399] text-sm">Open to opportunities</span>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#00D4FF] text-[#0A0E1A] py-3 font-bold tracking-widest uppercase text-xs hover:bg-[#00D4FF]/80 transition-colors mt-4"
              >
                Send Message →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}