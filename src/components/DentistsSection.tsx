import React from 'react';
import { Calendar, Award, GraduationCap, Clock, CheckCircle } from 'lucide-react';
import { DOCTORS } from '../data/clinicData';

interface DentistsSectionProps {
  onSelectDoctorForBooking: (doctorName: string, serviceName?: string) => void;
}

export const DentistsSection: React.FC<DentistsSectionProps> = ({ onSelectDoctorForBooking }) => {
  return (
    <section id="dentists" className="py-12 sm:py-16 lg:py-24 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 sm:space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Our Dental Specialists
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Meet the Experienced Dental Surgeons at Clove Dental Jangpura
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our multi-disciplinary team brings together board-certified endodontists, orthodontists, implantologists, and aesthetic specialists committed to painless clinical excellence.
          </p>
        </div>

        {/* Dentists Grid: Responsive 1 -> 2 -> 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map(doc => (
            <div
              key={doc.id}
              className="bg-white rounded-xl border border-sky-100/90 p-5 sm:p-6 flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                {/* Doctor Avatar / Monogram */}
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${doc.avatarBg} text-white font-bold text-lg flex items-center justify-center shadow-xs shrink-0`}>
                    {doc.initials}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-sky-700 font-medium leading-tight">
                      {doc.specialty}
                    </p>
                  </div>
                </div>

                {/* Qualifications & Experience */}
                <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-800">{doc.qualifications}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span><strong className="text-slate-900 font-mono">{doc.experienceYears}+ years</strong> clinical practice</span>
                  </div>

                  <div className="flex items-start gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-slate-500">{doc.availability}</span>
                  </div>
                </div>

                {/* Short Bio */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {doc.bio}
                </p>
              </div>

              {/* Card Action */}
              <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-slate-100">
                <button
                  onClick={() => onSelectDoctorForBooking(doc.name)}
                  className="w-full py-2.5 sm:py-3 px-3 text-xs font-semibold text-slate-800 bg-sky-50/60 hover:bg-sky-600 hover:text-white border border-sky-200/80 hover:border-sky-600 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs min-h-[42px]"
                >
                  <Calendar className="w-3.5 h-3.5 text-sky-600 group-hover:text-white" />
                  <span>Book with {doc.name.split(' ')[0]} {doc.name.split(' ')[1]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Consultation Guarantee */}
        <div className="p-4 sm:p-5 bg-sky-950 text-sky-100 rounded-xl text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Every consultation includes digital RVG X-ray diagnostics, cavity detection, and custom treatment planning.</span>
          </div>
          <span className="text-sky-300 font-semibold whitespace-nowrap">
            Consultation Desk: +91 11 6927 1072
          </span>
        </div>
      </div>
    </section>
  );
};
