import Link from "next/link";
import styles from "./Header.module.css";

const menuOptions = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Methodology", link: "/methodology" },
  { name: "Podcast", link: "/podcast" }
];

const Header = () => (
  <div className={styles.container}>
    <img
      className={styles.logoMobile}
      src="/logo/logo-isotipo-white.svg"
      width={51}
      height={51}
    />
    <img
      className={styles.logo}
      src="/logo/logo-white.svg"
      width={183}
      height={40}
    />
    <div className={styles.menu}>
      {menuOptions.map(item => (
        <Link href={item.link}>
          <a>{item.name}</a>
        </Link>
      ))}
    </div>
    <div className={styles.rightOptions}>
      <button className="black">Contact</button>
      <img
        className={styles.menuIcon}
        src="/icons/icon-menu.svg"
        width={28}
        height={19}
      />
    </div>
  </div>
);

export default Header;
