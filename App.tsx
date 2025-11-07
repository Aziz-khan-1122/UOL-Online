
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Stats from './components/Stats';
import Research from './components/Research';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Stats />
        <Research />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
