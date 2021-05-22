import Image from "next/image";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.container}>
    <SocialNetworks />
    <div className={styles.brand}>
      <Image src="/logo/logo-isotipo-white.svg" width={51} height={51} />
      <span>2021 © Comandos.me</span>
    </div>
  </footer>
);

export default Footer;
