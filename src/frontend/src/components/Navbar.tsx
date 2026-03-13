import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  const handleLink = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.12_0.01_265/0.95)] backdrop-blur-xl shadow-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2 group bg-transparent border-0 p-0 cursor-pointer"
          data-ocid="nav.link"
          onClick={() => handleLink("#hero")}
        >
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "var(--brand-blue)" }}
          >
            <span className="text-white font-bold text-sm">P</span>
          </span>
          <span className="font-display font-bold text-lg text-white">
            Prime<span style={{ color: "var(--brand-blue)" }}>Pixel</span>{" "}
            Studio
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLink(link.href);
                }}
                className="px-4 py-2 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-white/80 hover:text-white transition-colors p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          data-ocid="nav.toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-strong border-t border-white/10">
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLink(link.href);
                  }}
                  className="block px-4 py-3 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
