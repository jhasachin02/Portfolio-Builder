import { InvoiceItem } from '../types/invoice';

export const calculateItemAmount = (quantity: number, rate: number): number => {
  return quantity * rate;
};

export const calculateSubtotal = (items: InvoiceItem[]): number => {
  return items.reduce((sum, item) => sum + item.amount, 0);
};

export const calculateGST = (subtotal: number, isSameState: boolean) => {
  const gstRate = 0.18; // 18% GST
  const totalGST = subtotal * gstRate;
  
  if (isSameState) {
    return {
      cgst: totalGST / 2,
      sgst: totalGST / 2,
      igst: 0
    };
  } else {
    return {
      cgst: 0,
      sgst: 0,
      igst: totalGST
    };
  }
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(amount);
};

export const generateInvoiceNumber = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `INV-${year}${month}-${random}`;
};