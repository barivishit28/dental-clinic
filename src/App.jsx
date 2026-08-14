import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Gallery from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQS";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Navbar /> 
      
      <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      </main> 
      <Footer />   
    </>
  );
}

export default App; 