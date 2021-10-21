import Head from "next/head";
import { useEffect } from 'react';

import Header from "@/components/Header/Header";
import Hero from "@/components/pageTheme/Hero/Hero";
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
            picture={content.pictures.default}
            project={content.name}
            subtitle="Apple Watch design"
            title="Redefining the jogging experience with friends"
          />
        </main>
      </>
    </>
  );
};

export default StadioPage;
