import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './Pages/Navbar.jsx'
import Hero from './Pages/Hero.jsx'
import About from './Pages/About';
import Services from './Pages/Services';
import HowItWorks from './Pages/HowItWorks';
import Testimonials from './Pages/Testimonials';
import NewsLetter from './Pages/NewsLetter';
import Footer from './Pages/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-cocon'><Navbar />
    <Hero />
    <About />
    <Services />
    <HowItWorks />
    <Testimonials />
    <Footer />
    </div>
    
  </StrictMode>,
)
