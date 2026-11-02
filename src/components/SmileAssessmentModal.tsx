import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Calendar } from 'lucide-react';

interface SmileAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecommendedService: (serviceName: string) => void;
}

export const SmileAssessmentModal: React.FC<SmileAssessmentModalProps> = ({
  isOpen,
  onClose,
  onSelectRecommendedService
}) => {
  const [step, setStep] = useState<number>(1);
  const [primaryGoal, setPrimaryGoal] = useState<string>('');
  const [painLevel, setPainLevel] = useState<string>('');
  const [timeframe, setTimeframe] = useState<string>('');

  if (!isOpen) return null;

  const handleComplete = () => {
    let recommendation = 'Teeth Cleaning & Scaling';

    if (painLevel === 'severe' || primaryGoal === 'toothache') {
      recommendation = 'Root Canal Treatment (RCT)';
    } else if (primaryGoal === 'missing_tooth') {
      recommendation = 'Dental Implants';
    } else if (primaryGoal === 'crooked_teeth') {
      recommendation = 'Braces & Clear Aligners';
    } else if (primaryGoal === 'whiten_smile') {
      recommendation = 'Professional Teeth Whitening';
    } else if (primaryGoal === 'kids_checkup') {
      recommendation = 'Kids & Family Dental Care';
    }

    setStep(4);
    setTimeout(() => {
      onSelectRecommendedService(recommendation);
      onClose();
    }, 1600);
  };

  const getRecommendedName = () => {
    if (painLevel === 'severe' || primaryGoal === 'toothache') return 'Root Canal Treatment (RCT)';
    if (primaryGoal === 'missing_tooth') return 'Dental Implants';
    if (primaryGoal === 'crooked_teeth') return 'Braces & Clear Aligners';
    if (primaryGoal === 'whiten_smile') return 'Professional Teeth Whitening';
    if (primaryGoal === 'kids_checkup') return 'Kids & Family Dental Care';
    return 'Teeth Cleaning & Scaling';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-sky-100 shadow-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Dental Needs Self-Assessment
              </h3>
              <p className="text-[11px] text-slate-500">30-second personalized care guide</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Goal */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
              Step 1 of 3: Primary Dental Concern
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              What brings you to Clove Dental Jangpura today?
            </h4>

            <div className="space-y-2">
              {[
                { id: 'routine', label: 'Routine Cleaning, Scaling or Bad Breath', desc: 'Preventive dental cleaning & checkup' },
                { id: 'toothache', label: 'Acute Toothache, Cavity, or Sensitivity', desc: 'Relief from throbbing or chewing pain' },
                { id: 'crooked_teeth', label: 'Crooked Teeth, Spacing Gaps, or Bite', desc: 'Invisible aligners or braces' },
                { id: 'missing_tooth', label: 'Missing Tooth / Permanent Replacement', desc: 'Fixed dental implants or bridge' },
                { id: 'whiten_smile', label: 'Yellow Teeth Discoloration & Stains', desc: 'Cosmetic cold-light teeth whitening' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setPrimaryGoal(item.id);
                    setStep(2);
                  }}
                  className={`w-full p-3 text-left rounded-xl border transition-all text-xs cursor-pointer min-h-[46px] ${
                    primaryGoal === item.id
                      ? 'border-sky-500 bg-sky-50/60 text-slate-900'
                      : 'border-slate-200 hover:border-sky-300 hover:bg-sky-50/30 text-slate-700'
                  }`}
                >
                  <div className="font-bold text-slate-900">{item.label}</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Pain or Symptoms */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
              Step 2 of 3: Discomfort & Sensitivity
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              Are you currently experiencing any tooth sensitivity or discomfort?
            </h4>

            <div className="space-y-2">
              {[
                { id: 'none', label: 'No Pain (Just seeking preventative / cosmetic checkup)', desc: 'Healthy gums, routine visit' },
                { id: 'mild', label: 'Mild Sensitivity to Cold Water or Sweets', desc: 'Possible early enamel erosion or tartar buildup' },
                { id: 'severe', label: 'Severe / Throbbing Pain or Pain on Chewing', desc: 'Possible deep nerve infection requiring immediate care' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setPainLevel(item.id);
                    setStep(3);
                  }}
                  className={`w-full p-3 text-left rounded-xl border transition-all text-xs cursor-pointer min-h-[46px] ${
                    painLevel === item.id
                      ? 'border-sky-500 bg-sky-50/60 text-slate-900'
                      : 'border-slate-200 hover:border-sky-300 hover:bg-sky-50/30 text-slate-700'
                  }`}
                >
                  <div className="font-bold text-slate-900">{item.label}</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(1)}
              className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
            >
              ← Back to previous step
            </button>
          </div>
        )}

        {/* Step 3: Preferred Timing */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
              Step 3 of 3: Visiting Timeline
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              How soon would you like to visit our Jangpura clinic?
            </h4>

            <div className="space-y-2">
              {[
                { id: 'today', label: 'Today or Tomorrow (Urgent / Immediate)' },
                { id: 'this_week', label: 'Within this week' },
                { id: 'weekend', label: 'Saturday or Sunday preferred' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setTimeframe(item.id);
                    handleComplete();
                  }}
                  className="w-full p-3.5 text-left rounded-xl border border-slate-200 hover:border-sky-400 hover:bg-sky-50/40 transition-all text-xs font-semibold text-slate-800 cursor-pointer min-h-[46px]"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
            >
              ← Back to previous step
            </button>
          </div>
        )}

        {/* Step 4: Loading & Auto-redirect */}
        {step === 4 && (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 mx-auto flex items-center justify-center">
              <Sparkles className="w-6 h-6 animate-spin" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Recommended: {getRecommendedName()}
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                Opening booking form with this treatment pre-selected for your visit...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
