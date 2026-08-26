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
      'CareFlow includes dedicated workflows for Admin, Doctor, Reception, and Lab technician. All software modules including Doctor Dashboard, Reception desk, Billing, Medicines, Lab Dashboard, OPD Reports, Statistics, and Staff Chat are included in the package.',
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
      'Modules include Dashboard, Patients, Appointments, OPD Tokens, Prescription Pad, Billing, Medicines catalog, Lab, OPD Reports, Staff Chat, Statistics, Doctors & Schedule, and staff accounts. All software modules are included in both Annual and Monthly packages. WhatsApp and AI are optional add-ons.',
  },
  {
    question: 'What does online database, WhatsApp and AI cost?',
    answer:
      'CareFlow offers an Annual (Salana) package at ₨30,000/year ($108/yr) and a Monthly package at ₨5,000/month ($18/mo). All software features are included in the package. WhatsApp and AI setup fees are $25 / $20 one-time, with $30/mo hosted usage. Online database is $100/year on annual or $15/mo on monthly.',
  },
  {
    question: 'How do I renew WhatsApp, AI or online database after they auto-off?',
    answer:
      'Open careflow.app/renew, enter your license key, choose Online DB ($100/year annual or $15/mo monthly) and/or WhatsApp / AI ($30/month), and pay securely. That day starts a new period and the features turn back on in CareFlow.',
  },
];
