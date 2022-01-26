import { useRouter } from 'next/router';
import Layout from '../layouts/default';
import { MenuMobileProvider } from '../contexts/mobileMenuContext';
import '../styles/globals.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { trackEvent } from '@/analytics/events';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const [history, setHistory] = useState([]);

  const handleRouteChange = (url, context) => {
    if (url.includes('/contact')) {
      const [firstUrl = null] = history;

      if (firstUrl) {
        trackEvent(`${firstUrl} to /contact`);
      } else {
        trackEvent(`/contact to /contact`);
      }
    }

    setHistory([url, ...history]);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    handleRouteChange(router.asPath);
  }, []);

  return (
    <MenuMobileProvider>
      {pathname.includes('/p/') && <Component {...pageProps} />}
      {!pathname.includes('/p/') && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </MenuMobileProvider>
  );
}

export default MyApp;
