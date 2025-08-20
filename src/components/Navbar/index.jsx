import { useState } from "react";

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Visit", href: "#" },
    { label: "Exhibit", href: "#" },
    { label: "Speak", href: "#" },
    { label: "Content", href: "#" },
  ];

  return (
    <header className="px-4 sm:px-6 py-2 bg-transparent border-b border-white/60">
      <div className="max-w-7xl mx-auto relative flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-bold text-white">CIVIL 2026</div>

        {/* Desktop Navigation (centered) */}
        <nav className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-white visited:text-white hover:text-white transition-colors duration-200 font-medium">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle navigation"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="mt-2 flex flex-col items-center gap-2 rounded-lg bg-black/30 backdrop-blur px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="w-full text-center rounded-md py-2 text-white visited:text-white hover:bg-white/10 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}


