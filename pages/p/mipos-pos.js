import Head from "next/head";
import classNames from "classnames";
import { useEffect } from 'react';

import Header from "@/components/Header/Header";
import Hero from "@/components/PageTheme/Hero/Hero";
import styles from "@/styles/Pages.module.css";
import projects from "@/content/projects.json";
import { visitPage } from "@/analytics/events";

const content = projects.find(project => project.id === 'mipOSPOS');

const MipOSPage = () => {
  useEffect(() => {
    visitPage('mipOS page viewed');
  }, []);

  return (
    <>
      <Head>
        <title>mipOS</title>
        <meta
          name="description"
          content={content.description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header withContact={true} />
        <main className={classNames({
          [styles.main]: true,
          [styles.bgBlack6]: true,
        })}>
          <Hero
            logo={content.logo}
            picture={content.pictures.default}
            project={content.name}
            subtitle="Web and tablet design"
            title="A smart way to manage restaurants"
          />
        </main>
      </>
    </>
  );
};

export default MipOSPage;
