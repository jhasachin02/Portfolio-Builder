'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log('Google sign-in clicked');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-4">
        <div className="container mx-auto">
          <Logo />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Sign In Card */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl shadow-lg border border-cyan-400/10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                Welcome Back
              </h1>
              <p className="text-gray-400">
                Sign in to your AI Platform account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Sign in form">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-black/40 border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200"
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  aria-label="Email address"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-black/40 border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200"
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                  aria-label="Password"
                />
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link 
                  href="#" 
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 focus:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium shadow-md hover:from-cyan-400 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-busy={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-cyan-400/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-gray-400">Or continue with</span>
                </div>
              </div>

              {/* Google Sign In Button */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center px-4 py-3 border border-cyan-400/20 rounded-lg bg-black/40 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200"
                aria-label="Continue with Google"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Don&apos;t have an account?{' '}
                <Link 
                  href="/signup" 
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 focus:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignInPage;
