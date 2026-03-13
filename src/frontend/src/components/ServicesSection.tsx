import { Layout, Monitor, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Business Website Development",
    description:
      "Custom, professional websites tailored to your brand identity and business goals. Built for performance and impact.",
    accent: "265",
    numeral: "01",
  },
  {
    icon: Layout,
    title: "Landing Page Design",
    description:
      "High-converting landing pages designed to capture leads and drive sales. Optimized for maximum engagement.",
    accent: "145",
    numeral: "02",
  },
  {
    icon: ShoppingCart,
    title: "Product / Ecommerce Website",
    description:
      "Beautiful online stores that showcase your products and maximize conversions. Seamless shopping experiences.",
    accent: "220",
    numeral: "03",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.56 0.22 265 / 0.07) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "oklch(0.56 0.22 265 / 0.15)",
              border: "1px solid oklch(0.56 0.22 265 / 0.3)",
              color: "oklch(0.72 0.18 265)",
            }}
          >
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-gradient-blue">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-ocid={`services.item.${i + 1}`}
                className={`fade-in fade-in-delay-${i + 1} group glass rounded-2xl p-8 hover:scale-[1.03] hover:border-white/25 transition-all duration-300 cursor-default relative overflow-hidden`}
                style={{ transitionDelay: `${i * 0.1}s` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    `0 0 40px oklch(0.56 0.22 ${service.accent} / 0.25)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Large faded numeral decorator */}
                <span
                  aria-hidden="true"
                  className="absolute -top-2 -right-1 font-display font-extrabold text-8xl leading-none select-none pointer-events-none"
                  style={{
                    color: "oklch(0.95 0 0 / 0.05)",
                    fontSize: "7rem",
                  }}
                >
                  {service.numeral}
                </span>

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10"
                  style={{
                    background: `oklch(0.56 0.22 ${service.accent} / 0.15)`,
                    border: `1px solid oklch(0.56 0.22 ${service.accent} / 0.3)`,
                  }}
                >
                  <Icon
                    size={24}
                    style={{ color: `oklch(0.7 0.2 ${service.accent})` }}
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm relative z-10">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
