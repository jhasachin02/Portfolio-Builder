import Link from 'next/link';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <div className="flex space-x-4">
            <Link 
              href="/signin" 
              className="px-6 py-2 text-white border border-white/20 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to the{' '}
              <span className="gradient-text-blue">
                Future
              </span>
              {' '}of AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the next generation of artificial intelligence with our cutting-edge platform. 
              Build, deploy, and scale AI solutions with unprecedented ease.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Process data and generate insights at incredible speeds with our optimized AI engine.</p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-400">Enterprise-grade security with 99.9% uptime guarantee for your critical AI workloads.</p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Easy Integration</h3>
              <p className="text-gray-400">Seamlessly integrate with your existing systems using our comprehensive API suite.</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/signup" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105"
            >
              Start Building Now
            </Link>
            <Link 
              href="#demo" 
              className="px-8 py-4 border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/5 transition-all duration-200"
            >
              View Demo
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
