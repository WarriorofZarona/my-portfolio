import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
