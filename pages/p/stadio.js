import Head from "next/head";
import { useEffect } from 'react';

import Header from "@/components/Header/Header";
import Hero from "@/components/pageTheme/Hero/Hero";
import Summary from "@/components/pageTheme/Summary/Summary";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/Pages.module.css";
import projects from "@/content/projects.json";
import { visitPage } from "@/analytics/events";

const content = projects.find(project => project.id === 'Stadio');

const StadioPage = () => {
  useEffect(() => {
    visitPage('Stadio page viewed');
  }, []);

  return (
    <>
      <Head>
        <title>Stadio</title>
        <meta
          name="description"
          content={content.description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header withContact={true} />
        <main className={styles.main}>
          <Hero
            logo={content.logo}
            picture={content.pictures.default}
            project={content.name}
            subtitle="Apple Watch design"
            title="Redefining the jogging experience with friends"
          />
          <Summary
            projectName={content.name}
            details={content.summary.details}
            description={content.summary.description}
            picture={content.summary.picture}
          />
          <Footer />
        </main>
      </>
    </>
  );
};

export default StadioPage;
