import ContactMe from "@/components/ContactMe/ContactMe";
import styles from "./Hero.module.css";

function Hero({ picture, project, subtitle, title }) {
  return (
    <section className={styles.container}>
      <figure className={styles.figureVideo}>
        <div className={styles.figureProjectInfo}>
          <h2 className={styles.projectName}>{project}</h2>
          <span className={styles.projectSlogan}>{subtitle}</span>
        </div>
        <img src={picture} className={styles.imageVideo} />
      </figure>
      <div className={styles.textSection}>
        <div className={styles.titleProjectInfo}>
          <h2 className={styles.projectName}>{project}</h2>
          <span className={styles.projectSlogan}>{subtitle}</span>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <ContactMe
          containerStyles={styles.contactMe}
        />
        <div className={styles.verticalLine}></div>
      </div>
    </section>
  );
}

export default Hero;
