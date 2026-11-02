import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquarePlus, X, Filter } from 'lucide-react';
import { REVIEWS } from '../data/clinicData';
import { PatientReview } from '../types/dental';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<PatientReview[]>(REVIEWS);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);

  // New review form state
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewLocation, setNewReviewLocation] = useState('');
  const [newReviewTreatment, setNewReviewTreatment] = useState('Root Canal Treatment (RCT)');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filterOptions = [
    { id: 'all', label: 'All Reviews (808+)' },
    { id: 'Root Canal', label: 'Root Canal' },
    { id: 'Aligners', label: 'Clear Aligners & Braces' },
    { id: 'Implant', label: 'Dental Implants' },
    { id: 'Cleaning', label: 'Teeth Cleaning' },
  ];

  const filteredReviews = activeFilter === 'all'
    ? reviewsList
    : reviewsList.filter(r => r.treatment.toLowerCase().includes(activeFilter.toLowerCase()));

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewText.trim()) return;

    const newRev: PatientReview = {
      id: `rev-${Date.now()}`,
      patientName: newReviewName.trim(),
      location: newReviewLocation.trim() || 'Jangpura, New Delhi',
      treatment: newReviewTreatment,
      rating: newReviewRating,
      date: 'Just now',
      reviewText: newReviewText.trim(),
      verified: true
    };

    setReviewsList([newRev, ...reviewsList]);
    setFormSubmitted(true);
    setTimeout(() => {
      setIsReviewModalOpen(false);
      setFormSubmitted(false);
      setNewReviewName('');
      setNewReviewLocation('');
      setNewReviewText('');
      setNewReviewRating(5);
    }, 1500);
  };

  return (
    <section id="reviews" className="py-12 sm:py-16 lg:py-24 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sky-100 pb-6 sm:pb-8">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              Verified Patient Testimonials
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 text-balance">
              Loved by Over 808 Families in Jangpura & South Delhi
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Read transparent feedback from our patients who experienced painless root canals, transformative clear aligners, and precision dental implants.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="py-2.5 px-4 rounded-lg bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-xs cursor-pointer min-h-[42px]"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Patient Review</span>
            </button>
          </div>
        </div>

        {/* Rating Scorecard Overview */}
        <div className="bg-sky-50/40 rounded-2xl border border-sky-100 p-5 sm:p-8 grid md:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-sky-100 pb-5 md:pb-0 md:pr-8 space-y-2">
            <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-mono tracking-tight">
              4.9<span className="text-xl sm:text-2xl text-slate-400 font-normal"> / 5.0</span>
            </div>
            <div className="flex justify-center md:justify-start text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="text-xs text-slate-600 font-medium">
              Based on <strong>808+ verified ratings</strong> across Google Maps, Practo & Direct Patients.
            </div>
          </div>

          <div className="md:col-span-8 space-y-2 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-12 text-slate-600 font-medium text-right">5 Star</span>
              <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full bg-sky-500 rounded-full" style={{ width: '94%' }}></div>
              </div>
              <span className="w-10 text-slate-500 font-mono tabular-nums">94%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-slate-600 font-medium text-right">4 Star</span>
              <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full bg-sky-400 rounded-full" style={{ width: '5%' }}></div>
              </div>
              <span className="w-10 text-slate-500 font-mono tabular-nums">5%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-slate-600 font-medium text-right">3 Star</span>
              <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full bg-sky-300 rounded-full" style={{ width: '1%' }}></div>
              </div>
              <span className="w-10 text-slate-500 font-mono tabular-nums">1%</span>
            </div>
          </div>
        </div>

        {/* Filter controls with horizontal swipe on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5 text-sky-600" />
            <span>Filter Treatment:</span>
          </span>
          {filterOptions.map(opt => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeFilter === opt.id
                  ? 'bg-sky-600 text-white shadow-2xs'
                  : 'bg-sky-50/70 text-slate-700 hover:bg-sky-100/70 border border-sky-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map(review => (
            <div
              key={review.id}
              className="bg-white rounded-xl border border-sky-100/90 p-5 sm:p-6 flex flex-col justify-between hover:border-sky-300 hover:shadow-xs transition-all space-y-4"
            >
              <div className="space-y-3">
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-slate-400">{review.date}</span>
                </div>

                {/* Treatment category */}
                <div className="text-xs font-semibold text-sky-700">
                  {review.treatment}
                </div>

                {/* Review Text */}
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{review.reviewText}"
                </p>
              </div>

              {/* Patient Attribution */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{review.patientName}</span>
                    {review.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500">{review.location}</div>
                </div>

                <span className="text-[10px] uppercase font-mono tracking-wider text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                  Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-sky-100 shadow-xl p-5 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Share Your Clinic Experience</h3>
                <p className="text-xs text-slate-500">Clove Dental – Jangpura (Samman Bazar Road)</p>
              </div>
              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Thank You for Your Feedback!</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Your review has been successfully submitted and helps other families in South Delhi find safe dental care.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newReviewName}
                    onChange={(e) => setNewReviewName(e.target.value)}
                    placeholder="e.g. Ramesh Verma"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Locality / Area
                    </label>
                    <input
                      type="text"
                      value={newReviewLocation}
                      onChange={(e) => setNewReviewLocation(e.target.value)}
                      placeholder="e.g. Bhogal, New Delhi"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Treatment Received
                    </label>
                    <select
                      value={newReviewTreatment}
                      onChange={(e) => setNewReviewTreatment(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                    >
                      <option value="Teeth Cleaning & Scaling">Teeth Cleaning & Scaling</option>
                      <option value="Root Canal Treatment (RCT)">Root Canal Treatment (RCT)</option>
                      <option value="Clear Aligners & Braces">Clear Aligners & Braces</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Kids Dental Checkup">Kids Dental Checkup</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Rating (1 to 5 Stars)
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReviewRating(star)}
                        className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                          newReviewRating >= star
                            ? 'text-amber-400 border-sky-300 bg-sky-50'
                            : 'text-slate-300 border-slate-200'
                        }`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Review Feedback *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    placeholder="Describe your treatment experience, clinic cleanliness, or doctor guidance..."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsReviewModalOpen(false)}
                    className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer min-h-[40px]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors shadow-xs cursor-pointer min-h-[40px]"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
