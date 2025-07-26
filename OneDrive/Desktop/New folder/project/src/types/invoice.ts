export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface CompanyDetails {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  gstin: string;
  email: string;
  phone: string;
}

export interface ClientDetails {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  gstin?: string;
  email?: string;
  phone?: string;
}

export interface InvoiceData {
  invoiceNumber: string;
  date: string;
  dueDate: string;
  company: CompanyDetails;
  client: ClientDetails;
  items: InvoiceItem[];
  subtotal: number;
  cgst: number;
  sgst: number;
  igst: number;
  total: number;
  notes?: string;
}