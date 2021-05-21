import styles from "./SocialNetworks.module.css"

const SocialNetworks = () => (
    <ul className={styles.container}>
      <li>
        <img src="/icons/icon-linkedin.svg" />
      </li>
      <li>
        <img src="/icons/icon-github.svg" />
      </li>
      <li>
        <img src="/icons/icon-twitter.svg" />
      </li>
      <li>
        <img src="/icons/icon-behance.svg" />
      </li>
      <li>
        <img src="/icons/icon-instagram.svg" />
      </li>
    </ul>
);

export default SocialNetworks;