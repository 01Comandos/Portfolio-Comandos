import { useRouter } from "next/router";
import Layout from "../layouts/default";
import { MenuMobileProvider } from "../contexts/mobileMenuContext";
import "../styles/globals.css";
import { useEffect } from "react";
import { useState } from "react";
import { trackEvent } from "@/analytics/events";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const [history, setHistory] = useState([]);

  const handleRouteChange = (url, context) => {
    if (url.includes("/contact")) {
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
    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    handleRouteChange(router.asPath);
  }, []);

  return (
    <MenuMobileProvider>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:2803762,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `,
          }}
        />
      </Head>
      {pathname.includes("/p/") && <Component {...pageProps} />}
      {!pathname.includes("/p/") && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </MenuMobileProvider>
  );
}

export default MyApp;
