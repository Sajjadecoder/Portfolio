import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./motion";

const PROJECTS = [
  {
    id: "01",
    name: "Crowd-Funding",
    repo: "https://github.com/Sajjadecoder/Crowd-Funding",
    description:
      "Full-stack crowdfunding platform connecting creators with donors. Features real-time campaign management, RAG-powered Q&A, secure donations, social features, and analytics dashboards.",
    stack: ["React JS", "Flask", "PostgreSQL", "SQLAlchemy", "JWT", "RAG"],
    highlights: ["Campaign CRUD + live updates", "RAG-based chatbot integration", "Role-based auth (Creator / Donor)", "Docker + Railway deployment"],
    lang: "JavaScript",
    langColor: "#F7DF1E",
    type: "Full-Stack",
  },
  {
    id: "02",
    name: "AI Code Reviewer",
    repo: "https://github.com/Sajjadecoder/AI_Code_Reviewer",
    description:
      "An AI-powered reviewer and analyzer for public GitHub repositories. Fetches code, analyzes quality, identifies issues, and provides actionable improvement suggestions.",
    stack: ["JavaScript", "Node.js", "GitHub API", "AI/LLM"],
    highlights: ["Automated code quality analysis", "Public repo scanning via GitHub API", "Structured improvement feedback", "AI-driven code insights"],
    lang: "JavaScript",
    langColor: "#F7DF1E",
    type: "AI Tool",
  },
  {
    id: "03",
    name: "RAG-MedQuad",
    repo: "https://github.com/Sajjadecoder/RAG-MedQuad",
    description:
      "A Retrieval-Augmented Generation chatbot trained on the MedQuad medical Q&A dataset. Provides accurate, context-aware medical answers using vector search and LLM generation.",
    stack: ["Python", "Jupyter Notebook", "RAG", "Vector DB", "LLM"],
    highlights: ["Medical Q&A dataset (MedQuad)", "Vector similarity retrieval", "Context-aware LLM generation", "End-to-end RAG pipeline"],
    lang: "Jupyter Notebook",
    langColor: "#DA5B0B",
    type: "AI/ML",
  },
  {
    id: "04",
    name: "Vector Space Model",
    repo: "https://github.com/Sajjadecoder/Vector-Space-Model",
    description:
      "A Python-based Information Retrieval system implementing TF-IDF + cosine similarity over a Trump speeches corpus. Includes custom preprocessing, inverted indexing, and positional indexing.",
    stack: ["Python", "TF-IDF", "Cosine Similarity", "NLP"],
    highlights: ["Custom preprocessing pipeline", "Inverted + positional indexing", "TF-IDF weighted retrieval", "Trump speeches corpus"],
    lang: "Python",
    langColor: "#3572A5",
    type: "NLP / IR",
  },
  {
    id: "05",
    name: "CNN Projects",
    repo: "https://github.com/Sajjadecoder/CNN-Projects",
    description:
      "A collection of Convolutional Neural Network projects covering image classification, object detection, and other computer vision tasks — all built and trained from scratch.",
    stack: ["Python", "TensorFlow", "Keras", "NumPy", "Jupyter"],
    highlights: ["Multiple CNN architectures", "Image classification pipelines", "Model training & evaluation", "Jupyter-based experiments"],
    lang: "Jupyter Notebook",
    langColor: "#DA5B0B",
    type: "Deep Learning",
  },
  {
    id: "06",
    name: "ML Projects",
    repo: "https://github.com/Sajjadecoder/ML-Projects",
    description:
      "An arena for classical machine learning projects including regression, classification, and clustering. Implements end-to-end pipelines with 90%+ accuracy benchmarks.",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    highlights: ["End-to-end ML pipelines", "90%+ accuracy benchmarks", "Multiple algorithm implementations", "Data preprocessing & EDA"],
    lang: "Jupyter Notebook",
    langColor: "#DA5B0B",
    type: "Machine Learning",
  },
];

const TYPE_COLORS = {
  "Full-Stack": "text-[#A78BFA] border-[#A78BFA]/30",
  "AI Tool": "text-[#00D4FF] border-[#00D4FF]/30",
  "AI/ML": "text-[#34D399] border-[#34D399]/30",
  "NLP / IR": "text-[#F59E0B] border-[#F59E0B]/30",
  "Deep Learning": "text-[#F87171] border-[#F87171]/30",
  "Machine Learning": "text-[#34D399] border-[#34D399]/30",
};

export default function Projects() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 border-t border-[#1E2740]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
          <span className="font-['JetBrains_Mono'] text-[#00D4FF] text-xs tracking-[0.4em] uppercase">
            02 / projects
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 h-px bg-gradient-to-r from-[#00D4FF]/40 via-[#1E2740] to-transparent origin-left"
          />
        </motion.div>
        <motion.h2 variants={fadeUp} className="font-['JetBrains_Mono'] text-3xl md:text-4xl font-bold text-[#E8EDF5] mb-2">
          Things I've Built
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[#E8EDF5]/40 text-sm mb-14 font-['JetBrains_Mono']">
          click a card to expand details
        </motion.p>

        <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((proj) => {
            const isActive = activeId === proj.id;
            return (
              <motion.div
                key={proj.id}
                layout
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
                onClick={() => setActiveId(isActive ? null : proj.id)}
                className={`bg-[#0D1120] border cursor-pointer transition-colors duration-300 group ${
                  isActive
                    ? "border-[#00D4FF]/40 col-span-1 md:col-span-2 lg:col-span-1"
                    : "border-[#1E2740] hover:border-[#00D4FF]/20"
                }`}
              >
                {/* Card header — file explorer row */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1E2740]">
                  <span className="font-['JetBrains_Mono'] text-[#00D4FF]/40 text-xs">{proj.id}</span>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#E8EDF5]/30">📁</span>
                  <span className="font-['JetBrains_Mono'] text-sm text-[#E8EDF5]/80 flex-1 truncate group-hover:text-[#E8EDF5] transition-colors">
                    {proj.name}
                  </span>
                  <span
                    className={`font-['JetBrains_Mono'] text-[10px] border px-2 py-0.5 tracking-wider ${
                      TYPE_COLORS[proj.type] || "text-[#E8EDF5]/40 border-[#E8EDF5]/10"
                    }`}
                  >
                    {proj.type}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <p className="text-[#E8EDF5]/50 text-sm leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  {/* Stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-['JetBrains_Mono'] text-[10px] text-[#E8EDF5]/40 bg-[#1E2740] px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expanded highlights */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-[#1E2740] space-y-2">
                          {proj.highlights.map((h) => (
                            <div key={h} className="flex items-start gap-2">
                              <span className="text-[#00D4FF] text-xs mt-0.5">▸</span>
                              <span className="text-[#E8EDF5]/60 text-xs">{h}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer row */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#1E2740]">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: proj.langColor }}
                      />
                      <span className="font-['JetBrains_Mono'] text-[11px] text-[#E8EDF5]/30">
                        {proj.lang}
                      </span>
                    </div>
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-['JetBrains_Mono'] text-[11px] text-[#00D4FF]/60 hover:text-[#00D4FF] transition-colors"
                    >
                      view repo ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 text-center">
          <a
            href="https://github.com/Sajjadecoder"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['JetBrains_Mono'] text-sm text-[#E8EDF5]/40 hover:text-[#00D4FF] transition-colors tracking-wider"
          >
            → view all 27 repositories on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}