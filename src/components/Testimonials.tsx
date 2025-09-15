import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Get Us Live transformed our online presence completely. Our website traffic increased by 300% and sales doubled within 6 months.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Mike Chen",
      role: "Founder, Digital Dynamics",
      content:
        "Their SEO expertise is unmatched. We now rank #1 for our main keywords and our organic traffic has skyrocketed.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Lisa Rodriguez",
      role: "Marketing Director, GrowthCo",
      content:
        "Professional, reliable, and results-driven. They delivered our project on time and exceeded all expectations.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from real businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;