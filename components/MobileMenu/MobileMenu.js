import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MenuMobileContext } from "../../contexts/mobileMenuContext";
import { menuOptions } from '../../utils/constants';
import { trackEvent } from "../../analytics/events";
import styles from "./MobileMenu.module.css";

const MobileMenu = () => {
  const router = useRouter();
  const { activeMenu, toogleMenu } = useContext(MenuMobileContext);
  const pathname = router.pathname;

  return (
    <section
      className={`${styles.container} ${activeMenu ? styles.active : styles.inactive}`}
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
        {menuOptions.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => 
              trackEvent(
                'Mobile menu option clicked',
                { value: item.name }
              )
            }
          >
            <li
              className={`${styles.menuItem} ${
                pathname === item.link ? styles.active : ""
              }`}
              onClick={toogleMenu}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default MobileMenu;
