import Image from "next/image";
import classNames from "classnames";
import ContactMe from "@/components/ContactMe/ContactMe";
import styles from "./Hero.module.css";

function Hero({
  logo,
  picture,
  project,
  subtitle,
  title,
  backgroundColor
}) {
  return (
    <section className={classNames({
      [styles.container]: true,
      [backgroundColor]: backgroundColor
    })}>
      <figure className={styles.figureVideo}>
        <div className={styles.figureProjectInfo}>
          {!logo && <h2 className={styles.projectName}>{project}</h2>}
          <span className={styles.projectSlogan}>{subtitle}</span>
        </div>
        <img src={picture} className={styles.imageVideo} />
      </figure>
      <div className={styles.textSection}>
        <div className={styles.titleProjectInfo}>
          {!logo && <h2 className={styles.projectName}>{project}</h2>}
          {logo && (
            <figure className={styles.logo}>
              <Image width={194} height={41} src={logo} />
            </figure>
          )}
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
