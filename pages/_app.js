import { useRouter } from "next/router";
import Layout from "../layouts/default";
import { MenuMobileProvider } from "../contexts/mobileMenuContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
  return (
    <MenuMobileProvider>
      {pathname.includes('/project') && <Component {...pageProps} />}
      {
      !pathname.includes('/project') &&
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
    </MenuMobileProvider>
  );
}

export default MyApp;
