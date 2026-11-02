import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Calendar } from 'lucide-react';
import { FAQS, CLINIC_INFO } from '../data/clinicData';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-sky-50/30 border-b border-sky-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2 sm:space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Everything You Need to Know Before Visiting
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Got questions about pain management, pricing, sterilization, or appointments at our Jangpura clinic? Find quick answers below.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-sky-100/90 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-sky-50/50 transition-colors cursor-pointer min-h-[48px]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sky-700 font-mono text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-50">
                    <p>{faq.answer}</p>
                    <div className="mt-2 text-[11px] text-sky-800 font-medium">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-sm sm:text-base font-bold text-white">Have a specific dental query or urgent toothache?</h3>
            <p className="text-xs text-sky-200/80">Our clinical desk on Samman Bazar Road is ready to assist you.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-sky-300 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors min-h-[40px]"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call Clinic</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer min-h-[40px]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
