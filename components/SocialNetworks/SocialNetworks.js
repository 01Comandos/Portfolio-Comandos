import styles from "./SocialNetworks.module.css"

const SocialNetworks = () => (
    <ul className={styles.container}>
      <li>
      <span className={`icon-linkedin ${styles.icon}`}></span>
      </li>
      <li>
      <span className={`icon-github ${styles.icon}`}></span>
      </li>
      <li>
      <span className={`icon-twitter ${styles.icon}`}></span>
      </li>
      <li>
      <span className={`icon-behance ${styles.icon}`}></span>
      </li>
      <li>
      <span className={`icon-instagram ${styles.icon}`}></span>
      </li>
    </ul>
);

export default SocialNetworks;