import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { InvoiceItem } from '../types/invoice';
import { calculateItemAmount, formatCurrency } from '../utils/calculations';

interface ItemsFormProps {
  items: InvoiceItem[];
  onUpdate: (items: InvoiceItem[]) => void;
}

export const ItemsForm: React.FC<ItemsFormProps> = ({ items, onUpdate }) => {
  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0
    };
    onUpdate([...items, newItem]);
  };

  const removeItem = (id: string) => {
    onUpdate(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'rate') {
          updatedItem.amount = calculateItemAmount(
            field === 'quantity' ? value as number : updatedItem.quantity,
            field === 'rate' ? value as number : updatedItem.rate
          );
        }
        return updatedItem;
      }
      return item;
    });
    onUpdate(updatedItems);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-2">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Invoice Items</h2>
        <button
          onClick={addItem}
          className="flex items-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Item
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 font-medium text-gray-700">Description</th>
              <th className="text-center py-3 px-2 font-medium text-gray-700 w-24">Qty</th>
              <th className="text-center py-3 px-2 font-medium text-gray-700 w-32">Rate (₹)</th>
              <th className="text-center py-3 px-2 font-medium text-gray-700 w-32">Amount</th>
              <th className="text-center py-3 px-2 font-medium text-gray-700 w-16">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-3 px-2">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter item description"
                  />
                </td>
                <td className="py-3 px-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                    min="0"
                    step="0.01"
                  />
                </td>
                <td className="py-3 px-2">
                  <input
                    type="number"
                    value={item.rate}
                    onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                    min="0"
                    step="0.01"
                  />
                </td>
                <td className="py-3 px-2 text-center font-medium">
                  {formatCurrency(item.amount)}
                </td>
                <td className="py-3 px-2 text-center">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {items.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No items added yet. Click "Add Item" to get started.</p>
        </div>
      )}
    </div>
  );
};