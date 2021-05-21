import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => (
    <div>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
    </div>
);

export default Layout;
