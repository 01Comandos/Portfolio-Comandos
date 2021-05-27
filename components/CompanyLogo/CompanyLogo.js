import styles from "./CompanyLogo.module.css";

const CompanyLogo = ({ isYC, isStartups, logo, name, height, width }) => (
  <div className={styles.container}>
    <div className={styles.logo}>
      {isStartups && <img src="/images/500.png" className={styles.startupsLogo} alt="500 Startups logotipo" />}
      {isYC && <img src="/images/yc.png" className={styles.ycLogo} alt="Y Combinator logotipo" />}
      <img src={logo} alt={name} height={height} width={width} alt={`${name} logotipo`} />
    </div>
  </div>
);

export default CompanyLogo;
