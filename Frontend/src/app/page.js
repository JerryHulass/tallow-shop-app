import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import FeaturesSection from "../components/home/FeaturesSection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-zinc-50">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}