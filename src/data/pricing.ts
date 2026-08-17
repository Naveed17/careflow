export const DOWNLOAD_URL =
  'https://github.com/Naveed17/clinic-app/releases/latest/download/CareFlow-Setup.exe';

export const BASE_PRICE_USD = 100;
export const FULL_PRICE_USD = 300;

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
    key: 'staff',
    label: 'Receptionist accounts',
    hint: 'Users page included — add receptionist staff without an extra module',
  },
] as const;

export const ADDON_FEATURES = [
  { key: 'labDashboard', label: 'Lab Dashboard', hint: 'Lab technician panel & results', price: 25 },
  { key: 'billing', label: 'Billing / Invoices', hint: 'Invoices, payments & pending bills', price: 30 },
  { key: 'reports', label: 'Reports', hint: 'Operational & financial reports', price: 20 },
  { key: 'statistics', label: 'Statistics', hint: 'Charts & clinic analytics', price: 20 },
  { key: 'manageMedicines', label: 'Medicines Catalog', hint: 'Medicine list for Rx picker', price: 20 },
  {
    key: 'manageUsers',
    label: 'Extra Admins',
    hint: 'Delete staff & extra admin accounts (Receptionist is always included)',
    price: 20,
  },
  { key: 'pharmacy', label: 'Pharmacy / Inventory', hint: 'Stock, batches & pharmacist desk', price: 30 },
  { key: 'whatsapp', label: 'WhatsApp Cloud API', hint: 'In-app send, documents & campaigns (WhatsApp Web is always free)', price: 20 },
  { key: 'ai', label: 'AI Assist', hint: 'History summarize, Rx draft & per-clinic Groq Connect', price: 15 },
] as const;

export function licenseApiBase() {
  return (import.meta.env.PUBLIC_LICENSE_API_URL || 'http://localhost:4000').replace(/\/+$/, '');
}
