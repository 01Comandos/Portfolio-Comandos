import classNames from "classnames";
import styles from "./ImpactSection.module.css";
import LazyImage from "../../LazyImage/LazyImage";

function ImpactSection({
  projectName,
  picture,
  title,
  description,
  info,
  company,
  companyText,
  theme,
  background,
}) {
  return (
    <div
      style={{ background }}
      className={classNames({
        [styles.container]: true,
        [styles[theme]]: true,
        "padding-x": true,
      })}
    >
      <div className={styles.left}>
        <figure className={styles.figure}>
          <LazyImage
            src={picture}
            alt={projectName}
            className={styles.picture}
            alt={projectName}
          />
        </figure>
      </div>

      <div className={styles.right}>
        <div>
          <h3
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.stadioInfo}>
            <LazyImage
              src={info.logo}
              alt="logo"
              className={styles.stadioLogo}
              alt="Project Logo"
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
            <span className={styles.insightText}>{info.stars}</span>
          </div>
        </div>
        <div className={styles.infoLine}></div>
        <div className={styles.companies}>
          <ul className={styles.logoList}>
            {company.map((item) => (
              <li key={item}>
                <LazyImage
                  src={item}
                  alt="company logo"
                  className={styles.companyLogo}
                />
              </li>
            ))}
          </ul>
          <span className={styles.companyText}>{companyText}</span>
        </div>
      </div>
    </div>
  );
}

export default ImpactSection;
