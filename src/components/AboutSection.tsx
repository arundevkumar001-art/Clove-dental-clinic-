import React, { useState } from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, Award, Microscope, HeartHandshake, FileCheck } from 'lucide-react';
import { CLINIC_INFO, STERILIZATION_STEPS } from '../data/clinicData';

export const AboutSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            About Our Practice
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            World-Class Multi-Speciality Dental Care in the Heart of Jangpura
          </h2>
          {/* Prompt required text */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            {CLINIC_INFO.aboutText}
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Conveniently situated on Samman Bazar Road in Bhogal, our Jangpura clinic brings together specialized dental surgeons, modern diagnostic RVG imaging, and hospital-grade sterilization protocols to deliver comfortable, pain-free dental treatments for patients of all ages.
          </p>
        </div>

        {/* 3 Core Pillars Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-5 sm:p-6 rounded-xl border border-sky-100 bg-sky-50/40 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700">
              <Microscope className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Modern Digital Technology</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with low-radiation RVG digital X-rays, computerized rotary endodontics, and intraoral cameras so you can see exactly what your doctor sees before any treatment begins.
            </p>
            <ul className="pt-2 text-xs text-slate-600 space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>90% less radiation with digital RVG sensor</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Intraoral live video for complete transparency</span>
              </li>
            </ul>
          </div>

          <div className="p-5 sm:p-6 rounded-xl border border-sky-100 bg-sky-50/40 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Rigorous 10-Step Sterilization</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every instrument set is ultrasonically cleaned, individually sealed in medical pouches, and autoclaved at 134°C. Pouch seals are opened chairside right in front of you.
            </p>
            <ul className="pt-2 text-xs text-slate-600 space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Class-B medical vacuum autoclaves</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Sealed pouch opened chairside per patient</span>
              </li>
            </ul>
          </div>

          <div className="p-5 sm:p-6 rounded-xl border border-sky-100 bg-sky-50/40 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Patient-First Painless Care</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We understand dental anxiety. From computer-assisted painless local anesthesia to gentle pediatric touch, our senior specialists prioritize your absolute comfort.
            </p>
            <ul className="pt-2 text-xs text-slate-600 space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Computerized gentle numbing technology</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Detailed post-treatment recovery monitoring</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Sterilization Protocol Walkthrough */}
        <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="text-xs font-semibold text-sky-400 tracking-wider uppercase mb-1">
                Clinical Safety Standard
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Our 10-Step Autoclave Sterilization Journey
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                How we guarantee sterile protection against cross-contamination at Clove Dental Jangpura.
              </p>
            </div>
            <div className="text-xs text-slate-300 flex items-center gap-2 shrink-0">
              <FileCheck className="w-4 h-4 text-sky-400" />
              <span>Compliant with DCI & ADA Guidelines</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {STERILIZATION_STEPS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-sky-950/60 border-sky-400 shadow-sm ring-1 ring-sky-400/50'
                    : 'bg-slate-800/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="text-sky-400 font-mono text-xs font-bold mb-1">
                  Step {item.step}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {item.title}
                </div>
                <div className="text-xs text-slate-400 leading-normal">
                  {item.desc}
                </div>
              </button>
            ))}
          </div>

          {/* Verification note from brief */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-xs text-slate-400">
            <span>{CLINIC_INFO.disclaimer}</span>
            <span className="text-sky-400 font-medium">Samman Bazar Road, Bhogal, Jangpura, New Delhi 110014</span>
          </div>
        </div>
      </div>
    </section>
  );
};
