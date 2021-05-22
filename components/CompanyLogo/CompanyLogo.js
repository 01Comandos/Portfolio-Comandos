import styles from "./CompanyLogo.module.css";

const CompanyLogo = ({ isYC, isFortune, logo, name, height, width }) => (
  <div className={styles.container}>
    {isFortune && <img src="/images/500.png" className={styles.fortuneLogo} />}
    {isYC && <img src="/images/yc.png" className={styles.ycLogo} />}
    <img src={logo} alt={name} height={height} width={width} />
  </div>
);

export default CompanyLogo;
