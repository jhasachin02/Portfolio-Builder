'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight, Play, Users, Zap, Paintbrush2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [demoPrompt, setDemoPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!demoPrompt.trim()) return;
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black text-white">
      {/* Hero Section */}
      <main className="relative pt-32 md:pt-40">
        {/* Animated Floating Blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-400/30 blur-3xl float-blob z-0"></div>
        <div className="absolute -bottom-24 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/20 blur-3xl float-blob z-0"></div>
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 animate-pulse opacity-50"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 fade-in">
          {/* Main Heading */}
          <div className="text-center max-w-6xl mx-auto mb-16 fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="block mb-2">Design the future:</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                AI-powered concepts in seconds
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed fade-in">
              Visualize, communicate, and iterate on wireframes and prototypes in minutes.
              <br />
              <span className="text-purple-300">Empower your product team with AI!</span>
            </p>
          </div>

          {/* AI Generator Input */}
          <div className="max-w-3xl mx-auto mb-16 fade-in">
            <div className="glass-card p-3 rounded-2xl shadow-2xl">
              <div className="flex gap-3 items-center">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={demoPrompt}
                    onChange={(e) => setDemoPrompt(e.target.value)}
                    placeholder="An e-commerce website for selling handmade jewelry..."
                    className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-400 text-lg border-none outline-none"
                  />
                  {demoPrompt && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !demoPrompt.trim()}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold 
                           hover:from-purple-700 hover:to-pink-700 transition-all duration-200 
                           disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 btn-hover"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-20 px-4 relative fade-in">
        {/* Animated Floating Blob */}
        <div className="absolute -top-16 right-1/3 w-56 h-56 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-400/20 blur-3xl float-blob z-0"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              UI design for{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                disruptive product teams
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Collaborate in real-time with AI and your entire product team. In our platform,
              everyone can contribute to building the next big thing!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards with staggered fade-in */}
            {[0,1,2,3,4,5].map((i) => (
              <div key={i} className={`glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300 animated-box fade-in`} style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
                {/* Feature 1 */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Paintbrush2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Generate prototypes</h3>
                <p className="text-gray-300 leading-relaxed">
                  No ideas left behind... generate multi-screen, editable prototypes in seconds using simple text.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold mb-8">
            Ready to{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              transform
            </span>
            {' '}your design process?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of product teams who are already building the future with AI-powered design tools.
          </p>
          <button className="inline-flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg btn-hover">
            <Sparkles className="w-6 h-6" />
            Sign up for free
          </button>
        </div>
      </section>
    </div>
  );
}
