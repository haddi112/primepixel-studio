import { Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="relative py-12 px-6"
      style={{
        background: "oklch(0.09 0.01 265)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "var(--brand-blue)" }}
            >
              <span className="text-white font-bold text-sm">P</span>
            </span>
            <span className="font-display font-bold text-white">
              Prime<span style={{ color: "var(--brand-blue)" }}>Pixel</span>{" "}
              Studio
            </span>
          </div>

          {/* Center copyright */}
          <div className="text-center">
            <p className="text-white/40 text-sm">
              © {year} PrimePixel Studio. All rights reserved.
            </p>
            <p className="text-white/25 text-xs mt-1">
              Built with ❤️ using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/50 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>

          {/* Email */}
          <a
            href="mailto:muhammadhaddi74@gmail.com"
            className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm"
          >
            <Mail size={14} />
            <span>muhammadhaddi74@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
