import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreActivities from "@/components/CoreActivities";
import Impact from "@/components/Impact";
import Programs from "@/components/Programs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreActivities />
        <Impact />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
