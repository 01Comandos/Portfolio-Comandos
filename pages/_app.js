import { useRouter } from "next/router";
import Layout from "../layouts/default";
import { MenuMobileProvider } from "../contexts/mobileMenuContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <MenuMobileProvider>
      {pathname.includes('/p/') && <Component {...pageProps} />}
      {
      !pathname.includes('/p/') &&
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
    </MenuMobileProvider>
  );
}

export default MyApp;
