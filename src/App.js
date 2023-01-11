import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/js/bootstrap.min.js";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
function App() {
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
    </>
  );
}

export default App;
