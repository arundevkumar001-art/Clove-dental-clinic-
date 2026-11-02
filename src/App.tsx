/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { DentistsSection } from './components/DentistsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { SmileAssessmentModal } from './components/SmileAssessmentModal';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from './data/clinicData';

export default function App() {
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);
  const [bookingDoctor, setBookingDoctor] = useState<string | undefined>(undefined);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  const scrollToBooking = (service?: string, doctor?: string) => {
    if (service) setBookingService(service);
    if (doctor) setBookingDoctor(doctor);

    const bookingEl = document.getElementById('book-appointment');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAssessmentResult = (recommendedService: string) => {
    setBookingService(recommendedService);
    scrollToBooking(recommendedService);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
      {/* Navigation Header */}
      <Header onOpenBooking={() => scrollToBooking()} />

      {/* Main Content Sections with mobile bottom padding to accommodate floating bar */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* Hero Section */}
        <Hero
          onOpenBooking={(service) => scrollToBooking(service)}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* Core Services Section */}
        <ServicesSection
          onSelectServiceForBooking={(serviceName) => scrollToBooking(serviceName)}
        />

        {/* About Us & Sterilization Protocol Section */}
        <AboutSection />

        {/* Our Experienced Dental Specialists */}
        <DentistsSection
          onSelectDoctorForBooking={(doctorName) => scrollToBooking(undefined, doctorName)}
        />

        {/* Clinic Facilities Tour & Interactive Before/After Smile Slider */}
        <GallerySection />

        {/* Verified Patient Reviews (808 Reviews, 4.9 Rating) */}
        <ReviewsSection />

        {/* Online Appointment Booking Form */}
        <BookingSection
          initialService={bookingService}
          initialDoctor={bookingDoctor}
        />

        {/* Contact, Directions & Opening Hours */}
        <ContactSection />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenBooking={() => scrollToBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={(service) => scrollToBooking(service)} />

      {/* Interactive Smile Assessment Modal */}
      <SmileAssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onSelectRecommendedService={handleAssessmentResult}
      />

      {/* Floating Mobile Quick Action Bar (Light Blue & White styling, strictly capped under 15% mobile viewport) */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-30 bg-white/95 backdrop-blur-md rounded-xl p-2 border border-sky-100 shadow-xl flex items-center justify-between gap-2">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex-1 py-2.5 px-3 rounded-lg bg-sky-50 text-sky-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors min-h-[42px] border border-sky-100"
        >
          <Phone className="w-3.5 h-3.5 text-sky-600" />
          <span>Call Clinic</span>
        </a>

        <button
          onClick={() => scrollToBooking()}
          className="flex-1 py-2.5 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer min-h-[42px]"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
}
