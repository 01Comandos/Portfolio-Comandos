import styles from "./SocialNetworks.module.css";
import { trackEvent } from "../../analytics/events";

const SocialNetworks = () => (
  <ul className={styles.container}>
    <li>
      <a
        href="https://www.linkedin.com/in/01comandos"
        target="_blank"
        onClick={trackEvent('Linkedin clicked')}
      >
        <span className={`icon-linkedin ${styles.icon}`}></span>
      </a>
    </li>
    <li>
      <a
        href="https://github.com/01Comandos"
        target="_blank"
        onClick={trackEvent('Github clicked')}
      >
        <span className={`icon-github ${styles.icon}`}></span>
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/01Comandos"
        target="_blank"
        onClick={trackEvent('Twitter clicked')}
      >
        <span className={`icon-twitter ${styles.icon}`}></span>
      </a>
    </li>
    <li>
      <a
        href="https://www.behance.net/01Comandos"
        target="_blank"
        onClick={trackEvent('Behance clicked')}
      >
        <span className={`icon-behance ${styles.icon}`}></span>
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/01comandos/"
        target="_blank"
        onClick={trackEvent('Instagram clicked')}
      >
        <span className={`icon-instagram ${styles.icon}`}></span>
      </a>
    </li>
  </ul>
);

export default SocialNetworks;
