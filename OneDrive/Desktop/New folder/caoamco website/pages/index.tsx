import { NextSeo } from 'next-seo';
import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import About from '@/src/components/About';
import Services from '@/src/components/Services';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <>
      <NextSeo
        title="O A M & CO - Premier Chartered Accountants & Financial Services"
        description="O A M & CO - Established in 2009, providing quality services in Audit, Investigation, Due Diligence, Taxation, Company Law, and Management Consultancy with over 15 years of professional experience."
        canonical="https://oamco.dev"
        openGraph={{
          url: 'https://oamco.dev',
          title: 'O A M & CO - Premier Chartered Accountants & Financial Services',
          description: 'Expert audit, taxation, company law, and business advisory services with specialized knowledge and extensive practical experience.',
          images: [
            {
              url: 'https://oamco.dev/opengraph-image.png',
              width: 1200,
              height: 630,
              alt: 'O A M & CO',
            },
          ],
          site_name: 'O A M & CO',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'O A M & CO, Chartered Accountant, Audit, Taxation, Due Diligence, GST, Income Tax, Company Law, FEMA, Investigation, Management Consultancy, Business Setup, Corporate Financing',
          },
        ]}
      />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
