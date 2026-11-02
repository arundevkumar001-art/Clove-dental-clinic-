import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-sky-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 sm:space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Brand & Clinic Information */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white text-sm font-bold shadow-xs">
                C
              </span>
              <span className="text-base font-bold text-white tracking-tight">
                {CLINIC_INFO.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {CLINIC_INFO.aboutText}
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-sky-300 transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{CLINIC_INFO.openingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <div className="font-bold text-white tracking-wider uppercase text-[11px]">
              Our Treatments
            </div>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenBooking(s.name)}
                    className="hover:text-sky-300 transition-colors text-left cursor-pointer"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-3">
            <div className="font-bold text-white tracking-wider uppercase text-[11px]">
              Quick Links
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-sky-300 transition-colors">
                  About Clove Dental
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Dental Services
                </a>
              </li>
              <li>
                <a href="#dentists" className="hover:text-sky-300 transition-colors">
                  Our Dentists & Specialists
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-sky-300 transition-colors">
                  Clinic Tour & Before/After
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-300 transition-colors">
                  Patient Reviews (808 Verified)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-300 transition-colors">
                  Directions & Metro Access
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Clinic Hours & Booking Action */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <div className="font-bold text-white tracking-wider uppercase text-[11px]">
              Appointments
            </div>
            <p className="text-slate-400 text-xs">
              Open 7 days a week from 10 AM to 8 PM on Samman Bazar Road, Bhogal.
            </p>
            <button
              onClick={() => onOpenBooking()}
              className="w-full py-2.5 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold text-xs transition-colors shadow-xs text-center block cursor-pointer min-h-[40px]"
            >
              Book an Appointment
            </button>
            <div className="pt-2 text-[11px] text-slate-500">
              Emergency toothache walk-ins accommodated daily.
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Clove Dental – Jangpura. Multi-speciality dental clinic.
          </div>

          {/* Explicit disclaimer from prompt */}
          <div className="text-sky-300/90 font-medium text-center sm:text-right">
            Notice: {CLINIC_INFO.disclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
};
