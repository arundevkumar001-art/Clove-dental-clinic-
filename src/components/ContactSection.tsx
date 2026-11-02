import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, AlertTriangle, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const ContactSection: React.FC = () => {
  // Check if current time in India IST (UTC+5:30) is between 10 AM and 8 PM
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istDate = new Date(utc + 3600000 * 5.5);
  const currentHour = istDate.getHours();
  const isOpenNow = currentHour >= 10 && currentHour < 20;

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2 sm:space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Clinic Visit & Location
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Visit Clove Dental – Jangpura, New Delhi
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Conveniently located on Samman Bazar Road in Bhogal, easily accessible from Jangpura Extension, Defence Colony, Lajpat Nagar, and Nizamuddin.
          </p>
        </div>

        {/* 2-Column Grid: Left Contact & Hours, Right Interactive Map Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            {/* Status card */}
            <div className="bg-sky-50/40 rounded-2xl border border-sky-100 p-5 sm:p-6 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-sky-100">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${isOpenNow ? 'bg-sky-500' : 'bg-slate-400'}`}></div>
                  <span className="text-xs font-bold text-slate-900">
                    {isOpenNow ? 'Clinic Open Now' : 'Clinic Reopens at 10:00 AM'}
                  </span>
                </div>
                <span className="text-xs text-slate-600 font-mono">10 AM – 8 PM</span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs space-y-1">
                  <div className="font-bold text-slate-900 text-sm">Clinic Address</div>
                  <div className="text-slate-700 font-medium">{CLINIC_INFO.address}</div>
                  <div className="text-slate-500 text-[11px]">{CLINIC_INFO.landmark}</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white shrink-0">
                  <Phone className="w-4 h-4 text-sky-400" />
                </div>
                <div className="text-xs space-y-1">
                  <div className="font-bold text-slate-900 text-sm">Direct Phone Inquiry</div>
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="text-sky-700 font-bold hover:underline block text-sm"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  <div className="text-slate-500 text-[11px]">Appointment booking & patient assistance</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                  <Clock className="w-4 h-4 text-sky-700" />
                </div>
                <div className="text-xs space-y-1">
                  <div className="font-bold text-slate-900 text-sm">Opening Hours</div>
                  <div className="text-slate-700 font-medium">{CLINIC_INFO.openingHours}</div>
                  <div className="text-slate-500 text-[11px]">{CLINIC_INFO.daysOpen}</div>
                </div>
              </div>

              {/* Transit & Landmark Guide */}
              <div className="pt-4 border-t border-sky-100 space-y-2 text-xs text-slate-600">
                <div className="font-bold text-slate-900">How to Reach Us:</div>
                <div className="flex items-start gap-2">
                  <Navigation className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>By Delhi Metro:</strong> Jangpura Metro Station (Violet Line, Exit 2) — 5 mins by auto/e-rickshaw.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Navigation className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Landmark:</strong> Samman Bazar, Bhogal Main Market road.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-2xs min-h-[44px]"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="py-3 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Call Clinic</span>
                </a>
              </div>
            </div>

            {/* Verification Disclaimer Box */}
            <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200/70 text-xs text-sky-950 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">{CLINIC_INFO.disclaimer}</span> Public listing sample information verified for Jangpura branch operations.
              </div>
            </div>
          </div>

          {/* Right Map Preview Container */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-sky-100 overflow-hidden shadow-xs flex flex-col">
            {/* Custom stylized map canvas */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full bg-slate-100 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
              {/* Geometric Street Grid Simulation */}
              <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
                backgroundSize: '36px 36px, 72px 72px, 72px 72px'
              }}></div>

              {/* Road lines simulation */}
              <div className="absolute w-full h-8 bg-sky-100/80 -rotate-12 translate-y-6"></div>
              <div className="absolute h-full w-8 bg-sky-100/80 rotate-45 -translate-x-12"></div>
              <div className="absolute w-full h-12 bg-white/80 -rotate-6 flex items-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-6">
                  Samman Bazar Road, Bhogal
                </span>
              </div>

              {/* Central Pin Callout */}
              <div className="relative z-10 bg-white rounded-xl shadow-lg border border-sky-100 p-4 max-w-xs text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-sky-600 text-white mx-auto flex items-center justify-center shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Clove Dental – Jangpura</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Samman Bazar Road, Bhogal, New Delhi 110014</p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-1 text-[11px] font-semibold text-sky-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>4.9 ★ Rating · 808 Reviews</span>
                </div>
              </div>
            </div>

            {/* Map footer action bar */}
            <div className="p-3.5 sm:p-4 bg-white border-t border-sky-100 flex flex-wrap items-center justify-between gap-2 sm:gap-3 text-xs">
              <div className="text-slate-600 text-[11px] sm:text-xs">
                <span>Coordinates: <strong>28.5828° N, 77.2472° E</strong></span>
                <span className="mx-2 text-slate-300">·</span>
                <span>South Delhi District</span>
              </div>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
