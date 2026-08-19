export const DOWNLOAD_URL =
  'https://github.com/Naveed17/clinic-app/releases/latest/download/CareFlow-Setup.exe';

export const BASE_PRICE_USD = 200;
export const FULL_PRICE_USD = 400;
export const MONTHLY_BASE_PRICE_USD = 50;
export const MONTHLY_FULL_PRICE_USD = 111;
export const ONLINE_DB_ANNUAL_USD = 100;
export const WHATSAPP_AI_MONTHLY_USD = 30;
export const ONLINE_DB_PERIOD_YEARS = 1;
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
    key: 'staff',
    label: 'Receptionist accounts',
    hint: 'Users page included — add receptionist staff without an extra module',
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
  { key: 'labDashboard', label: 'Lab Dashboard', hint: 'Lab technician panel & results', price: 80, monthlyPrice: 25 },
  { key: 'reports', label: 'Reports', hint: 'Operational & financial reports', price: 25, monthlyPrice: 12 },
  { key: 'statistics', label: 'Statistics', hint: 'Charts & clinic analytics', price: 25, monthlyPrice: 12 },
  {
    key: 'manageUsers',
    label: 'Extra Admins',
    hint: 'Delete staff & extra admin accounts (Receptionist is always included)',
    price: 25,
    monthlyPrice: 12,
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp Cloud API',
    hint: 'In-app send, documents & campaigns (WhatsApp Web is always free). Hosted usage is $30/mo with AI, then auto-off after 1 month unless you renew.',
    price: 25,
    hosted: true,
  },
  {
    key: 'ai',
    label: 'AI Assist',
    hint: 'History summarize, Rx draft & per-clinic Groq Connect. Hosted usage is $30/mo with WhatsApp, then auto-off after 1 month unless you renew.',
    price: 20,
    hosted: true,
  },
] as const;

export function licenseApiBase() {
  return (import.meta.env.PUBLIC_LICENSE_API_URL || 'http://localhost:4000').replace(/\/+$/, '');
}
