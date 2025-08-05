import React from 'react';
import { Portfolio } from '../../contexts/PortfolioContext';
import { HeroComponent } from '../portfolio/HeroComponent';
import { AboutComponent } from '../portfolio/AboutComponent';
import { ContactComponent } from '../portfolio/ContactComponent';

interface PortfolioPreviewProps {
  portfolio: Portfolio;
  selectedComponent: string | null;
  onSelectComponent: (componentId: string) => void;
  isPreviewMode: boolean;
}

export const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({
  portfolio,
  selectedComponent,
  onSelectComponent,
  isPreviewMode
}) => {
  const renderComponent = (component: import('../../contexts/PortfolioContext').PortfolioComponent) => {
    const isSelected = !isPreviewMode && selectedComponent === component.id;
    const baseClasses = isPreviewMode 
      ? '' 
      : `cursor-pointer hover:ring-2 hover:ring-indigo-400 hover:ring-opacity-50 transition-all ${
          isSelected ? 'ring-2 ring-indigo-500' : ''
        }`;

    const handleClick = () => {
      if (!isPreviewMode) {
        onSelectComponent(component.id);
      }
    };

    switch (component.type) {
      case 'hero':
        return (
          <div key={component.id} className={baseClasses} onClick={handleClick}>
            <HeroComponent data={component.data} theme={portfolio.theme} />
          </div>
        );
      
      case 'about':
        return (
          <div key={component.id} className={baseClasses} onClick={handleClick}>
            <AboutComponent data={component.data} theme={portfolio.theme} />
          </div>
        );
      
      case 'contact':
        return (
          <div key={component.id} className={baseClasses} onClick={handleClick}>
            <ContactComponent data={component.data} theme={portfolio.theme} />
          </div>
        );
      
      default:
        return (
          <div key={component.id} className={`${baseClasses} p-8 bg-gray-100 border-2 border-dashed border-gray-300`} onClick={handleClick}>
            <p className="text-gray-500 text-center">
              {component.type} component (Preview coming soon)
            </p>
          </div>
        );
    }
  };

  return (
    <div className="bg-white">
      {portfolio.components
        .sort((a, b) => a.order - b.order)
        .map(component => renderComponent(component))}
    </div>
  );
};