import React, { useState } from 'react';
import { Check, Clock, ChevronRight, X, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/clinicData';
import { ServiceItem } from '../types/dental';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedServiceDetails, setSelectedServiceDetails] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'Preventive Care', label: 'Cleaning & Prevention' },
    { id: 'Endodontics', label: 'Root Canal' },
    { id: 'Orthodontics', label: 'Braces & Aligners' },
    { id: 'Implantology', label: 'Dental Implants' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-sky-50/30 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sky-100 pb-6 sm:pb-8">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              Our Dental Treatments
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 text-balance">
              Specialized Dental Solutions for Lifelong Healthy Smiles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore our core multi-speciality dental treatments performed with modern computerized dental technology and gentle clinical protocols.
            </p>
          </div>

          {/* Interactive filter tabs with mobile scroll support */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-sky-100 rounded-lg shadow-xs overflow-x-auto no-scrollbar max-w-full">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-sky-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-sky-100/90 p-5 sm:p-6 flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all group"
            >
              <div className="space-y-3 sm:space-y-4">
                {/* Clean unboxed category header */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-sky-700">{service.category}</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-sky-500" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                {/* Service Name & Tagline */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-600 mt-1 italic">
                    "{service.tagline}"
                  </p>
                </div>

                {/* Short Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Benefits Checklist */}
                <ul className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Pricing and Actions */}
              <div className="pt-5 mt-5 border-t border-slate-100 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">Estimated Pricing</span>
                  <span className="text-xs font-bold text-slate-900 font-mono tabular-nums">
                    {service.estimatedPrice}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedServiceDetails(service)}
                    className="py-2.5 px-3 text-xs font-medium text-slate-700 bg-sky-50/50 hover:bg-sky-100/70 border border-sky-100 rounded-lg transition-colors text-center cursor-pointer min-h-[40px]"
                  >
                    Details & Steps
                  </button>

                  <button
                    onClick={() => onSelectServiceForBooking(service.name)}
                    className="py-2.5 px-3 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer min-h-[40px]"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informational banner about insurance and consultation */}
        <div className="bg-sky-50/80 border border-sky-200/80 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
            <div className="text-xs text-sky-950">
              <span className="font-bold">Transparent Treatment Plans:</span> Every procedure at Clove Dental Jangpura includes a digital RVG examination, detailed written diagnosis, and step-by-step cost breakdown before any work begins.
            </div>
          </div>
          <button
            onClick={() => onSelectServiceForBooking('Teeth Cleaning & Scaling')}
            className="text-xs font-semibold text-sky-700 hover:text-sky-800 whitespace-nowrap flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>Book Consultation</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Service Detailed Modal */}
      {selectedServiceDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-sky-100 shadow-xl p-5 sm:p-8 space-y-5 sm:space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="text-xs font-semibold text-sky-700 uppercase">
                  {selectedServiceDetails.category}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                  {selectedServiceDetails.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedServiceDetails(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-600">
              <p className="text-slate-800 leading-relaxed font-normal">
                {selectedServiceDetails.fullDetails}
              </p>

              <div className="grid grid-cols-2 gap-3 p-3 bg-sky-50/60 rounded-lg border border-sky-100">
                <div>
                  <span className="text-slate-500 block text-[11px]">Appointment Duration:</span>
                  <span className="font-semibold text-slate-900">{selectedServiceDetails.duration}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Recovery Downtime:</span>
                  <span className="font-semibold text-slate-900">{selectedServiceDetails.recoveryTime}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Step-by-Step Clinical Procedure:</h4>
                <ol className="space-y-2">
                  {selectedServiceDetails.procedureSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 font-mono font-bold flex items-center justify-center text-[10px] shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5">When is this recommended?</h4>
                <p className="text-slate-600 bg-sky-50/40 p-3 rounded-lg border border-sky-100">
                  {selectedServiceDetails.idealFor}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div className="text-xs">
                <span className="text-slate-500 block text-[11px]">Fee Estimate:</span>
                <span className="text-base font-bold text-slate-900 font-mono">
                  {selectedServiceDetails.estimatedPrice}
                </span>
              </div>
              <button
                onClick={() => {
                  const serviceName = selectedServiceDetails.name;
                  setSelectedServiceDetails(null);
                  onSelectServiceForBooking(serviceName);
                }}
                className="py-3 px-5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-lg transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Treatment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
