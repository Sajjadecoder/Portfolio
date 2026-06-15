export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#1E2740]">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono'] text-[#00D4FF] text-xs tracking-[0.4em] uppercase">
            01 / about
          </span>
          <div className="flex-1 h-px bg-[#1E2740]" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <h2 className="font-['JetBrains_Mono'] text-3xl md:text-4xl font-bold text-[#E8EDF5] leading-tight mb-6">
              I build systems
              <br />
              that <span className="text-[#00D4FF]">scale.</span>
            </h2>
            <div className="space-y-4 text-[#E8EDF5]/55 leading-relaxed">
              <p>
                I'm a Backend Software Engineer with a strong foundation in computer science
                fundamentals, passionate about building production-ready systems and integrating
                AI into real-world applications.
              </p>
              <p>
                My work spans full-stack development (MERN & PERN stacks), machine learning
                pipelines with 90%+ accuracy, and intelligent systems like RAG-based chatbots
                and AI code reviewers.
              </p>
              <p>
                Currently focused on architecting scalable backend systems and mastering
                distributed systems design — always learning, always building.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/sajjad-ahmed-7904952b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['JetBrains_Mono'] text-xs text-[#00D4FF] border border-[#00D4FF]/30 px-4 py-2 hover:bg-[#00D4FF]/10 transition-all tracking-wider uppercase"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/Sajjadecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['JetBrains_Mono'] text-xs text-[#E8EDF5]/50 border border-[#1E2740] px-4 py-2 hover:border-[#E8EDF5]/30 transition-all tracking-wider uppercase"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Right: terminal card */}
          <div className="bg-[#0D1120] border border-[#1E2740]">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E2740] bg-[#1E2740]/50">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="font-['JetBrains_Mono'] text-xs text-[#E8EDF5]/30 ml-2">whoami.sh</span>
            </div>
            {/* Terminal body */}
            <div className="p-6 font-['JetBrains_Mono'] text-sm space-y-3">
              {[
                { key: "name", val: '"Sajjad Ahmed"', color: "text-[#00D4FF]" },
                { key: "role", val: '"Backend Engineer"', color: "text-[#A78BFA]" },
                { key: "location", val: '"Karachi, PK 🇵🇰"', color: "text-[#34D399]" },
                { key: "focus", val: '["Scalable APIs", "AI/ML", "System Design"]', color: "text-[#F59E0B]" },
                { key: "languages", val: '["Python", "JS", "TS", "C", "C++"]', color: "text-[#F87171]" },
                { key: "status", val: '"Open to Opportunities"', color: "text-[#00D4FF]" },
              ].map(({ key, val, color }) => (
                <div key={key} className="flex gap-2">
                  <span className="text-[#E8EDF5]/30">{key}:</span>
                  <span className={color}>{val}</span>
                  <span className="text-[#E8EDF5]/20">,</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}