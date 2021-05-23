import styles from "./Definition.module.css";

const Definition = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/logo/logo-white.svg" width={192} height={42} />
      <p className={styles.description}>
        Comandos has more than 10 years of experience creating innovate products
        through human-centered desing. The most effective team of designers and
        developers to achieve the maximum potential of your idea.
      </p>
      <div className={styles.knowMore}>
        <span>I want to know more</span>
        <img src="/icons/icon-arrow.svg" />
      </div>
      <div className={styles.horizontalLine}></div>
    </div>
  );
};

export default Definition;
