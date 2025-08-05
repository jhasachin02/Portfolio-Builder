import React from 'react';
import { usePortfolio } from '../../contexts/PortfolioContext';
import { User, FileText, Briefcase, Mail, Star, Award } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const componentTypes = [
  { type: 'hero', label: 'Hero Section', icon: User, description: 'Main introduction section' },
  { type: 'about', label: 'About Me', icon: FileText, description: 'Personal information' },
  { type: 'projects', label: 'Projects', icon: Briefcase, description: 'Portfolio projects' },
  { type: 'skills', label: 'Skills', icon: Star, description: 'Technical skills' },
  { type: 'experience', label: 'Experience', icon: Award, description: 'Work experience' },
  { type: 'contact', label: 'Contact', icon: Mail, description: 'Contact information' },
];

export const ComponentPalette: React.FC = () => {
  const { currentPortfolio, updatePortfolio } = usePortfolio();

  const addComponent = (type: 'hero' | 'about' | 'projects' | 'skills' | 'experience' | 'contact') => {
    if (!currentPortfolio) return;

    const newComponent = {
      id: uuidv4(),
      type: type,
      data: getDefaultData(type),
      order: currentPortfolio.components.length,
    };

    const updatedPortfolio = {
      ...currentPortfolio,
      components: [...currentPortfolio.components, newComponent],
    };

    updatePortfolio(updatedPortfolio);
  };

  const getDefaultData = (type: 'hero' | 'about' | 'projects' | 'skills' | 'experience' | 'contact') => {
    switch (type) {
      case 'hero':
        return {
          name: 'Your Name',
          title: 'Professional Title',
          description: 'Brief description about yourself',
          image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400'
        };
      case 'about':
        return {
          title: 'About Me',
          content: 'Tell your story here...',
          image: 'https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg?auto=compress&cs=tinysrgb&w=400'
        };
      case 'projects':
        return {
          title: 'Projects',
          projects: []
        };
      case 'skills':
        return {
          title: 'Skills',
          skills: []
        };
      case 'experience':
        return {
          title: 'Experience',
          experiences: []
        };
      case 'contact':
        return {
          title: 'Contact Me',
          email: 'your.email@example.com',
          phone: '+1 (555) 123-4567',
          social: {}
        };
      default:
        return {};
    }
  };

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Components</h3>
      <div className="space-y-3">
        {componentTypes.map((component) => {
          const Icon = component.icon;
          return (
            <button
              key={component.type}
              onClick={() => addComponent(component.type as 'hero' | 'about' | 'projects' | 'skills' | 'experience' | 'contact')}
              className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 hover:border-indigo-300 transition-all duration-200 text-left group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-100 group-hover:bg-indigo-200 rounded-lg transition-colors">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {component.label}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{component.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};