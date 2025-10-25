import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import SimpleNavBar from './components/SimpleNavBar';
import HeroImageGridSection from './components/HeroImageGridSection'; 
import BrandStorySection from './components/BrandStorySection'; 
import CategoryShowcase from './components/CategoryShowcase';
import DualImageShowcase from './components/DualImageShowcase';
import EditorialTestimonial from './components/EditorialTestimonial';
import PartnerLogoBar from './components/PartnerLogoBar';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
      <SimpleNavBar />
      <main>        
        <HeroImageGridSection />
        <BrandStorySection />
        <CategoryShowcase />
        <DualImageShowcase />
        <EditorialTestimonial />
        <PartnerLogoBar />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;