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
    'CareFlow is desktop clinic management software for Windows. Manage patients, OPD tokens, appointments, prescriptions, billing, pharmacy and lab — offline SQLite, LAN multi-PC, role-based access.',
  keywords: [
    'clinic management software',
    'clinic management system',
    'OPD token system',
    'prescription software',
    'medical clinic software Windows',
    'desktop EMR clinic',
    'offline clinic software',
    'LAN clinic management',
    'pharmacy inventory clinic',
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
      'CareFlow is a Windows desktop clinic management system for small and mid-size clinics. It covers patients, OPD tokens, appointments, prescriptions, billing, pharmacy inventory, lab orders, statistics, doctors & schedules, and role-based staff access — with offline SQLite storage and LAN multi-PC sync.',
  },
  {
    question: 'Does CareFlow work offline without the internet?',
    answer:
      'Yes. CareFlow is built offline-first on SQLite. Clinics can run day-to-day operations without a constant internet connection. Multiple PCs can share the same clinic workspace over a local LAN.',
  },
  {
    question: 'Which clinic roles does CareFlow support?',
    answer:
      'CareFlow includes dedicated workflows for Admin, Doctor, Reception, Lab technician, and Pharmacy. The core package includes Admin + Receptionist accounts. Doctor, Lab and Pharmacist roles unlock with their modules. Extra admin accounts are an optional add-on.',
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
      'Modules include Dashboard, Patients, Appointments, OPD Tokens, Prescription Pad, Billing, Inventory, Lab, Statistics, Doctors & Schedule, and staff accounts. Receptionist users are included in the core package; extra admin accounts and staff delete are an optional add-on.',
  },
  {
    question: 'What does online database, WhatsApp and AI cost?',
    answer:
      'The Windows license is a one-time lifetime purchase ($100 core, $300 full modules). Hosted online database is $100 per year and auto-off after 1 year. WhatsApp Cloud API or AI Assist adds $30 per month (one fee even if both are on) and auto-off after 1 month. Renew on careflow.app/renew with your license key — payment turns the service back on from that day.',
  },
  {
    question: 'How do I renew WhatsApp, AI or online database after they auto-off?',
    answer:
      'Open careflow.app/renew, enter your lifetime license key, choose Online DB ($100/year) and/or WhatsApp / AI ($30/month), and pay with Paddle. That day starts a new period and the features turn back on in CareFlow. Paying early adds another period onto the remaining days.',
  },
];
