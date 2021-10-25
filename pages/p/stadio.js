import Head from "next/head";
import { useEffect } from "react";

import ImpactSection from "@/components/StadioComponents/ImpactSection/ImpactSection";
import Header from "@/components/Header/Header";
import Hero from "@/components/pageTheme/Hero/Hero";
import Summary from "@/components/pageTheme/Summary/Summary";
import ImageSection from "@/components/pageTheme/ImageSection/ImageSection";
import MoreProjects from "@/components/pageTheme/MoreProjects/MoreProjects";
import TestimonialsCarousel from "@/components/TestimonialsCarousel/TestimonialsCarousel";
import Footer from "@/components/Footer/Footer";
import Definition from "@/components/Definition/Definition";
import Contact from "@/components/Contact/Contact";
import styles from "@/styles/Pages.module.css";
import stadioStyles from "@/styles/Stadio.module.css";
import projects from "@/content/projects.json";
import TestimonialsList from "@/content/testimonials.json";
import { visitPage } from "@/analytics/events";
import { isMobile } from "../../utils";

const content = projects.find((project) => project.id === "Stadio");
const moreProjects = projects.filter(
  (project) =>
    project.id === "RebajaTusCuentas" ||
    project.id === "Spotfinder" ||
    project.id === "Truorawhatsapp"
);

const StadioPage = ({ isMobile }) => {
  useEffect(() => {
    visitPage("Stadio page viewed");
  }, []);

  return (
    <>
      <Head>
        <title>Stadio</title>
        <meta name="description" content={content.description} />
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
          <div className={stadioStyles.line}></div>
          <img
            src="/images/projects/stadio/background-top.svg"
            className={stadioStyles.backgroundTop}
          />
          <ImageSection
            containerStyles={stadioStyles.sectionOne}
            projectName={content.name}
            description={content.sectionOne.description}
            title={content.sectionOne.title}
            picture={content.sectionOne.picture}
          />
          <ImageSection
            containerStyles={stadioStyles.sectionTwo}
            projectName={content.name}
            description={content.sectionTwo.description}
            title={content.sectionTwo.title}
            picture={content.sectionTwo.picture}
            isReverse={true}
          />
          <ImpactSection
            projectName={content.name}
            description={content.impactSection.description}
            title={content.impactSection.title}
            picture={content.impactSection.picture}
          />
          <div className={stadioStyles.line}></div>
          <MoreProjects projects={moreProjects} isMobile={isMobile} />
          <TestimonialsCarousel testimonials={TestimonialsList} isMobile={isMobile} />
          <Definition />
          <Contact />
          <Footer />
        </main>
      </>
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  return {
    props: {
      isMobile: isMobile(req),
    },
  };
};

export default StadioPage;
