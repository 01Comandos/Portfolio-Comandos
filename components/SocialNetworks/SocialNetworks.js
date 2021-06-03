import styles from "./SocialNetworks.module.css";

const SocialNetworks = () => (
  <ul className={styles.container}>
    <li>
      <a href="https://www.linkedin.com/in/01comandos" target="_blank">
        <span className={`icon-linkedin ${styles.icon}`}></span>
      </a>
    </li>
    <li>
      <a href="https://github.com/01Comandos" target="_blank">
        <span className={`icon-github ${styles.icon}`}></span>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/01Comandos" target="_blank">
        <span className={`icon-twitter ${styles.icon}`}></span>
      </a>
    </li>
    <li>
      <a href="https://www.behance.net/01Comandos" target="_blank">
        <span className={`icon-behance ${styles.icon}`}></span>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/01comandos/" target="_blank">
        <span className={`icon-instagram ${styles.icon}`}></span>
      </a>
    </li>
  </ul>
);

export default SocialNetworks;
