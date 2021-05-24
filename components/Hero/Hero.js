import SocialNetworks from "../SocialNetworks/SocialNetworks";
import styles from "./Hero.module.css";

const Hero = () => (
  <section className={styles.container}>
    <figure><img className={styles.picture} src="/images/coming-soon-mobile.png" /></figure>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Innovating experiences for humans</h1>
      <h3 className={styles.subtitle}>Let’s create something together ></h3>
      <SocialNetworks className={styles.socialSection} />
    </div>
  </section>
);

export default Hero;
