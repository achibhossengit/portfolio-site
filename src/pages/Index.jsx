import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import CareerRoadmap from "../components/CareerRoadmap";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <CareerRoadmap />
      <Footer />
    </main>
  );
};

export default Index;
