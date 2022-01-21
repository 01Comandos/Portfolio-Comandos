import CompanyLogo from '../CompanyLogo/CompanyLogo';
import styles from './Companies.module.css';

const companiesList = [
  {
    height: 34,
    width: 123,
    name: 'Truora',
    logo: '/images/truora.svg',
    yc: true,
    startups: false,
  },
  {
    height: 30,
    width: 143,
    name: 'mipOS',
    logo: '/images/mip-os.svg',
    yc: true,
    startups: false,
  },
  {
    height: 37,
    width: 174,
    name: 'Rebaja Tus Cuentas',
    logo: '/images/rtc.svg',
    yc: false,
    startups: true,
  },
  {
    height: 36,
    width: 86,
    name: 'Rappi',
    logo: '/images/rappi.png',
    yc: true,
    startups: false,
  },
  {
    height: 30,
    width: 116,
    name: 'Kriptos',
    logo: '/images/kriptos.svg',
    yc: false,
    startups: false,
  },
  {
    height: 30,
    width: 117,
    name: 'Check.pe',
    logo: '/images/check-pe.png',
    yc: false,
    startups: false,
  },
  {
    height: 44,
    width: 143,
    name: 'Caribe Federal Credit Union',
    logo: '/images/caribe-federal.png',
    yc: false,
    startups: false,
  },
];

const Companies = () => (
  <section className={`${styles.container} padding-x`}>
    <h3 className={styles.title}>Incredible startups that rely on Comandos</h3>
    <div className={styles.logosContainer}>
      {companiesList.map((company, index) => (
        <CompanyLogo
          key={index}
          height={company.height}
          width={company.width}
          isStartups={company.startups}
          isYC={company.yc}
          name={company.name}
          logo={company.logo}
        />
      ))}
    </div>
  </section>
);

export default Companies;
