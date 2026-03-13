export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.62)" }}
      />
      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, oklch(0.56 0.22 265 / 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, oklch(0.72 0.22 145 / 0.08) 0%, transparent 50%)",
        }}
      />

      {/* Hero content — free-floating, no glass card */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="hero-fade-in">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "oklch(0.56 0.22 265 / 0.2)",
              border: "1px solid oklch(0.56 0.22 265 / 0.4)",
              color: "oklch(0.75 0.18 265)",
            }}
          >
            Web Development Studio
          </span>
        </div>

        {/* Decorative accent line above headline */}
        <div className="hero-fade-in-delay flex justify-center mb-6">
          <div
            className="h-px w-32"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.56 0.22 265 / 0.8), oklch(0.72 0.22 145 / 0.6), transparent)",
            }}
          />
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 hero-fade-in-delay">
          Professional Websites{" "}
          <span className="text-gradient-blue">For Modern</span> Businesses
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed hero-fade-in-delay-2">
          We create fast, responsive, and visually impressive websites for
          startups, businesses, and personal brands.
        </p>

        <div className="hero-fade-in-delay-2">
          <button
            type="button"
            onClick={scrollToContact}
            data-ocid="hero.primary_button"
            className="btn-primary group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg"
          >
            <span>Get Your Website</span>
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
