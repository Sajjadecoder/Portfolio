import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["about", "projects", "skills", "contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0E1A]/95 border-b border-[#1E2740]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-['JetBrains_Mono'] text-[#00D4FF] text-lg font-bold tracking-tight">
          <span className=" text-[#00D4FF] animate-pulse">SAJJAD AHMED</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="font-['JetBrains_Mono'] text-sm text-[#E8EDF5]/60 hover:text-[#00D4FF] transition-colors duration-200 tracking-wider uppercase"
              >
                <span className="text-[#00D4FF]/50"></span>{link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Sajjadecoder"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#00D4FF]/40 text-[#00D4FF] font-['JetBrains_Mono'] text-xs px-4 py-2 hover:bg-[#00D4FF]/10 transition-all duration-200 tracking-widest uppercase"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#E8EDF5]/70 hover:text-[#00D4FF] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0 w-0" : "w-4"}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0E1A]/98 border-b border-[#1E2740] px-6 py-6">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-['JetBrains_Mono'] text-sm text-[#E8EDF5]/60 hover:text-[#00D4FF] transition-colors block"
                >
                  <span className="text-[#00D4FF]/50">./</span>{link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}