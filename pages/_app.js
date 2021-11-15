import Layout from "../layouts/default";
import { MenuMobileProvider } from "../contexts/mobileMenuContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MenuMobileProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuMobileProvider>
  );
}

export default MyApp;
