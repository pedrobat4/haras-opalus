import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Pillars from "./components/Pillars";
import Essence from "./components/Essence";
import Breed from "./components/Breed";
import Services from "./components/Services";
import CtaBand from "./components/CtaBand";
import Plantel from "./components/Plantel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Essence />
        <Breed />
        <Services />
        <CtaBand />
        <Plantel />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
