export const site = {
  name: 'CareFlow',
  legalName: 'CareFlow Clinic Management',
  url: 'https://careflow.app',
  locale: 'en_PK',
  language: 'en',
  twitter: '@careflow',
  email: 'hello@careflow.app',
  sameAs: [] as string[],
};

export const defaultSeo = {
  title: 'CareFlow — Clinic Management Software for Windows',
  titleTemplate: '%s | CareFlow',
  description:
    'CareFlow is desktop clinic management software for Windows. Manage patients, OPD tokens, appointments, prescriptions, billing and lab — offline SQLite, LAN multi-PC, role-based access.',
  keywords: [
    'clinic management software',
    'clinic management system',
    'OPD token system',
    'prescription software',
    'medical clinic software Windows',
    'desktop EMR clinic',
    'offline clinic software',
    'LAN clinic management',
    'lab management clinic',
    'patient management software',
    'CareFlow',
    'clinic software Pakistan',
  ],
  ogImage: '/og-careflow.png',
  ogImageAlt: 'CareFlow clinic management software for Windows — patients, OPD tokens, prescriptions, billing',
  themeColor: '#16a34a',
};

export const faqs = [
  {
    question: 'What is CareFlow clinic management software?',
    answer:
      'CareFlow is a Windows desktop clinic management system for small and mid-size clinics. It covers patients, OPD tokens, appointments, prescriptions, billing, lab orders, statistics, doctors & schedules, and role-based staff access — with offline SQLite storage and LAN multi-PC sync.',
  },
  {
    question: 'Does CareFlow work offline without the internet?',
    answer:
      'Yes. CareFlow is built offline-first on SQLite. Clinics can run day-to-day operations without a constant internet connection. Multiple PCs can share the same clinic workspace over a local LAN.',
  },
  {
    question: 'Which clinic roles does CareFlow support?',
    answer:
      'CareFlow includes dedicated workflows for Admin, Doctor, Reception, and Lab technician. The core package includes Admin + Receptionist + Doctor desks, billing and the medicines catalog. Lab technician unlocks with the Lab Dashboard add-on. OPD Reports is a receptionist-only add-on. Extra admin accounts are optional.',
  },
  {
    question: 'Can CareFlow print OPD tokens and prescriptions?',
    answer:
      'Yes. Reception can issue walk-in OPD tokens and print slips. Doctors use a prescription pad with letterhead, save records, and export print-ready prescription PDFs.',
  },
  {
    question: 'Is CareFlow a web app or a Windows desktop app?',
    answer:
      'CareFlow is a native Windows desktop application (Electron + React + SQLite). It is designed for clinic PCs on a local network rather than a browser-only SaaS workflow.',
  },
  {
    question: 'What modules are included in CareFlow?',
    answer:
      'Modules include Dashboard, Patients, Appointments, OPD Tokens, Prescription Pad, Billing, Medicines catalog, Lab, OPD Reports, Staff Chat, Statistics, Doctors & Schedule, and staff accounts. Billing and medicines are in the core package. Lab, OPD Reports and Staff Chat are add-ons. Receptionist users are included; extra admin accounts and staff delete are optional.',
  },
  {
    question: 'What does online database, WhatsApp and AI cost?',
    answer:
      'The Windows license is a one-time lifetime purchase ($150 core, $400 full) or a monthly starter at $50/mo (full software $136/mo). Lab is $80 lifetime or $25/mo. OPD Reports is $25 lifetime or $12/mo. Staff Chat is $50 lifetime or $25/mo. WhatsApp and AI keep their current fees ($25 / $20 setup, $30/mo hosted). Online database is $100/year on lifetime or $15/mo on monthly. Renew hosted services on careflow.app/renew.',
  },
  {
    question: 'How do I renew WhatsApp, AI or online database after they auto-off?',
    answer:
      'Open careflow.app/renew, enter your license key, choose Online DB ($100/year lifetime or $15/mo monthly) and/or WhatsApp / AI ($30/month), and pay with Paddle. That day starts a new period and the features turn back on in CareFlow. Paying early adds another period onto the remaining days.',
  },
];
