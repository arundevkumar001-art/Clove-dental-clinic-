export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  fullDetails: string;
  duration: string;
  recoveryTime: string;
  benefits: string[];
  procedureSteps: string[];
  idealFor: string;
  estimatedPrice: string;
  popular?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  experienceYears: number;
  specialty: string;
  bio: string;
  availability: string;
  consultationFee: string;
  initials: string;
  avatarBg: string;
}

export interface PatientReview {
  id: string;
  patientName: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  reviewText: string;
  verified: boolean;
}

export interface AppointmentData {
  patientName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  serviceRequired: string;
  preferredDoctor?: string;
  notes?: string;
  bookingRef?: string;
  createdAt?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
