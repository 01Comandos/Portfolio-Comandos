import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname;
  // const withContact = pathname !== "/contact";

  return (
    <div>
      <Header withContact={true} />
      {children}
      <MobileMenu />
      <Footer />
    </div>
  );
};

export default Layout;
