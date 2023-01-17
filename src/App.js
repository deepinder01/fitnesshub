import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/js/bootstrap.min.js";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Amenities from './components/Amenities/Amenities';
import Team from './components/Team/Team';
import Price from './components/Price/Price';
import Testimonials from './components/Testimonials/Testimonials';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './components/Contact/Contact';

function App() {
  AOS.init();
  return (
    <>
      {/* Header */}
      <Header/>
      {/* Hero section */}
      <Hero/>
      {/* Services section */}
      <Services/>
      {/* About section */}
      <About/>
      {/* Amenities section */}
      <Amenities/>
      {/* Team Section */}
      <Team/>
      {/* Price */}
      <Price/>
      {/* Testimonials */}
      <Testimonials/>
      {/* Contact */}
      <Contact/>
    </>
  );
}

export default App;
