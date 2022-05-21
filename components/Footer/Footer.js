import SocialNetworks from "../SocialNetworks/SocialNetworks";
import styles from "./Footer.module.css";
import LazyImage from "../LazyImage/LazyImage";

const Footer = () => (
  <footer className={`${styles.container} padding-x`}>
    <SocialNetworks className={styles.socialLinks} />
    <div className={styles.brand}>
      <LazyImage
        src="/logo/logo-isotipo-white.svg"
        width={45}
        height={45}
        alt="Logo Comandos.me"
      />
      <span>2021 © Comandos.me</span>
    </div>
  </footer>
);

export default Footer;
