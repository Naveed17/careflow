export const DOWNLOAD_URL =
  'https://github.com/Naveed17/clinic-app/releases/latest/download/CareFlow-Setup.exe';

export const ANNUAL_BASE_PRICE_USD = 108;
export const BASE_PRICE_USD = 108;
export const FULL_PRICE_USD = 108;
export const MONTHLY_BASE_PRICE_USD = 18;
export const MONTHLY_FULL_PRICE_USD = 18;
export const ONLINE_DB_ANNUAL_USD = 30;
export const ONLINE_DB_MONTHLY_USD = 5;
export const WHATSAPP_HOSTED_MONTHLY_USD = 10;
export const AI_HOSTED_MONTHLY_USD = 10;
export const WHATSAPP_AI_MONTHLY_USD = 10;
export const ONLINE_DB_PERIOD_YEARS = 1;
export const ONLINE_DB_PERIOD_MONTHS = 1;
export const WHATSAPP_AI_PERIOD_MONTHS = 1;

export const BASE_FEATURES = [
  {
    key: 'doctorDashboard',
    label: 'Doctor Dashboard',
    hint: 'Doctor queue, visits & prescription workflow',
  },
  {
    key: 'reception',
    label: 'Reception / OPD Desk',
    hint: 'Tokens, patients, booking & receptionist staff accounts',
  },
  {
    key: 'billing',
    label: 'Billing / Invoices',
    hint: 'Create invoices, take payments & pending bills',
  },
  {
    key: 'manageMedicines',
    label: 'Manage Medicines',
    hint: 'Medicine catalog & prices for prescriptions and invoices',
  },
  {
    key: 'labDashboard',
    label: 'Lab Dashboard',
    hint: 'Lab technician panel & results (included in package)',
  },
  {
    key: 'opdReports',
    label: 'OPD Reports',
    hint: 'Receptionist daily invoice & doctor fee settlement (included in package)',
  },
  {
    key: 'statistics',
    label: 'Statistics',
    hint: 'Charts & clinic analytics (included in package)',
  },
  {
    key: 'chat',
    label: 'Staff Chat',
    hint: 'In-app staff chat on LAN & Online DB (included in package)',
  },
] as const;

export const INCLUDED_SOFTWARE_ADDONS = [
  {
    key: 'doctorDashboard',
    label: 'Doctor Dashboard',
    hint: 'Doctor queue, OPD visits & electronic prescriptions (EMR)',
  },
  {
    key: 'reception',
    label: 'Reception & Token Desk',
    hint: 'Patient registration, appointment booking & token queue management',
  },
  {
    key: 'billing',
    label: 'Billing & Invoices',
    hint: 'Create itemized invoices, track payments & OPD fee settlements',
  },
  {
    key: 'labDashboard',
    label: 'Lab Dashboard',
    hint: 'Lab technician panel, test templates & result reports',
  },
  {
    key: 'opdReports',
    label: 'OPD Reports',
    hint: 'Daily financial settlement & doctor fee distribution reports',
  },
  {
    key: 'statistics',
    label: 'Clinic Analytics & Stats',
    hint: 'Visual charts, patient metrics & income insights',
  },
  {
    key: 'manageUsers',
    label: 'Staff & Admin Management',
    hint: 'Manage doctor profiles, receptionists, lab techs & admin accounts',
  },
  {
    key: 'chat',
    label: 'Staff Team Chat',
    hint: 'Internal real-time messaging between doctors, receptionists & staff',
  },
] as const;

/** Ideas for future paid add-ons (not sold yet). */
export const FUTURE_PREMIUM = [
  { label: 'Pharmacy / Inventory', hint: 'Stock, batches, purchase orders & expiry alerts' },
  { label: 'SMS reminders', hint: 'Appointment & follow-up SMS to patients' },
  { label: 'Multi-branch', hint: 'One license across multiple clinic locations' },
  { label: 'Cloud backups', hint: 'Scheduled encrypted off-site backups' },
] as const;

export const ADDON_FEATURES = [
  {
    key: 'whatsapp',
    label: 'WhatsApp Cloud API',
    hint: 'In-app send, documents & campaigns (WhatsApp Web is always free). Hosted usage is $10/mo, then auto-off after 1 month unless you renew.',
    price: 10,
    monthlyPrice: 10,
    hosted: true,
  },
  {
    key: 'ai',
    label: 'AI Assist',
    hint: 'History summarize, Rx draft & per-clinic Groq Connect. Hosted usage is $10/mo, then auto-off after 1 month unless you renew.',
    price: 10,
    monthlyPrice: 10,
    hosted: true,
  },
] as const;

export function licenseApiBase() {
  return (import.meta.env.PUBLIC_LICENSE_API_URL || 'http://localhost:4000').replace(/\/+$/, '');
}
