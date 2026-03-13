const portfolioItems = [
  {
    image: "/assets/generated/portfolio-1.dim_800x600.jpg",
    title: "Corporate Business Website",
    tag: "Business",
  },
  {
    image: "/assets/generated/portfolio-2.dim_800x600.jpg",
    title: "Startup Landing Page",
    tag: "Landing Page",
  },
  {
    image: "/assets/generated/portfolio-3.dim_800x600.jpg",
    title: "Premium Ecommerce Store",
    tag: "Ecommerce",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-28 px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, oklch(0.72 0.22 145 / 0.05) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "oklch(0.72 0.22 145 / 0.12)",
              border: "1px solid oklch(0.72 0.22 145 / 0.3)",
              color: "oklch(0.75 0.18 145)",
            }}
          >
            Recent Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-gradient-green">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <div
              key={item.title}
              data-ocid={`portfolio.item.${i + 1}`}
              className={`fade-in fade-in-delay-${i + 1} group relative rounded-2xl overflow-hidden cursor-pointer`}
              style={{ aspectRatio: "4/3" }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Default overlay for depth */}
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                }}
              />

              {/* Hover glassmorphism overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-400"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, oklch(0.12 0.01 265 / 0.6) 100%)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2"
                    style={{
                      background: "oklch(0.56 0.22 265 / 0.3)",
                      border: "1px solid oklch(0.56 0.22 265 / 0.4)",
                      color: "oklch(0.8 0.15 265)",
                    }}
                  >
                    {item.tag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Always-visible title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-display text-base font-semibold text-white drop-shadow-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
