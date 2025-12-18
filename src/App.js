import Navbar from './components/Navbar';
import './assets/css/animate.css';
import './assets/css/flex-slider.css';
import './assets/css/fontawesome.css';
import './assets/css/owl.css';
import './assets/css/templatemo-tale-seo-agency.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Faq from './pages/Faq';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;