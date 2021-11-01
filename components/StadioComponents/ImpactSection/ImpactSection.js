import classNames from "classnames";
import styles from "./ImpactSection.module.css";

function ImpactSection({
  containerStyles = null,
  projectName,
  picture,
  title,
  description,
}) {
  return (
    <div
      className={classNames({
        [styles.container]: true,
        "padding-x": true,
        [containerStyles]: containerStyles ? true : false,
      })}
    >
      <figure className={styles.figure}>
        <img src={picture} alt={projectName} className={styles.picture} />
      </figure>
      <h3
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.stadioInfo}>
        <img
          src="/images/projects/stadio/stadio-logo.png"
          alt="Stadio logo"
          className={styles.stadioLogo}
        />
        <div className={styles.yellowLine}></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#ffbc00"
          className={styles.starIcon}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className={styles.insightText}>8 out of 10 still use stadio</span>
      </div>
      <div className={styles.infoLine}></div>
      <div className={styles.companies}>
        <ul className={styles.logoList}>
          <li>
            <img src="/images/projects/stadio/nike-logo.png" alt="Nike" className={styles.companyLogo} />
          </li>
          <li>
            <img src="/images/projects/stadio/adidas-logo.png" alt="Adidas" className={styles.companyLogo} />
          </li>
          <li>
            <img src="/images/projects/stadio/apple-logo.png" alt="Apple" className={styles.companyLogo} />
          </li>
        </ul>
        <span className={styles.companyText}>Do not have this functionality</span>
      </div>
    </div>
  );
}

export default ImpactSection;
