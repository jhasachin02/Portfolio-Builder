import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <NextSeo
        title="Page Not Found - Professional CA & Associates"
        description="The page you are looking for could not be found."
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-indigo-600">404</h1>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for could not be found.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}
