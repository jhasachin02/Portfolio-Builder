import React from 'react';
import { Printer } from 'lucide-react';
import { InvoiceData } from '../types/invoice';
import { formatCurrency } from '../utils/calculations';

interface InvoicePreviewProps {
  invoice: InvoiceData;
}

export const InvoicePreview: React.FC<InvoicePreviewProps> = ({ invoice }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 border-b border-gray-200 print:hidden gap-2">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Invoice Preview</h2>
        <button
          onClick={handlePrint}
          className="flex items-center px-3 sm:px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          <Printer className="w-4 h-4 mr-2" />
          Print Invoice
        </button>
      </div>

      <div className="p-4 sm:p-8 print:p-0" id="invoice-content">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">INVOICE</h1>
            <div className="text-sm text-gray-600">
              <p><strong>Invoice #:</strong> {invoice.invoiceNumber}</p>
              <p><strong>Date:</strong> {invoice.date}</p>
              <p><strong>Due Date:</strong> {invoice.dueDate}</p>
            </div>
          </div>
        </div>

        {/* Company and Client Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">From:</h3>
            <div className="text-sm text-gray-700">
              <p className="font-semibold text-base">{invoice.company.name}</p>
              <p>{invoice.company.address}</p>
              <p>{invoice.company.city}, {invoice.company.state} {invoice.company.pincode}</p>
              <p><strong>GSTIN:</strong> {invoice.company.gstin}</p>
              {invoice.company.email && <p><strong>Email:</strong> {invoice.company.email}</p>}
              {invoice.company.phone && <p><strong>Phone:</strong> {invoice.company.phone}</p>}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">To:</h3>
            <div className="text-sm text-gray-700">
              <p className="font-semibold text-base">{invoice.client.name}</p>
              <p>{invoice.client.address}</p>
              <p>{invoice.client.city}, {invoice.client.state} {invoice.client.pincode}</p>
              {invoice.client.gstin && <p><strong>GSTIN:</strong> {invoice.client.gstin}</p>}
              {invoice.client.email && <p><strong>Email:</strong> {invoice.client.email}</p>}
              {invoice.client.phone && <p><strong>Phone:</strong> {invoice.client.phone}</p>}
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-6 sm:mb-8">
          <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Qty</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Rate</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-4 py-3">{item.description}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">{item.quantity}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">{formatCurrency(item.rate)}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">{formatCurrency(item.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-6 sm:mb-8">
          <div className="w-full max-w-xs sm:max-w-md">
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b">
                <span>Subtotal:</span>
                <span className="font-medium">{formatCurrency(invoice.subtotal)}</span>
              </div>
              {invoice.cgst > 0 && (
                <div className="flex justify-between py-1">
                  <span>CGST (9%):</span>
                  <span>{formatCurrency(invoice.cgst)}</span>
                </div>
              )}
              {invoice.sgst > 0 && (
                <div className="flex justify-between py-1">
                  <span>SGST (9%):</span>
                  <span>{formatCurrency(invoice.sgst)}</span>
                </div>
              )}
              {invoice.igst > 0 && (
                <div className="flex justify-between py-1">
                  <span>IGST (18%):</span>
                  <span>{formatCurrency(invoice.igst)}</span>
                </div>
              )}
              <div className="flex justify-between py-3 border-t-2 border-gray-300 text-lg font-bold">
                <span>Total:</span>
                <span>{formatCurrency(invoice.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        {invoice.notes && (
          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Notes:</h3>
            <p className="text-xs sm:text-sm text-gray-700">{invoice.notes}</p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-xs sm:text-sm text-gray-500 pt-6 sm:pt-8 border-t">
          <p>Thank you for your business!</p>
        </div>
      </div>
    </div>
  );
};