import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/src/index.css';
import { useState } from 'react';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <>
      <DefaultSeo
        title="Professional CA & Associates - Premier Financial Services"
        description="Professional CA & Associates - Premier professional services firm delivering excellence in audit, taxation, and business advisory services for over four decades."
        canonical="https://professionalca.dev"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://professionalca.dev',
          site_name: 'Professional CA & Associates',
          title: 'Professional CA & Associates - Premier Financial Services',
          description: 'Expert audit, taxation, and business advisory services for over four decades.',
          images: [
            {
              url: 'https://professionalca.dev/opengraph-image.png',
              width: 1200,
              height: 630,
              alt: 'Professional CA & Associates',
            },
          ],
        }}
        twitter={{
          handle: '@professionalca',
          site: '@professionalca',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'author',
            content: 'Professional CA & Associates',
          },
          {
            name: 'keywords',
            content: 'CA, Chartered Accountant, Audit, Taxation, Business Advisory, Financial Services, Professional Services',
          },
          {
            name: 'robots',
            content: 'index, follow',
          },
        ]}
      />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
