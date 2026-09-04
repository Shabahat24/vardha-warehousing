import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import Hero from './components/sections/Hero';
import FacilitySpecs from './components/sections/FacilitySpecs';
import TrustedClients from './components/sections/TrustedClients';
import FAQ from './components/sections/FAQ';
import SpaceCalculator from './components/features/SpaceCalculator';
import BookingForm from './components/features/BookingForm';
import DemoPaymentModal from './components/features/DemoPaymentModal';

export default function App() {
  const [bookingQuote, setBookingQuote] = useState({
    area: 2500,
    height: 24,
    rate: 60,
    total: 150000,
    status: 'VALID'
  });
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProceedToBooking = (quote) => {
    setBookingQuote(quote);
    scrollToSection('book');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <Header onNavigate={scrollToSection} />
      
      <main>
        <Hero 
          onCalculateClick={() => scrollToSection('calculator')} 
          onFacilityClick={() => scrollToSection('facility')} 
        />
        <SpaceCalculator onProceedToBooking={handleProceedToBooking} />
        <FacilitySpecs />
        <BookingForm 
          bookingQuote={bookingQuote} 
          onOpenDemoPayment={() => setIsPaymentModalOpen(true)} 
        />
        <TrustedClients />
        <FAQ />
      </main>

      <Footer />
      <FloatingWhatsApp />
      
      <DemoPaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
        quote={bookingQuote} 
      />
    </div>
  );
}