import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';
import { CompanyForm } from './components/CompanyForm';
import { ClientForm } from './components/ClientForm';
import { ItemsForm } from './components/ItemsForm';
import { InvoicePreview } from './components/InvoicePreview';
import { InvoiceData, CompanyDetails, ClientDetails, InvoiceItem } from './types/invoice';
import { calculateSubtotal, calculateGST, generateInvoiceNumber } from './utils/calculations';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [company, setCompany] = useState<CompanyDetails>({
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    gstin: '',
    email: '',
    phone: ''
  });

  const [client, setClient] = useState<ClientDetails>({
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    gstin: '',
    email: '',
    phone: ''
  });

  const [items, setItems] = useState<InvoiceItem[]>([]);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    setInvoiceNumber(generateInvoiceNumber());
    const today = new Date().toISOString().split('T')[0];
    setInvoiceDate(today);
    
    const due = new Date();
    due.setDate(due.getDate() + 30);
    setDueDate(due.toISOString().split('T')[0]);
  }, []);

  const subtotal = calculateSubtotal(items);
  const isSameState = company.state.toLowerCase() === client.state.toLowerCase();
  const { cgst, sgst, igst } = calculateGST(subtotal, isSameState);
  const total = subtotal + cgst + sgst + igst;

  const invoiceData: InvoiceData = {
    invoiceNumber,
    date: invoiceDate,
    dueDate,
    company,
    client,
    items,
    subtotal,
    cgst,
    sgst,
    igst,
    total,
    notes
  };

  const steps = [
    { title: 'Company Details', component: <CompanyForm company={company} onUpdate={setCompany} /> },
    { title: 'Client Details', component: <ClientForm client={client} onUpdate={setClient} /> },
    { title: 'Invoice Items', component: <ItemsForm items={items} onUpdate={setItems} /> },
    { title: 'Invoice Preview', component: <InvoicePreview invoice={invoiceData} /> }
  ];

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return company.name && company.address && company.city && company.state && company.pincode && company.gstin;
      case 1:
        return client.name && client.address && client.city && client.state && client.pincode;
      case 2:
        return items.length > 0 && items.every(item => item.description && item.quantity > 0 && item.rate >= 0);
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #invoice-content, #invoice-content * {
            visibility: visible;
          }
          #invoice-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:p-0 {
            padding: 0 !important;
          }
        }
      `}</style>

      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Invoice Generator</h1>
          </div>
          <p className="text-gray-600">Create professional invoices with GST calculations</p>
        </div>

        {/* Progress Steps */}
        <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-8 print:hidden">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index <= currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:inline">
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-gray-300 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Invoice Details */}
        {currentStep < 3 && (
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4 sm:mb-6 print:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Invoice Number
                </label>
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter invoice number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Invoice Date
                </label>
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Select invoice date"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Due Date
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Select due date"
                />
              </div>
            </div>
            {currentStep === 2 && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Add any additional notes or terms..."
                />
              </div>
            )}
          </div>
        )}

        {/* Current Step Content */}
        <div className="mb-6 sm:mb-8">
          {steps[currentStep].component}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-2 print:hidden">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1 || !canProceed()}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === steps.length - 1 ? 'Finished' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;