import React, { useState } from 'react';
import { usePortfolio } from '../../contexts/PortfolioContext';
import { ComponentPalette } from './ComponentPalette';
import { PortfolioPreview } from './PortfolioPreview';
import { EditorSidebar } from './EditorSidebar';
import { ArrowLeft, Save, Eye, Download } from 'lucide-react';

export const PortfolioEditor: React.FC = () => {
  const { currentPortfolio, setCurrentPortfolio, updatePortfolio } = usePortfolio();
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState(false);

  if (!currentPortfolio) {
    return null;
  }

  const handleSave = async () => {
    await updatePortfolio(currentPortfolio);
  };

  const handleExport = () => {
    // Export functionality would generate static HTML/CSS
    alert('Export functionality coming soon!');
  };

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentPortfolio(null)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-semibold">{currentPortfolio.title}</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                previewMode ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Eye className="w-4 h-4" />
              {previewMode ? 'Edit' : 'Preview'}
            </button>
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={handleExport}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full pt-20">
        {!previewMode && (
          <>
            {/* Component Palette */}
            <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
              <ComponentPalette />
            </div>

            {/* Editor Sidebar */}
            {selectedComponent && (
              <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
                <EditorSidebar 
                  componentId={selectedComponent}
                  onClose={() => setSelectedComponent(null)}
                />
              </div>
            )}
          </>
        )}

        {/* Preview Area */}
        <div className="flex-1 overflow-y-auto">
          <PortfolioPreview
            portfolio={currentPortfolio}
            selectedComponent={selectedComponent}
            onSelectComponent={setSelectedComponent}
            isPreviewMode={previewMode}
          />
        </div>
      </div>
    </div>
  );
};