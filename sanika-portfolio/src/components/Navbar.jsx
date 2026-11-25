
import { useState } from "react";

const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FAF8FF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between">

        <a
          href="#home"
          className="text-2xl font-bold text-[#7651C9] tracking-wide"
        >
          Sanika<span className="text-[#B69AE8]">.</span>
        </a>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="flex items-center gap-3 px-5 py-2.5
            rounded-full border border-[#DCCCF7]
            text-[#6545A8] font-medium
            hover:bg-[#EEE7FC] transition-all duration-300"
          >
            Explore

            <span className={`text-xs transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}>
              ▼
            </span>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-3 w-56
            bg-white rounded-2xl shadow-xl
            border border-[#E9DFFA] p-2 z-50">

              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl
                  text-gray-700 text-sm
                  hover:bg-[#F1EBFC]
                  hover:text-[#7651C9]
                  transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
