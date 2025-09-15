import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OurTeam from "@/components/OurTeam";
// import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <OurTeam />
      {/* <Testimonials /> */}
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
