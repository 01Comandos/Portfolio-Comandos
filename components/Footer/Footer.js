import Image from 'next/image';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={`${styles.container} padding-x`}>
    <SocialNetworks className={styles.socialLinks} />
    <div className={styles.brand}>
      <Image src="/logo/logo-isotipo-white.svg" width={45} height={45} />
      <span>2022 © Comandos.me</span>
    </div>
  </footer>
);

export default Footer;
