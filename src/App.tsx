import Navbar from './components/Navbar'
import HeroSection from './Sections/HeroSection';
import AboutUsSection from './Sections/AboutUsSection';
import ServicesSection from './Sections/ServicesSection';
import ContactSection from './Sections/ContactSection';
import Footer from './components/Footer';
import './App.css'

function App() {
  
  return (
   
    <div> 
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      
    </div>
  )
}

export default App
