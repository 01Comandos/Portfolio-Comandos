import Link from "next/link";
import classNames from 'classnames';
import { useContext } from "react";
import { MenuMobileContext } from "../../contexts/mobileMenuContext";
import { menuOptions } from "../../utils/constants";
import styles from "./Header.module.css";

const Header = ({
  withContact,
  backgroundStyle = null,
  buttonStyle = null,
  darkMenu = false
}) => {
  const { toogleMenu } = useContext(MenuMobileContext);
  const containerColor = backgroundStyle ? backgroundStyle : styles.bgcBlack;

  return (
    <header className={classNames([
      styles.container,
      containerColor
    ])}>
      <Link href="/">
        <img
          className={styles.logoMobile}
          src="/logo/logo-isotipo-white.svg"
          alt="Comandos Logotipo"
          width={51}
          height={51}
        />
      </Link>
      {!darkMenu && 
        <Link href="/">
          <img
            className={styles.logo}
            src="/logo/logo-white.svg"
            alt="Comandos Logotipo"
            width={183}
            height={40}
          />
        </Link>
      }
      {darkMenu &&
        <Link href="/">
          <img
            className={styles.logo}
            src="/logo/logo-black.svg"
            alt="Comandos Logotipo"
            width={183}
            height={40}
          />
      </Link>
      }
      <div className={darkMenu ? styles.darkMenu : styles.menu}>
        {menuOptions.map((item, index) => (
          <Link key={index} href={item.link}>
            <a>{item.name}</a>
          </Link>
        ))}
      </div>
      <div className={styles.rightOptions}>
        {withContact && (
          <Link href="/contact">
            <button className={buttonStyle || 'black'}>Contact</button>
          </Link>
        )}
        {!darkMenu && <img
          onClick={toogleMenu}
          className={styles.menuIcon}
          src="/icons/icon-menu.svg"
          width={28}
          height={19}
        />}
        {darkMenu && <img
          onClick={toogleMenu}
          className={styles.menuIcon}
          src="/icons/icon-black-menu.svg"
          width={37}
          height={37}
        />}
      </div>
    </header>
  );
};

export default Header;
