import React, { useState } from 'react';
import { Sparkles, Eye, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterCase {
  id: string;
  title: string;
  procedure: string;
  duration: string;
  beforeDesc: string;
  afterDesc: string;
  patientAge: string;
}

export const GallerySection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);

  const cases: BeforeAfterCase[] = [
    {
      id: "case-1",
      title: "Teeth Whitening & Ultrasonic Scaling",
      procedure: "In-Office Cold Light Teeth Whitening",
      duration: "45 Minutes",
      beforeDesc: "Heavy yellow discoloration and tea/coffee surface stains with tartar accumulation around gumline.",
      afterDesc: "7 shades brighter natural tooth luster with complete removal of tartar and fresh gum contours.",
      patientAge: "32 yrs, Jangpura",
    },
    {
      id: "case-2",
      title: "Clear Aligner Smile Realignment",
      procedure: "Custom Invisible Clear Aligners",
      duration: "7 Months",
      beforeDesc: "Moderate anterior crowding with overlapping upper central incisors and deep bite misalignment.",
      afterDesc: "Harmonious straight dental arch, symmetrical smile curve, and optimized masticatory bite alignment.",
      patientAge: "26 yrs, South Delhi",
    },
    {
      id: "case-3",
      title: "Dental Implant & Zirconia Crown",
      procedure: "Single Tooth Titanium Implant + Crown",
      duration: "2 Sittings",
      beforeDesc: "Missing lower first molar causing chewing difficulty and shifting of adjacent premolars.",
      afterDesc: "Fully integrated biological titanium root with high-translucency monolithic zirconia crown.",
      patientAge: "48 yrs, Bhogal",
    }
  ];

  const facilities = [
    {
      title: "Sterile Operatory Suite",
      subtitle: "Ergonomic clinical chairs with computerized delivery systems",
      tags: ["Class-100 Cleanliness", "Digital RVG Arm", "Autoclaved Setup"],
      color: "from-sky-700 to-slate-900"
    },
    {
      title: "Class-B Autoclave Bay",
      subtitle: "Medical-grade sterilization unit operating at 134°C with biological indicators",
      tags: ["10-Step Protocol", "Hermetic Pouches", "Continuous Monitoring"],
      color: "from-blue-700 to-slate-900"
    },
    {
      title: "Digital RVG & Intraoral Suite",
      subtitle: "Low-radiation instant sensor imaging with live high-definition chairside screens",
      tags: ["90% Lower Radiation", "Instant Diagnosis", "Patient Screen Mirroring"],
      color: "from-cyan-700 to-slate-900"
    },
    {
      title: "Reception & Waiting Lounge",
      subtitle: "Comfortable, sanitized air-conditioned environment on Samman Bazar Road",
      tags: ["Zero-Wait Scheduling", "Complimentary Wi-Fi", "Wheelchair Accessible"],
      color: "from-sky-900 to-slate-900"
    }
  ];

  const currentCase = cases[activeCaseIdx];

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-24 bg-sky-50/30 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sky-100 pb-6 sm:pb-8">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              Facilities & Real Patient Results
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 text-balance">
              State-of-the-Art Infrastructure & Smile Transformations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Take an interactive look at our clinic standards and explore verified before & after transformations achieved right here at Clove Dental Jangpura.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="text-xs text-slate-500 font-medium">Cases:</div>
            <div className="flex gap-1 bg-white border border-sky-100 p-1 rounded-lg">
              {cases.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCaseIdx(idx)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    activeCaseIdx === idx
                      ? 'bg-sky-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-sky-50'
                  }`}
                >
                  Case {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Smile Transformation Showcase */}
        <div className="bg-white rounded-2xl border border-sky-100 p-5 sm:p-8 lg:p-10 shadow-xs space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 sm:pb-6">
            <div>
              <span className="text-xs font-semibold text-sky-700 uppercase">
                {currentCase.procedure}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mt-0.5">
                {currentCase.title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-slate-500">
              <span>Duration: <strong className="text-slate-800">{currentCase.duration}</strong></span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span>Patient: <strong className="text-slate-800">{currentCase.patientAge}</strong></span>
            </div>
          </div>

          {/* Interactive Split Comparison Card */}
          <div className="relative select-none max-w-3xl mx-auto rounded-xl overflow-hidden border border-sky-200/80 shadow-sm bg-slate-900 text-white">
            <div className="h-64 sm:h-72 md:h-80 relative flex items-center justify-center p-4 sm:p-8 overflow-hidden touch-none">
              {/* Before Side (Left) */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 flex flex-col justify-center px-6 sm:px-12 text-left"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <div className="max-w-xs space-y-2">
                  <div className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-sky-950/90 border border-sky-800/80 px-2.5 py-0.5 rounded">
                    Before Treatment
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">Pre-Clinical Condition</h4>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                    {currentCase.beforeDesc}
                  </p>
                </div>
              </div>

              {/* After Side (Right) */}
              <div
                className="absolute inset-0 bg-gradient-to-l from-sky-900/90 via-slate-900 to-slate-950 flex flex-col justify-center px-6 sm:px-12 text-right items-end"
                style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
              >
                <div className="max-w-xs space-y-2">
                  <div className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-sky-950/90 border border-sky-800/80 px-2.5 py-0.5 rounded">
                    After Result
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">Final Smile Outcome</h4>
                  <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed">
                    {currentCase.afterDesc}
                  </p>
                </div>
              </div>

              {/* Slider Divider Bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-sky-400 cursor-ew-resize z-20 shadow-lg flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-sky-700 shadow-md flex items-center justify-center text-xs font-bold -translate-x-1/2 border border-sky-200">
                  ⇄
                </div>
              </div>

              {/* Range Input for accessibility and touch drag */}
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Drag before and after comparison slider"
              />
            </div>

            {/* Slider Instructions caption */}
            <div className="bg-slate-950 px-4 sm:px-6 py-2.5 sm:py-3 border-t border-slate-800 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Drag the slider horizontally to compare before and after clinical outcomes</span>
            </div>
          </div>
        </div>

        {/* Clinic Facilities Tour Cards */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Clinic Infrastructure at Samman Bazar Road
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Purpose-built clinical bays adhering to strict medical operatory sanitization standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, fIdx) => (
              <div
                key={fIdx}
                className="bg-white rounded-xl border border-sky-100 p-5 sm:p-6 flex flex-col justify-between hover:border-sky-300 hover:shadow-xs transition-all"
              >
                <div className="space-y-3">
                  <div className={`h-28 rounded-lg bg-gradient-to-br ${fac.color} p-4 flex flex-col justify-end text-white shadow-inner`}>
                    <div className="text-[10px] font-mono uppercase text-sky-300">Station 0{fIdx + 1}</div>
                    <div className="text-sm font-bold text-white leading-tight">{fac.title}</div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {fac.subtitle}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {fac.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-medium text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-medium text-sky-700 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  <span>Sanitized after every visit</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
