import Head from "next/head";
import Header from "../../components/Header/Header";
import content from "../../content/projects/rebaja-tus-cuentas.json";
import styles from "../../styles/RebajaTusCuentas.module.css";

const RebajaTusCuentasPage = () => {
  return (
    <>
      <Head>
        <title>{content?.name}</title>
        <meta
          name="description"
          content={content?.description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header
            withContact={true}
            transparent={true}
            darkMenu={true}
            buttonStyle="info"
        />
        <main className={styles.main}>
          <img src="/images/projects/rtc-mobile.png" className={styles.videoImage} />
          <h1 className={styles.title}>A financial platform  for mortgage loans</h1>
          <div className={styles.verticalLine}></div>
          <section className={styles.description}>
              <span className={styles.descriptionTitle}>
                Why <span className="info">RTC?</span>
              </span>
              <p>
                RebajaTusCuentas was born as Peruvian startup with the commitment to democratize access to mortgage loans in an underbanked country. It is a mortgages broker whit the support of 500 startup with presence in 3 countries and + 10M in loans granted.
              </p>
              <p>
                It has been incredible to see the growth of RTC.
              </p>
          </section>
          <div className={styles.horizontalLine}></div>
          <section>
              <article>
                <strong>Rol</strong>
                <span>Product Designer</span>
              </article>
          </section>
        </main>
      </div>
    </>
  );
};

export default RebajaTusCuentasPage;
