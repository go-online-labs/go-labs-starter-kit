import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const mailTo = () => {
    window.location.assign(
      "mailto:contact@getuslive.com?subject=Inquiry about"
    );
  };
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-cta relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center text-white relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Get Your Business Live?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of successful businesses that have transformed their
          online presence with our expert services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold"
            onClick={mailTo}
          >
            Get Quote
          </Button>
          <Button
            size="lg"
            variant="hero"
            className="px-8 py-6 text-lg font-semibold"
          >
            View Pricing
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-300 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CallToAction;
