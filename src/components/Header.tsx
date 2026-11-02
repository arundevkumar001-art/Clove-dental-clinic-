import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: (service?: string, doctor?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top informational bar in light blue / navy tone with responsive hiding */}
      <div className="bg-sky-950 text-sky-100 text-xs py-2 px-3 sm:px-4 border-b border-sky-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="truncate">Samman Bazar Road, Bhogal, Jangpura</span>
            </span>
            <span className="hidden md:inline text-sky-700" aria-hidden="true">·</span>
            <span className="hidden md:flex items-center gap-1.5 text-sky-200/80">
              <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>10 AM – 8 PM (Mon–Sun)</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 font-semibold text-sky-300 hover:text-white transition-colors py-0.5"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[11px] sm:text-xs">{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar: Pure White with Light Blue Accents */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100/80 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2.5 group"
          >
            <span className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white text-sm font-bold shadow-xs group-hover:bg-sky-600 transition-colors">
              C
            </span>
            <span className="truncate">Clove Dental – Jangpura</span>
          </a>

          {/* Zone 2: 5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1">
              Our Services
            </a>
            <a href="#about" className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1">
              About Us
            </a>
            <a href="#dentists" className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1">
              Our Dentists
            </a>
            <a href="#gallery" className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1">
              Clinic Tour
            </a>
            <a href="#reviews" className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1">
              Patient Reviews
            </a>
            <a href="#contact" className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1">
              Contact & Location
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-lg transition-all shadow-xs flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg focus:outline-none transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with smooth presentation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-sky-100 px-4 sm:px-6 py-5 shadow-lg space-y-4 animate-in fade-in duration-150">
            <nav className="flex flex-col space-y-1 text-sm font-medium text-slate-700">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                <span>Our Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                <span>About Us & Sterilization</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#dentists"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                <span>Our Dentists</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                <span>Clinic Tour & Smile Results</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                <span>Patient Reviews (808 Verified)</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                <span>Contact & Directions</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-sky-50 text-sky-800 font-semibold text-xs hover:bg-sky-100 transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call +91 11 6927 1072</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex-1 py-3 px-4 rounded-lg bg-sky-600 text-white font-semibold text-xs hover:bg-sky-700 text-center transition-colors shadow-xs cursor-pointer min-h-[44px]"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
