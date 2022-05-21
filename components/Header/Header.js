import Link from "next/link";
import classNames from "classnames";
import { useContext } from "react";
import { MenuMobileContext } from "../../contexts/mobileMenuContext";
import { menuOptions } from "../../utils/constants";
import { trackEvent } from "../../analytics/events";
import styles from "./Header.module.css";

const Header = ({ withContact, buttonStyle = null, theme, background }) => {
  const { toogleMenu } = useContext(MenuMobileContext);
  // const containerColor = backgroundStyle ? backgroundStyle : styles.bgcBlack;
  const darkMenu = theme == "light";

  function registerEvent(actionName) {
    trackEvent(actionName);
  }

  function setMenuVisibility() {
    registerEvent("Mobile menu clicked");
    toogleMenu();
  }

  return (
    <header
      style={{ background }}
      className={classNames([styles.container, [styles[theme]]])}
    >
      <Link
        href="/"
        onClick={() => registerEvent("Header logo mobile clicked")}
      >
        <img
          className={styles.logoMobile}
          src="/logo/logo-isotipo-white.svg"
          alt="Comandos Logotipo"
          width={51}
          height={51}
        />
      </Link>
      {!darkMenu && (
        <Link href="/" onClick={() => registerEvent("Header logo clicked")}>
          <img
            className={styles.logo}
            src="/logo/logo-white.svg"
            alt="Comandos Logotipo"
            width={183}
            height={40}
          />
        </Link>
      )}
      {darkMenu && (
        <Link href="/" onClick={() => registerEvent("Header logo clicked")}>
          <img
            className={styles.logo}
            src="/logo/logo-black.svg"
            alt="Comandos Logotipo"
            width={183}
            height={40}
          />
        </Link>
      )}
      <div className={darkMenu ? styles.darkMenu : styles.menu}>
        {menuOptions.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            onClick={() =>
              registerEvent("Menu option clicked", { value: item.name })
            }
          >
            <a>{item.name}</a>
          </Link>
        ))}
      </div>
      <div className={styles.rightOptions}>
        {withContact && (
          <Link
            href="/contact"
            onClick={() => registerEvent("Header contact button clicked")}
          >
            <button
              className={classNames({
                [buttonStyle]: buttonStyle,
                black: !buttonStyle,
                button: true,
              })}
            >
              Contact
            </button>
          </Link>
        )}
        {!darkMenu && (
          <img
            onClick={setMenuVisibility}
            className={styles.menuIcon}
            src="/icons/icon-menu.svg"
            width={28}
            height={19}
            alt="menu-icon"
          />
        )}
        {darkMenu && (
          <img
            onClick={setMenuVisibility}
            className={styles.menuIcon}
            src="/icons/icon-black-menu.svg"
            width={37}
            height={37}
            alt="menu-icon"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
