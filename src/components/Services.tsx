import { TrendingUp, Code, Search, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description:
        "Drive targeted traffic and maximize ROI with our data-driven marketing campaigns across all digital channels.",
      color: "service-marketing",
      features: [
        "Google Ads Management",
        "Social Media Advertising",
        "Conversion Optimization",
      ],
    },
    {
      icon: Code,
      title: "Website Development",
      description:
        "Create stunning, responsive websites that convert visitors into customers with our modern development approach.",
      color: "service-development",
      features: [
        "Custom Web Design",
        "E-commerce Solutions",
        "Mobile Optimization",
      ],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improve your search rankings and organic visibility with our comprehensive SEO strategies and techniques.",
      color: "service-seo",
      features: ["Keyword Research", "Technical SEO", "Content Strategy"],
    },
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-6 bg-background flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to accelerate your business
            growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: `hsl(var(--${service.color}) / 0.1)`,
                    }}
                  >
                    <IconComponent
                      className="w-8 h-8"
                      style={{ color: `hsl(var(--${service.color}))` }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <Check
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: `hsl(var(--${service.color}))` }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;