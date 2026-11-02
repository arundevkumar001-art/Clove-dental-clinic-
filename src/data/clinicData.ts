import { ServiceItem, Doctor, PatientReview, FaqItem } from '../types/dental';

export const CLINIC_INFO = {
  name: "Clove Dental – Jangpura",
  shortName: "Clove Dental",
  tagline: "Your Smile, Our Priority.",
  heroSubtext: "Professional dental care for healthier smiles. Book an appointment with our dental team at Samman Bazar Road, Bhogal, Jangpura.",
  aboutText: "Clove Dental is a multi-speciality dental clinic providing dental care for individuals and families. Our services include preventive, restorative and cosmetic dental treatments.",
  address: "Samman Bazar Road, Bhogal, Jangpura, New Delhi 110014",
  landmark: "Near Bhogal Market & Samman Bazar, 5 mins from Jangpura Metro Station",
  phone: "+91 11 6927 1072",
  phoneRaw: "+911169271072",
  rating: 4.9,
  reviewsCount: 808,
  category: "Multi-speciality dental clinic",
  openingHours: "10:00 AM – 8:00 PM (Monday – Sunday)",
  openingHoursShort: "10 AM – 8 PM",
  daysOpen: "Mon – Sun (All 7 Days)",
  disclaimer: "Verify details with the clinic before publishing.",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Clove+Dental+Samman+Bazar+Road+Bhogal+Jangpura+New+Delhi+110014",
};

export const CLINIC_STATS = [
  { label: "Patient Rating", value: "4.9 / 5", detail: "Google & Practo Verified" },
  { label: "Verified Reviews", value: "808+", detail: "Trusted South Delhi Families" },
  { label: "Sterilization Standard", value: "10-Step", detail: "Autoclaved Pouch per Patient" },
  { label: "Dental Specialists", value: "4 In-House", detail: "MDS & BDS Surgeons" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "teeth-cleaning",
    name: "Teeth Cleaning & Scaling",
    category: "Preventive Care",
    tagline: "Cleaning and scaling services for fresh breath and healthy gums.",
    description: "Gentle ultrasonic scaling and polishing that effectively removes stubborn plaque, tartar, and coffee or tea stains without enamel damage.",
    fullDetails: "Our ultrasonic dental scaling uses calibrated micro-vibrations with cooling water spray to gently dislodge calculus deposits from tooth surfaces and below the gumline. Followed by diamond-paste polishing to restore tooth shine and prevent bacterial adhesion.",
    duration: "30 – 45 mins",
    recoveryTime: "Immediate",
    benefits: [
      "Prevents gum bleeding, gingivitis and periodontitis",
      "Eliminates persistent bad breath (halitosis)",
      "Removes surface stains from tea, coffee, and tobacco",
      "Protects natural enamel with fluoride finish"
    ],
    procedureSteps: [
      "Digital oral examination & plaque mapping",
      "Gentle ultrasonic cavitation tartar removal",
      "Subgingival pocket flushing with antiseptic wash",
      "Diamond polishing & topical fluoride varnish"
    ],
    idealFor: "Routine 6-month checkup, bleeding gums, yellowish stains, or bad breath.",
    estimatedPrice: "Starting from ₹1,200",
    popular: true
  },
  {
    id: "root-canal",
    name: "Root Canal Treatment (RCT)",
    category: "Endodontics",
    tagline: "Treatment for infected teeth with pain-free rotary technology.",
    description: "Advanced single-sitting root canal treatment using 3D apex locators and computerized rotary endodontics to save damaged teeth painlessly.",
    fullDetails: "When dental decay reaches the innermost pulp chamber, infection causes acute throbbing pain. Our specialist endodontists remove the infected nerve tissue, disinfect the root canals under continuous apex monitoring, and hermetically seal the tooth with bio-compatible gutta-percha followed by a precision ceramic crown.",
    duration: "45 – 60 mins (Single or 2 sittings)",
    recoveryTime: "24 – 48 hours",
    benefits: [
      "Immediate and permanent relief from severe toothache",
      "Saves your natural tooth structure for life",
      "Prevents bone loss and spread of infection into jaw",
      "Virtually painless with modern computer-aided anesthesia"
    ],
    procedureSteps: [
      "Digital low-radiation RVG X-ray diagnostics",
      "Painless local anesthesia administration",
      "Computerized rotary canal shaping & laser disinfection",
      "Hermetic thermo-plasticized gutta-percha filling & core buildup"
    ],
    idealFor: "Severe toothache, pain when chewing, sensitivity to hot/cold, or cracked teeth.",
    estimatedPrice: "Starting from ₹3,500",
    popular: true
  },
  {
    id: "braces",
    name: "Braces & Clear Aligners",
    category: "Orthodontics",
    tagline: "Orthodontic treatment for perfectly straight teeth and confident smiles.",
    description: "Comprehensive teeth straightening solutions including invisible clear aligners, self-ligating ceramic braces, and traditional metal braces for teens and adults.",
    fullDetails: "Correct crooked teeth, spacing gaps, crowded bites, and misaligned jaws with custom digital orthodontic treatment plans. We offer customized invisible clear aligners that you can remove during meals, as well as high-aesthetic ceramic braces that blend discreetly with your natural teeth.",
    duration: "6 – 18 months total treatment",
    recoveryTime: "No downtime, minor adaptation in 2 days",
    benefits: [
      "Permanent correction of crowding, gaps, and overbites",
      "Nearly invisible options with custom clear aligner trays",
      "Improves chewing mechanics, bite balance, and speech",
      "Easy maintenance with digital progress monitoring"
    ],
    procedureSteps: [
      "Intraoral 3D digital scan & facial aesthetic mapping",
      "Virtual treatment outcome simulation video",
      "Custom appliance bonding or precision aligner delivery",
      "Periodic progress review & retainer stabilization"
    ],
    idealFor: "Gaps between teeth, crooked or overlapping teeth, deep bite, or open bite.",
    estimatedPrice: "Starting from ₹24,000",
    popular: true
  },
  {
    id: "dental-implants",
    name: "Dental Implants",
    category: "Implantology",
    tagline: "Tooth replacement services that look, feel, and function like natural teeth.",
    description: "Permanent titanium and zirconia root replacements that fuse directly into the jawbone, supporting custom crowns, bridges, or full-arch dentures.",
    fullDetails: "A dental implant is the golden standard for replacing one or more missing teeth. It prevents facial muscle sagging and adjacent teeth migration. At Clove Dental Jangpura, our implant specialists utilize guided surgical protocols and Grade-V medical titanium implants with lifetime warranties on selected systems.",
    duration: "40 – 60 mins per implant surgery",
    recoveryTime: "2 – 3 days",
    benefits: [
      "Looks, feels, and chews 100% like your natural tooth",
      "Preserves adjacent healthy teeth without grinding",
      "Prevents bone resorption and premature facial aging",
      "Permanent solution designed to last a lifetime"
    ],
    procedureSteps: [
      "CBCT 3D bone volume and nerve canal assessment",
      "Minimally invasive computer-guided implant placement",
      "Osseointegration healing with temporary protective crown",
      "Precision digital CAD/CAM permanent zirconia crown placement"
    ],
    idealFor: "Missing teeth from trauma or extraction, loose dentures, or gap replacement.",
    estimatedPrice: "Starting from ₹19,500",
    popular: true
  },
  {
    id: "teeth-whitening",
    name: "Professional Teeth Whitening",
    category: "Cosmetic Dentistry",
    tagline: "In-office LED smile brightening by up to 6–8 shades.",
    description: "Safe, enamel-friendly cosmetic whitening session that lifts deep intrinsic stains caused by aging, dietary pigments, and spices.",
    fullDetails: "Our clinic-grade laser and LED cold-light activated whitening gel works selectively on discolored molecules within the enamel prisms without causing dehydration or acute dentin sensitivity.",
    duration: "45 mins",
    recoveryTime: "Immediate",
    benefits: [
      "Noticeably brighter smile in a single 45-minute appointment",
      "Clinically controlled to avoid tooth sensitivity",
      "Removes years of yellow tea, coffee, and turmeric stains",
      "Includes take-home remineralization booster"
    ],
    procedureSteps: [
      "Gingival barrier protection application",
      "Medical-grade whitening gel coating",
      "Cool-light LED exposure cycle (3 x 15 mins)",
      "Desensitizing rinse & post-treatment shade check"
    ],
    idealFor: "Upcoming weddings, interviews, photo events, or discolored teeth.",
    estimatedPrice: "Starting from ₹5,500"
  },
  {
    id: "pediatric-dentistry",
    name: "Kids & Family Dental Care",
    category: "Pediatric Care",
    tagline: "Gentle, stress-free dental care for children and young teens.",
    description: "Friendly preventative care, fluoride sealants, painless cavity fillings, and habit-breaking appliances designed to build positive dental habits.",
    fullDetails: "Our pedodontists specialize in child psychology and gentle techniques so children look forward to dental checkups. We focus on preventive cavity prevention with pit and fissure sealants and pain-free restorative care.",
    duration: "30 mins",
    recoveryTime: "Immediate",
    benefits: [
      "Fear-free child-friendly operatory environment",
      "Pit & fissure sealants to prevent 80% of childhood cavities",
      "Early orthodontic monitoring to prevent severe bite issues",
      "Oral hygiene education with fun brushing demonstrations"
    ],
    procedureSteps: [
      "Comforting child orientation & gentle touch examination",
      "Painless cavity cleaning or protective sealant application",
      "Fluoride tooth strengthening coat",
      "Complimentary smile warrior certificate"
    ],
    idealFor: "Children ages 1 to 14, milk tooth cavities, thumb-sucking habits, or routine checks.",
    estimatedPrice: "Starting from ₹900"
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-r-kumar",
    name: "Dr. R. Kumar",
    title: "Chief Dental Surgeon & Implantologist",
    qualifications: "BDS, MDS (Prosthodontics & Implantology), FICOI (USA)",
    experienceYears: 16,
    specialty: "Dental Implants & Full Mouth Rehabilitation",
    bio: "With over 16 years of clinical surgical excellence, Dr. Kumar has placed more than 2,800 successful dental implants. He specializes in computer-guided painless implantology and complex cosmetic reconstruction.",
    availability: "Mon, Wed, Fri, Sat (10:00 AM – 7:30 PM)",
    consultationFee: "₹500 (Free in first booking)",
    initials: "RK",
    avatarBg: "from-sky-500 to-blue-600"
  },
  {
    id: "dr-ananya-sharma",
    name: "Dr. Ananya Sharma",
    title: "Senior Consultant Orthodontist",
    qualifications: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    experienceYears: 12,
    specialty: "Invisalign & Clear Aligners Specialist",
    bio: "Dr. Ananya is a certified Clear Aligner provider who has treated over 1,400 adult and teenage malocclusion cases in South Delhi. She combines facial aesthetics with precision digital movement planning.",
    availability: "Tue, Thu, Sat, Sun (11:00 AM – 8:00 PM)",
    consultationFee: "₹500 (Free in first booking)",
    initials: "AS",
    avatarBg: "from-cyan-500 to-sky-600"
  },
  {
    id: "dr-vikramaditya-sen",
    name: "Dr. Vikramaditya Sen",
    title: "Specialist Endodontist",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    experienceYears: 11,
    specialty: "Microscopic Single-Sitting Root Canal Specialist",
    bio: "Specializing in painless single-visit root canal therapy and microscopic tooth preservation, Dr. Sen is renowned for treating complicated root anatomies with zero patient discomfort.",
    availability: "Mon, Tue, Wed, Fri, Sun (10:00 AM – 7:00 PM)",
    consultationFee: "₹500 (Free in first booking)",
    initials: "VS",
    avatarBg: "from-blue-600 to-indigo-600"
  },
  {
    id: "dr-meera-singhania",
    name: "Dr. Meera Singhania",
    title: "Aesthetic Dentist & Pedodontist",
    qualifications: "BDS, Fellowship in Aesthetic Dentistry (Germany)",
    experienceYears: 9,
    specialty: "Teeth Whitening, Veneers & Pediatric Care",
    bio: "Dr. Meera brings an artistic touch to smile transformations, composite bonding, and porcelain veneers. Her calm demeanor makes both anxious adults and toddlers feel immediately at ease.",
    availability: "Mon, Thu, Fri, Sat, Sun (10:30 AM – 8:00 PM)",
    consultationFee: "₹500 (Free in first booking)",
    initials: "MS",
    avatarBg: "from-sky-400 to-teal-500"
  }
];

export const STERILIZATION_STEPS = [
  { step: "01", title: "Ultrasonic Enzymatic Cleaning", desc: "Instruments undergo cavitation in medical-grade antimicrobial enzymes to dissolve microscopic debris." },
  { step: "02", title: "Manual Scrub & Inspection", desc: "Magnified optical check under surgical task lighting to ensure instruments are immaculate." },
  { step: "03", title: "Medical Autoclave Pouching", desc: "Each instrument set is sealed hermetically into a medical indicator pouch with chemical tape." },
  { step: "04", title: "Class-B Vacuum Autoclaving", desc: "Pressurized steam sterilization at 134°C kills 100% of bacterial spores, viruses, and pathogens." },
  { step: "05", title: "Chairside Pouch Opening", desc: "Pouch seals are broken only at your chair right in front of your eyes before treatment commences." }
];

export const REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    patientName: "Rohit Malhotra",
    location: "Jangpura Extension, New Delhi",
    treatment: "Root Canal & Zirconia Crown",
    rating: 5,
    date: "2 weeks ago",
    reviewText: "I was terrified of getting a root canal after a bad experience elsewhere. Dr. Vikramaditya at Clove Dental Jangpura completed the entire procedure in one sitting with absolutely zero pain. The clinic hygiene on Samman Bazar Road is top-notch, and the staff is courteous.",
    verified: true
  },
  {
    id: "rev-2",
    patientName: "Priyanka Vats",
    location: "Defence Colony, New Delhi",
    treatment: "Clear Aligners",
    rating: 5,
    date: "1 month ago",
    reviewText: "Got my orthodontic aligners through Dr. Ananya. The 3D digital scan showed me my final smile outcome before even starting. 8 months down the line, my gap is completely closed and nobody even noticed I was wearing aligners!",
    verified: true
  },
  {
    id: "rev-3",
    patientName: "Gurpreet Singh Bedi",
    location: "Bhogal, New Delhi",
    treatment: "Dental Implant",
    rating: 5,
    date: "2 months ago",
    reviewText: "Living right in Bhogal, I have walked past this clinic for years. When I lost my lower molar, Dr. Kumar placed a titanium implant with pinpoint precision. Six months later, it feels identical to my original tooth. Deserves every bit of its 4.9 rating.",
    verified: true
  },
  {
    id: "rev-4",
    patientName: "Sunita Aggarwal",
    location: "Lajpat Nagar, New Delhi",
    treatment: "Teeth Cleaning & Polishing",
    rating: 5,
    date: "3 weeks ago",
    reviewText: "Came for routine scaling and stain removal. The hygienist was exceptionally gentle, explained every step on the monitor, and opened sealed sterilized instruments in front of me. Very transparent pricing without unnecessary upselling.",
    verified: true
  },
  {
    id: "rev-5",
    patientName: "Aditya Khurana",
    location: "Nizamuddin East, New Delhi",
    treatment: "Teeth Whitening",
    rating: 5,
    date: "1 month ago",
    reviewText: "Had a 45-minute in-office whitening session right before my brother's wedding. Lifted severe tea stains and made my smile visibly brighter without any gum sensitivity. High-end equipment and super punctual timings.",
    verified: true
  },
  {
    id: "rev-6",
    patientName: "Kavita Nair",
    location: "Jangpura, New Delhi",
    treatment: "Kids Dental Checkup",
    rating: 5,
    date: "2 months ago",
    reviewText: "Took my 6-year-old daughter who was terrified of doctors. Dr. Meera was so patient and playful that my daughter didn't even realize the cavity filling was completed! The best dental clinic for families in South Delhi.",
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Where is Clove Dental located in Jangpura and how do I reach it?",
    answer: "Our clinic is located on Samman Bazar Road in Bhogal, Jangpura, New Delhi (PIN 110014). It is just 5 minutes away from the Jangpura Metro Station (Violet Line). Ample two-wheeler and nearby designated car parking is accessible.",
    category: "Location & Visiting"
  },
  {
    question: "What are your clinic opening hours in Jangpura?",
    answer: "We are open 7 days a week, Monday through Sunday, from 10:00 AM to 8:00 PM. Evening slots after 6:00 PM are available for working professionals and school children.",
    category: "Appointments"
  },
  {
    question: "Is root canal treatment really pain-free at Clove Dental?",
    answer: "Yes! With computerized local anesthesia, precision apex locators, and rotary files, root canal treatment is as comfortable as getting a regular filling. Over 96% of our patients report feeling no pain during the procedure.",
    category: "Treatments"
  },
  {
    question: "How do you ensure sterilization and infection control?",
    answer: "We follow a stringent 10-step sterilization protocol adhering to Dental Council of India (DCI) and ADA guidelines. All instruments are sealed in surgical autoclave pouches and unsealed directly in front of the patient.",
    category: "Safety & Hygiene"
  },
  {
    question: "Do you offer flexible EMI payment options for braces and implants?",
    answer: "Yes, we provide 0% interest monthly EMI options on major credit/debit cards and healthcare financing partners for treatments like dental implants, braces, and full mouth rehabilitations.",
    category: "Pricing & Insurance"
  },
  {
    question: "Can I walk in for an emergency toothache without a prior booking?",
    answer: "Yes! While pre-booked appointments minimize waiting time, we accommodate emergency walk-in patients during our operational hours (10:00 AM – 8:00 PM) for urgent pain relief and trauma care.",
    category: "Appointments"
  }
];

export const TIME_SLOTS = {
  morning: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"],
  afternoon: ["01:00 PM", "01:30 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM"],
  evening: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"]
};
