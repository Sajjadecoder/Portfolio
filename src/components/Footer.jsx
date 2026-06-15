export default function Footer() {
  return (
    <footer className="border-t border-[#1E2740] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-['JetBrains_Mono'] text-[#E8EDF5]/20 text-xs">
          © {new Date().getFullYear()} Sajjad Ahmed. All rights reserved.
        </span>
      </div>
    </footer>
  );
}