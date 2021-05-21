import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => (
  <div className={styles.container}>
    <Image className={styles.picture} layout="fill" objectFit="contain" src="/images/coming-soon-mobile.png" />
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Innovating experiences for humans</h1>
      <h3 className={styles.subtitle}>Let’s create something together ></h3>
    </div>
  </div>
);

export default Hero;
