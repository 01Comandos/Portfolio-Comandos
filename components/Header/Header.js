import Link from "next/link";
import { useContext } from "react";
import { MenuMobileContext } from "../../contexts/mobileMenuContext";
import styles from "./Header.module.css";

const menuOptions = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Methodology", link: "/methodology" },
  { name: "Podcast", link: "/podcast" },
];

const Header = ({ withContact }) => {
  const { toogleMenu } = useContext(MenuMobileContext);

  return (
    <header className={styles.container}>
      <Link href="/">
        <img
          className={styles.logoMobile}
          src="/logo/logo-isotipo-white.svg"
          alt="Comandos Logotipo"
          width={51}
          height={51}
        />
      </Link>
      <Link href="/">
        <img
          className={styles.logo}
          src="/logo/logo-white.svg"
          alt="Comandos Logotipo"
          width={183}
          height={40}
        />
      </Link>
      <div className={styles.menu}>
        {menuOptions.map((item, index) => (
          <Link key={index} href={item.link}>
            <a>{item.name}</a>
          </Link>
        ))}
      </div>
      <div className={styles.rightOptions}>
        {withContact && (
          <Link href="/contact">
            <button className="black">Contact</button>
          </Link>
        )}
        <img
          onClick={toogleMenu}
          className={styles.menuIcon}
          src="/icons/icon-menu.svg"
          width={28}
          height={19}
        />
      </div>
    </header>
  );
};

export default Header;
