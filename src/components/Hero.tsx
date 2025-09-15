import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-laptops.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Bring Your Business <span className="text-cyan-300">Online</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-lg">
              We specialize in performance marketing, website development, and
              SEO to help your business thrive in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold"
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="hero"
                className="px-8 py-6 text-lg font-semibold"
              >
                View Our Work
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Modern workspace with analytics dashboards"
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-orange-400/20 rounded-2xl blur-3xl -z-10 transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;