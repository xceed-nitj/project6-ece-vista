// src/components/NavbarBluePink.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarBluePink() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  const navLeft = [
    { label: "Home", href: "/" },
    { label: "Tracks", href: "/68adccc0e8f579b7ff66327d" },
    { label: "Organising Heads", href: "/68adcccfe8f579b7ff66329a" },
    { label: "Committees", href: "/6863b4857b0acf10390f6b39" },
  ];

  const navRight = [
    { label: "Paper Submission", href: "/68875b0d959ec9c788fac137" },
    {
      label: "Registration",
      subItems: [
        { label: "Registration Fee", href: "/68adcd02e8f579b7ff663404" },
        { label: "Registration Link", href: "/68adccfce8f579b7ff6633e8" },
      ],
    },
    { label: "Location", href: "/68adccc0e8f579b7ff66327d" },
  ];

  const isActive = (to) => to && (pathname === to || pathname.endsWith(to));

  const linkBase =
    "group relative inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white transition-colors";
  const linkActive = "ring-1 ring-white/20 bg-white/10";

  return (
    <header className="sticky top-0 z-50">
      {/* Blue bar */}
      <div className="bg-blue-950 border-b border-blue-500/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Row: brand left, centered nav (absolute), toggle right */}
          <div className="h-14 relative flex items-center justify-between text-white">
            {/* Brand (left) */}
            <Link
              to="/"
              className="text-xl sm:text-2xl font-extrabold tracking-wide"
            >
              VISTA&nbsp;2026
            </Link>

            {/* Desktop nav centered */}
            <nav className="hidden md:flex items-center gap-2 absolute translate-x-1/2">
              {[...navLeft, ...navRight].map((it) =>
                it.subItems ? (
                  <div key={it.label} className="relative group">
                    <button className={`${linkBase}`} aria-haspopup="true">
                      {it.label}
                      {/* underline on hover */}
                      <span className="pointer-events-none absolute left-3 right-3 -bottom-1 h-0.5 bg-pink-400 scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100" />
                    </button>
                    {/* Dropdown */}
                    <div className="pointer-events-none opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-150 absolute left-0 mt-2 w-64 rounded-xl bg-blue-900 ring-1 ring-white/15 shadow-xl p-1">
                      {it.subItems.map((s) => (
                        <Link
                          key={s.label}
                          to={s.href}
                          className={`block px-3 py-2 rounded-lg text-sm text-white/90 hover:bg-white/10 hover:text-white ${
                            isActive(s.href) ? "bg-white/10 text-white" : ""
                          }`}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={it.label}
                    to={it.href || "/"}
                    className={`${linkBase} ${isActive(it.href) ? linkActive : ""}`}
                  >
                    {it.label}
                    {/* Pink underline (active + hover) */}
                    <span
                      className={[
                        "pointer-events-none absolute left-3 right-3 -bottom-1 h-0.5 bg-pink-400 rounded-full",
                        isActive(it.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                      ].join(" ")}
                    />
                  </Link>
                )
              )}
            </nav>

            {/* Mobile toggle (right) */}
            <button
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div className="md:hidden border-t border-blue-500/40">
            <nav className="mx-4 my-3 rounded-2xl bg-blue-800 ring-1 ring-white/10 p-2 space-y-1">
              {[...navLeft, ...navRight].map((it, i) =>
                it.subItems ? (
                  <div key={it.label} className="rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenGroup(openGroup === i ? null : i)}
                      className="w-full flex items-center justify-between px-3 py-2 text-left rounded-xl text-white/90 hover:bg-white/10"
                    >
                      <span className="text-sm font-semibold">{it.label}</span>
                      <svg
                        className={`h-5 w-5 transition-transform ${openGroup === i ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
                      </svg>
                    </button>
                    {openGroup === i && (
                      <div className="pb-1">
                        {it.subItems.map((s) => (
                          <Link
                            key={s.label}
                            to={s.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block mx-2 my-1 px-3 py-2 rounded-lg text-sm text-white/90 hover:bg-white/10 ${
                              isActive(s.href) ? "bg-white/10 text-white" : ""
                            }`}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={it.label}
                    to={it.href || "/"}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 rounded-xl text-sm font-semibold text-white/90 hover:bg-white/10 ${
                      isActive(it.href) ? "bg-white/10 text-white" : ""
                    }`}
                  >
                    {/* Simple pink indicator on mobile when active */}
                    <span className="inline-block mr-2 w-1.5 h-1.5 rounded-full bg-pink-400 align-middle" />
                    {it.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
