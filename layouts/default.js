import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
);

export default Layout;
