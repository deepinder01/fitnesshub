import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/js/bootstrap.min.js";
import Header from './components/Header/Header';
import About from './components/About/About';
import Team from './components/Team/Team';
import Price from './components/Price/Price';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  AOS.init();
  return (
    <>
      {/* Header */}
      <Header />
      <Routes>
        {/* Home */}
        <Route
          path='/'
          element={<Home />}
        />
        {/* About section */}
        <Route
          path='/about'
          element={<About />}
        />

        {/* Team Section */}
        <Route
          path='/team'
          element={<Team />}
        />

        {/* Price */}
        <Route
          path='/price'
          element={<Price />}
        />

        {/* Contact */}
        <Route
          path='/contact'
          element={<Contact />}
        />
      </Routes>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
