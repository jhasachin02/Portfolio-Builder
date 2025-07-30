import React from 'react';

interface AboutComponentProps {
  data: {
    title: string;
    content: string;
    image: string;
  };
}

export const AboutComponent: React.FC<AboutComponentProps> = ({ data }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={data.image}
              alt="About"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10" />
          </div>
          
          <div>
            <h2 
              className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
            >
              {data.title}
            </h2>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              {data.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                <div className="text-2xl font-bold text-indigo-600 mb-1">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                <div className="text-2xl font-bold text-indigo-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                <div className="text-2xl font-bold text-indigo-600 mb-1">30+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};