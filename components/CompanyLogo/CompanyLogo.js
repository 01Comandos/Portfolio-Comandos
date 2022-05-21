import styles from "./CompanyLogo.module.css";
import LazyImage from "../LazyImage/LazyImage";

const CompanyLogo = ({ isYC, isStartups, logo, name, height, width }) => (
  <div className={styles.container}>
    <div className={styles.logo}>
      {isStartups && (
        <LazyImage
          src="/images/500.png"
          className={styles.startupsLogo}
          alt="500 Startups logotipo"
        />
      )}
      {isYC && (
        <LazyImage
          src="/images/yc.png"
          className={styles.ycLogo}
          alt="Y Combinator logotipo"
        />
      )}
      <LazyImage
        src={logo}
        alt={name}
        height={height}
        width={width}
        alt={`${name} logotipo`}
      />
    </div>
  </div>
);

export default CompanyLogo;
