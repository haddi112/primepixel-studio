import { Award, Clock, Zap } from "lucide-react";

const stats = [
  { icon: Award, value: "50+", label: "Projects Delivered" },
  { icon: Zap, value: "100%", label: "Client Satisfaction" },
  { icon: Clock, value: "Fast", label: "Delivery" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 px-6 relative"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.12 0.01 265) 0%, oklch(0.10 0.015 240) 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, oklch(0.56 0.22 265 / 0.08) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left decorative column */}
          <div className="fade-in order-2 lg:order-1">
            <div className="relative">
              {/* Big decorative element */}
              <div className="rounded-3xl p-10 glass relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--brand-blue), var(--brand-green))",
                  }}
                />
                {/* Big P letter as decor */}
                <div
                  className="font-display text-[12rem] font-black leading-none select-none text-center"
                  style={{ color: "oklch(0.56 0.22 265 / 0.08)" }}
                >
                  P
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
                  <span className="font-display text-5xl font-black text-gradient-blue block mb-2">
                    PrimePixel
                  </span>
                  <span className="font-display text-2xl font-semibold text-white/60">
                    Studio
                  </span>
                  <p className="mt-6 text-white/50 text-sm max-w-xs">
                    Building digital experiences that convert visitors into
                    clients.
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className={`fade-in fade-in-delay-${i + 1} glass rounded-xl p-4 text-center`}
                    >
                      <Icon
                        size={18}
                        className="mx-auto mb-2"
                        style={{ color: "var(--brand-green)" }}
                      />
                      <div className="font-display text-2xl font-black text-white">
                        {stat.value}
                      </div>
                      <div className="text-white/50 text-xs mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right text column */}
          <div className="fade-in order-1 lg:order-2">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                background: "oklch(0.56 0.22 265 / 0.15)",
                border: "1px solid oklch(0.56 0.22 265 / 0.3)",
                color: "oklch(0.72 0.18 265)",
              }}
            >
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-gradient-blue">Us</span>
            </h2>
            <div className="space-y-4 text-white/65 leading-relaxed">
              <p>
                PrimePixel Studio is a modern and creative web development
                studio dedicated to building clean, fast, and visually
                impressive websites for businesses, startups, and personal
                brands.
              </p>
              <p>
                Our mission is to help businesses establish a strong and
                professional online presence through modern website design,
                responsive layouts, and user-friendly experiences.
              </p>
              <p>
                We specialize in creating business websites, landing pages, and
                product-focused websites that are designed to look professional,
                load quickly, and work perfectly on all devices.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "oklch(0.56 0.22 265 / 0.2)",
                  border: "1px solid oklch(0.56 0.22 265 / 0.3)",
                }}
              >
                <span className="text-sm">✉</span>
              </div>
              <a
                href="mailto:muhammadhaddi74@gmail.com"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                muhammadhaddi74@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
