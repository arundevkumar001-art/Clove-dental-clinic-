import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText, CheckCircle2, Download, Printer, AlertCircle, Sparkles, MapPin } from 'lucide-react';
import { SERVICES, DOCTORS, CLINIC_INFO, TIME_SLOTS } from '../data/clinicData';
import { AppointmentData } from '../types/dental';

interface BookingSectionProps {
  initialService?: string;
  initialDoctor?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialService, initialDoctor }) => {
  // Today's date in YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState(todayStr);
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [serviceRequired, setServiceRequired] = useState(initialService || SERVICES[0].name);
  const [preferredDoctor, setPreferredDoctor] = useState(initialDoctor || '');
  const [notes, setNotes] = useState('');

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentData | null>(null);

  // Sync props if changed from external clicks
  useEffect(() => {
    if (initialService) setServiceRequired(initialService);
  }, [initialService]);

  useEffect(() => {
    if (initialDoctor) setPreferredDoctor(initialDoctor);
  }, [initialDoctor]);

  const validate = () => {
    const errors: { [key: string]: string } = {};

    if (!patientName.trim()) {
      errors.patientName = 'Patient name is required';
    } else if (patientName.trim().length < 2) {
      errors.patientName = 'Please enter a valid full name';
    }

    const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
    if (!phoneNumber.trim()) {
      errors.phone = 'Phone number is required';
    } else if (cleanPhone.length < 10) {
      errors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!emailAddress.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!preferredDate) {
      errors.preferredDate = 'Please choose a preferred appointment date';
    }

    if (!preferredTime) {
      errors.preferredTime = 'Please select a preferred time slot';
    }

    if (!serviceRequired) {
      errors.serviceRequired = 'Please specify the service required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const refId = `CLV-JNG-${Math.floor(1000 + Math.random() * 9000)}`;

    const booking: AppointmentData = {
      patientName: patientName.trim(),
      phone: phoneNumber.trim(),
      email: emailAddress.trim(),
      preferredDate,
      preferredTime,
      serviceRequired,
      preferredDoctor: preferredDoctor || 'Any Available Specialist',
      notes: notes.trim(),
      bookingRef: refId,
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedBooking(booking);
    }, 600);
  };

  const handleDownloadCalendar = () => {
    if (!confirmedBooking) return;
    const [hoursStr, minutesPart] = confirmedBooking.preferredTime.split(':');
    const [minutesStr, ampm] = minutesPart.split(' ');
    let hours = parseInt(hoursStr, 10);
    if (ampm === 'PM' && hours < 12) hours += 12;
    if (ampm === 'AM' && hours === 12) hours = 0;

    const startFormatted = `${confirmedBooking.preferredDate.replace(/-/g, '')}T${hours < 10 ? '0' : ''}${hours}${minutesStr}00`;
    const endHour = hours + 1;
    const endFormatted = `${confirmedBooking.preferredDate.replace(/-/g, '')}T${endHour < 10 ? '0' : ''}${endHour}${minutesStr}00`;

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Clove Dental Jangpura//Appointment Reminder//EN
BEGIN:VEVENT
UID:${confirmedBooking.bookingRef}@clovedental.in
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${startFormatted}
DTEND:${endFormatted}
SUMMARY:Dental Visit: ${confirmedBooking.serviceRequired} - Clove Dental
DESCRIPTION:Appointment for ${confirmedBooking.patientName} at Clove Dental Jangpura. Ref: ${confirmedBooking.bookingRef}. Phone: +91 11 6927 1072.
LOCATION:Samman Bazar Road, Bhogal, Jangpura, New Delhi 110014
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `CloveDental_Appointment_${confirmedBooking.bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrintSlip = () => {
    window.print();
  };

  const handleResetForm = () => {
    setConfirmedBooking(null);
    setPatientName('');
    setPhoneNumber('');
    setEmailAddress('');
    setNotes('');
  };

  return (
    <section id="book-appointment" className="py-12 sm:py-16 lg:py-24 bg-sky-50/40 border-b border-sky-100 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2 sm:space-y-3 max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Online Dental Scheduling
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Book an Appointment with Our Dental Team
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-balance">
            Reserve your preferred date and time slot at Clove Dental – Jangpura. Fast confirmation with zero upfront booking fees.
          </p>
        </div>

        {confirmedBooking ? (
          /* Confirmation Slip Screen */
          <div className="bg-white rounded-2xl border border-sky-100 shadow-md p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 animate-in fade-in">
            <div className="text-center space-y-3 pb-6 border-b border-slate-100">
              <div className="w-14 h-14 rounded-full bg-sky-100 text-sky-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Appointment Successfully Reserved!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your consultation request has been registered at Clove Dental – Jangpura. An SMS & email reminder will be sent to your phone.
              </p>
              <div className="inline-block mt-2 font-mono text-xs font-bold text-sky-900 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-md">
                Booking Reference: {confirmedBooking.bookingRef}
              </div>
            </div>

            {/* Slip Details Grid */}
            <div className="bg-sky-50/50 rounded-xl p-5 sm:p-6 border border-sky-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-500 block text-[11px]">Patient Name</span>
                <span className="font-bold text-slate-900 text-sm">{confirmedBooking.patientName}</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Contact Details</span>
                <span className="font-semibold text-slate-800">{confirmedBooking.phone} · {confirmedBooking.email}</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Scheduled Date & Time</span>
                <span className="font-bold text-sky-700 text-sm">
                  {confirmedBooking.preferredDate} at {confirmedBooking.preferredTime}
                </span>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Treatment Requested</span>
                <span className="font-bold text-slate-900">{confirmedBooking.serviceRequired}</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Assigned Specialist</span>
                <span className="font-semibold text-slate-800">{confirmedBooking.preferredDoctor}</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Clinic Location</span>
                <span className="font-medium text-slate-700">{CLINIC_INFO.address}</span>
              </div>

              {confirmedBooking.notes && (
                <div className="sm:col-span-2 pt-2 border-t border-sky-100">
                  <span className="text-slate-500 block text-[11px]">Patient Notes</span>
                  <span className="text-slate-700 italic">"{confirmedBooking.notes}"</span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <button
                  onClick={handleDownloadCalendar}
                  className="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[42px]"
                >
                  <Download className="w-4 h-4 text-sky-200" />
                  <span>Add to Calendar (.ics)</span>
                </button>

                <button
                  onClick={handlePrintSlip}
                  className="px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[42px]"
                >
                  <Printer className="w-4 h-4 text-slate-600" />
                  <span>Print Slip</span>
                </button>
              </div>

              <button
                onClick={handleResetForm}
                className="text-xs font-semibold text-sky-700 hover:text-sky-800 underline text-center cursor-pointer py-1"
              >
                Book Another Appointment
              </button>
            </div>

            {/* Clinic Contact Reminder */}
            <div className="text-center text-xs text-slate-500 pt-4 border-t border-slate-100 flex items-center justify-center gap-2">
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>Need to reschedule? Call clinic helpline: <strong>+91 11 6927 1072</strong></span>
            </div>
          </div>
        ) : (
          /* Main Booking Form */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-sky-100 shadow-sm p-5 sm:p-8 lg:p-10 space-y-5 sm:space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Field 1: Patient Name */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-sky-600" />
                  <span>Patient Name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Ananya Mehra"
                  className={`w-full px-3.5 py-2.5 text-xs rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 min-h-[42px] ${
                    formErrors.patientName ? 'border-red-400 bg-red-50/20' : 'border-slate-300 focus:border-sky-400'
                  }`}
                />
                {formErrors.patientName && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.patientName}</span>
                  </p>
                )}
              </div>

              {/* Field 2: Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full px-3.5 py-2.5 text-xs rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 min-h-[42px] ${
                    formErrors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300 focus:border-sky-400'
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.phone}</span>
                  </p>
                )}
              </div>

              {/* Field 3: Email Address */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-600" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  required
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="e.g. patient@example.com"
                  className={`w-full px-3.5 py-2.5 text-xs rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 min-h-[42px] ${
                    formErrors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300 focus:border-sky-400'
                  }`}
                />
                {formErrors.email && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.email}</span>
                  </p>
                )}
              </div>

              {/* Field 6: Service Required */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-sky-600" />
                  <span>Service Required *</span>
                </label>
                <select
                  required
                  value={serviceRequired}
                  onChange={(e) => setServiceRequired(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 min-h-[42px]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.estimatedPrice})
                    </option>
                  ))}
                  <option value="General Consultation & Digital RVG X-Ray">
                    General Consultation & Digital RVG X-Ray (₹500)
                  </option>
                  <option value="Emergency Toothache Relief">Emergency Toothache Relief</option>
                </select>
              </div>

              {/* Field 4: Preferred Date */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-sky-600" />
                  <span>Preferred Date *</span>
                </label>
                <input
                  type="date"
                  required
                  min={todayStr}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-xs rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white min-h-[42px] ${
                    formErrors.preferredDate ? 'border-red-400 bg-red-50/20' : 'border-slate-300 focus:border-sky-400'
                  }`}
                />
              </div>

              {/* Optional: Preferred Doctor */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>Preferred Specialist (Optional)</span>
                </label>
                <select
                  value={preferredDoctor}
                  onChange={(e) => setPreferredDoctor(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 min-h-[42px]"
                >
                  <option value="">Any Available Senior Specialist</option>
                  {DOCTORS.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} – {d.specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Field 5: Preferred Time Slot Selector */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                <span>Preferred Time Slot (10 AM – 8 PM) *</span>
              </label>

              <div className="space-y-3">
                {/* Morning Slots */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">
                    Morning Sessions (10:00 AM – 12:30 PM)
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                    {TIME_SLOTS.morning.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setPreferredTime(slot)}
                        className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors text-center cursor-pointer min-h-[38px] ${
                          preferredTime === slot
                            ? 'bg-sky-600 text-white border-sky-600 shadow-2xs'
                            : 'bg-sky-50/50 hover:bg-sky-100/70 border-sky-100 text-slate-700'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Afternoon Slots */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">
                    Afternoon Sessions (1:00 PM – 4:00 PM)
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                    {TIME_SLOTS.afternoon.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setPreferredTime(slot)}
                        className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors text-center cursor-pointer min-h-[38px] ${
                          preferredTime === slot
                            ? 'bg-sky-600 text-white border-sky-600 shadow-2xs'
                            : 'bg-sky-50/50 hover:bg-sky-100/70 border-sky-100 text-slate-700'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Evening Slots */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">
                    Evening Sessions (5:00 PM – 7:30 PM)
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                    {TIME_SLOTS.evening.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setPreferredTime(slot)}
                        className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors text-center cursor-pointer min-h-[38px] ${
                          preferredTime === slot
                            ? 'bg-sky-600 text-white border-sky-600 shadow-2xs'
                            : 'bg-sky-50/50 hover:bg-sky-100/70 border-sky-100 text-slate-700'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Symptoms or Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention any dental pain, past medical history, or specific questions..."
                className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              ></textarea>
            </div>

            {/* Submission button & clinic promise */}
            <div className="pt-3 border-t border-slate-100 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-lg bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-xs text-center flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 min-h-[46px]"
              >
                {isSubmitting ? (
                  <span>Reserving Appointment Slot...</span>
                ) : (
                  <>
                    <CalendarIcon className="w-4 h-4" />
                    <span>Confirm Dental Appointment</span>
                  </>
                )}
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-slate-500 gap-2">
                <span>Zero advance cancellation fee · Instant confirmation</span>
                <span className="font-semibold text-slate-700">Need urgent help? Call +91 11 6927 1072</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
