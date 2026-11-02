import React from 'react';
import { Star, ShieldCheck, Phone, Calendar, Clock, ChevronRight, Award, Sparkles, MapPin } from 'lucide-react';
import { CLINIC_INFO, CLINIC_STATS } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: (service?: string) => void;
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenAssessment }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-sky-50/30 pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24 border-b border-sky-100">
      {/* Subtle light blue radial background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#0284c7 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Clean unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-sky-700 tracking-wide uppercase">
              <span>Jangpura, New Delhi</span>
              <span aria-hidden="true">·</span>
              <span>Multi-Speciality Dental Clinic</span>
              <span aria-hidden="true">·</span>
              <span>Samman Bazar Road</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.14] text-balance">
              Your Smile, <span className="text-sky-600">Our Priority.</span>
            </h1>

            {/* Exact hero text from user brief */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl text-balance">
              Professional dental care for healthier smiles. Book an appointment with our dental team.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
              Experience gentle, pain-free treatments from board-certified dental surgeons right in Bhogal, Jangpura. From routine scaling to advanced single-sitting root canals and lifetime dental implants.
            </p>

            {/* Action buttons with high-touch accessibility */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-3 sm:py-3.5 rounded-lg bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs text-center flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="px-4 py-3 sm:py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenAssessment}
                className="px-4 py-3 sm:py-3.5 rounded-lg bg-white border border-sky-200 hover:border-sky-400 text-slate-700 font-medium text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-1.5 hover:bg-sky-50/50 cursor-pointer min-h-[44px]"
              >
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span>Smile Assessment</span>
              </button>
            </div>

            {/* Trust and Social Proof claim-to-proof strip */}
            <div className="pt-3 sm:pt-4 border-t border-sky-100 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-slate-900">4.9 / 5</span>
                <span className="text-slate-500">(808 Google Reviews)</span>
              </div>
              <span className="text-slate-300 hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-1 text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>10-Step Autoclave Sterilization</span>
              </div>
              <span className="text-slate-300 hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-1 text-slate-700">
                <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Open 10 AM – 8 PM (7 Days)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Clinic Feature Preview Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-5 sm:p-7 space-y-5">
              {/* Card Header */}
              <div className="flex items-start justify-between border-b border-sky-50 pb-4">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Clove Dental – Jangpura</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Samman Bazar Road, Bhogal, New Delhi</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-semibold text-sky-700 flex items-center gap-1 justify-end">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    <span>Clinic Open Today</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">10:00 AM – 8:00 PM</div>
                </div>
              </div>

              {/* Quick Service Selection Shortcuts */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Select Treatment Needed
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => onOpenBooking('Teeth Cleaning & Scaling')}
                    className="p-3 text-left rounded-lg border border-slate-200 hover:border-sky-400 hover:bg-sky-50/50 transition-all group cursor-pointer"
                  >
                    <div className="font-semibold text-slate-800 group-hover:text-sky-700 flex items-center justify-between">
                      <span>Teeth Cleaning</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600" />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Plaque & stain removal</p>
                  </button>

                  <button
                    onClick={() => onOpenBooking('Root Canal Treatment (RCT)')}
                    className="p-3 text-left rounded-lg border border-slate-200 hover:border-sky-400 hover:bg-sky-50/50 transition-all group cursor-pointer"
                  >
                    <div className="font-semibold text-slate-800 group-hover:text-sky-700 flex items-center justify-between">
                      <span>Root Canal (RCT)</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600" />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Pain-free rotary care</p>
                  </button>

                  <button
                    onClick={() => onOpenBooking('Braces & Clear Aligners')}
                    className="p-3 text-left rounded-lg border border-slate-200 hover:border-sky-400 hover:bg-sky-50/50 transition-all group cursor-pointer"
                  >
                    <div className="font-semibold text-slate-800 group-hover:text-sky-700 flex items-center justify-between">
                      <span>Braces & Aligners</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600" />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Orthodontic alignment</p>
                  </button>

                  <button
                    onClick={() => onOpenBooking('Dental Implants')}
                    className="p-3 text-left rounded-lg border border-slate-200 hover:border-sky-400 hover:bg-sky-50/50 transition-all group cursor-pointer"
                  >
                    <div className="font-semibold text-slate-800 group-hover:text-sky-700 flex items-center justify-between">
                      <span>Dental Implants</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600" />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Tooth replacement</p>
                  </button>
                </div>
              </div>

              {/* Fast Booking CTA inside preview */}
              <div className="pt-1">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-3 px-4 rounded-lg bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold text-xs tracking-wide uppercase transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Choose Date & Preferred Time Slot</span>
                </button>
              </div>

              {/* Patient safety reminder notice */}
              <div className="bg-sky-50/60 rounded-lg p-3 text-[11px] text-slate-600 border border-sky-100 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Strict 10-step sterilization protocol followed for every single patient consultation.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column KPI strip below the hero split */}
        <div className="mt-10 sm:mt-14 lg:mt-16 pt-6 sm:pt-8 border-t border-sky-100 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CLINIC_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1 bg-white/70 lg:bg-transparent p-3 sm:p-0 rounded-xl border border-sky-50 lg:border-0">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-800">{stat.label}</div>
              <div className="text-[11px] sm:text-xs text-slate-500">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
