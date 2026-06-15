const SKILL_GROUPS = [
  {
    category: "Languages",
    icon: "{ }",
    skills: ["Python", "JavaScript", "TypeScript", "C", "C++"],
  },
  {
    category: "Frontend",
    icon: "</>",
    skills: ["React JS", "Tailwind CSS", "HTML5", "CSS3", "ShadCN UI"],
  },
  {
    category: "Backend",
    icon: "⚙",
    skills: ["Node.js", "Express", "Flask", "Django", "FastAPI"],
  },
  {
    category: "Databases",
    icon: "◈",
    skills: ["PostgreSQL", "MongoDB", "SQLAlchemy", "Redis"],
  },
  {
    category: "AI / ML",
    icon: "◆",
    skills: ["scikit-learn", "TensorFlow", "NumPy", "Pandas", "RAG", "LLMs"],
  },
  {
    category: "DevOps & Tools",
    icon: "⬡",
    skills: ["Docker", "Git", "GitHub", "Railway", "REST APIs", "JWT"],
  },
];

const COMPETENCIES = [
  { label: "Full-Stack Architecture", pct: 90 },
  { label: "Machine Learning Pipelines", pct: 85 },
  { label: "API Design & Optimization", pct: 92 },
  { label: "Database Design & SQL", pct: 88 },
  { label: "System Design", pct: 78 },
  { label: "AI Integration", pct: 82 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-[#1E2740]">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono'] text-[#00D4FF] text-xs tracking-[0.4em] uppercase">
            03 / skills
          </span>
          <div className="flex-1 h-px bg-[#1E2740]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: skill groups */}
          <div>
            <h2 className="font-['JetBrains_Mono'] text-2xl font-bold text-[#E8EDF5] mb-8">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.category}
                  className="bg-[#0D1120] border border-[#1E2740] p-4 hover:border-[#00D4FF]/20 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-['JetBrains_Mono'] text-[#00D4FF] text-sm">
                      {group.icon}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#E8EDF5]/50 tracking-wider uppercase">
                      {group.category}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="font-['JetBrains_Mono'] text-xs text-[#E8EDF5]/70 flex items-center gap-1.5"
                      >
                        <span className="text-[#00D4FF]/30 text-[10px]">▸</span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: competency bars */}
          <div>
            <h2 className="font-['JetBrains_Mono'] text-2xl font-bold text-[#E8EDF5] mb-8">
              Competencies
            </h2>
            <div className="space-y-6">
              {COMPETENCIES.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-['JetBrains_Mono'] text-sm text-[#E8EDF5]/70">
                      {item.label}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#00D4FF]/70">
                      {item.pct}%
                    </span>
                  </div>
                  <div className="h-0.5 bg-[#1E2740] w-full">
                    <div
                      className="h-full bg-gradient-to-r from-[#00D4FF] to-[#00D4FF]/40 transition-all duration-1000"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12 bg-[#0D1120] border border-[#1E2740] p-6">
              <div className="font-['JetBrains_Mono'] text-xs text-[#00D4FF]/70 tracking-widest uppercase mb-4">
                Certifications
              </div>
              <div className="space-y-3">
                {[
                  "Machine Learning Specialization",
                  "Deep Learning / CNN",
                  "ML End-to-End Pipelines",
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#00D4FF] flex-shrink-0" />
                    <span className="font-['JetBrains_Mono'] text-sm text-[#E8EDF5]/60">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}