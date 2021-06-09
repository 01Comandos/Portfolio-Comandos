import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MenuMobileContext } from "../../contexts/mobileMenuContext";
import styles from "./MobileMenu.module.css";

const routes = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Methodology", path: "/methodology" },
  { label: "Podcast", path: "/podcast" },
];

const MobileMenu = () => {
  const router = useRouter();
  const { activeMenu, toogleMenu } = useContext(MenuMobileContext);
  const pathname = router.pathname;
  console.log(pathname)

  return (
    <section
      className={`${styles.container} ${activeMenu ? styles.active : ""}`}
    >
      <div className={styles.header}>
        <img
          className={styles.logoMobile}
          src="/logo/logo-isotipo-white.svg"
          alt="Comandos Logotipo"
          width={51}
          height={51}
        />
        <img
          className={styles.logo}
          src="/logo/logo-white.svg"
          alt="Comandos Logotipo"
          width={183}
          height={40}
        />
        <img
          onClick={toogleMenu}
          className={styles.closeIcon}
          src="/icons/close.svg"
          width={37}
          height={37}
        />
      </div>
      <ul className={styles.menu}>
        {routes.map((item, index) => (
          <Link href={item.path} key={index}>
            <li
              className={`${styles.menuItem} ${
                pathname === item.path ? styles.active : ""
              }`}
              onClick={toogleMenu}
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default MobileMenu;
