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
import ReactGA from 'react-ga4';


ReactGA.initialize('G-T5R2Z5S2VZ'); 
ReactGA.send({ hitType: 'pageview', 
  page: window.location.pathname  });
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-cocon'><Navbar />
    <Hero />
    <About />
    <Services />
    <HowItWorks />
    <Testimonials />
     <NewsLetter />
    <Footer />
   
    </div>
    
  </StrictMode>,
)
