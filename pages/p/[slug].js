import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import ImpactSection from '@/components/StadioComponents/ImpactSection/ImpactSection';
import Header from '@/components/Header/Header';
import Hero from '@/components/pageTheme/Hero/Hero';
import Summary from '@/components/pageTheme/Summary/Summary';
import ImageSection from '@/components/pageTheme/ImageSection/ImageSection';
import MoreProjects from '@/components/pageTheme/MoreProjects/MoreProjects';
import Collapsable from '@/components/pageTheme/Collapsable/Collapsable';
import TestimonialsCarousel from '@/components/TestimonialsCarousel/TestimonialsCarousel';
import Footer from '@/components/Footer/Footer';
import Definition from '@/components/Definition/Definition';
import Contact from '@/components/Contact/Contact';
import styles from '@/styles/Pages.module.css';
import stadioStyles from '@/styles/Stadio.module.css';
import projects from '@/content/projects.json';
import TestimonialsList from '@/content/testimonials.json';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import { visitPage } from '@/analytics/events';
import { isMobile } from '../../utils';
import { useState } from 'react';

// const moreProjects = projects.filter(
//   (project) =>
//     project.id === 'RebajaTusCuentas' ||
//     project.id === 'mipOSPOS' ||
//     project.id === 'Truorawhatsapp'
// );

const StadioPage = ({ isMobile }) => {
  const router = useRouter();
  const slug = router.query.slug;
  console.log(slug);

  // const content = projects.find((project) => project.id === 'Stadio');

  const [content, setContent] = useState(null);

  const [moreProjects, setMoreProjects] = useState([]);

  useEffect(() => {
    const projectItem = projects.find(
      (projectItem) => projectItem.slug == slug
    );
    setContent(projectItem);
    const items = projects.filter((item) =>
      projectItem.moreProjectsSlugs.includes(item.slug)
    );
    setMoreProjects(items);
  }, []);

  if (!content) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <>
      <Head>
        <title>{content.name}</title>
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
            subtitle={content.subtitle}
            title={content.title}
          />
          <Summary
            projectName={content.name}
            details={content.summary.details}
            description={content.summary.description}
            picture={content.summary.picture}
          />
          <div className={stadioStyles.line}></div>
          <Collapsable
            isMobile={isMobile}
            title={content.collapsableSection.title}
            items={content.collapsableSection.items}
            containerStyles={stadioStyles.collapsableSection}
          />
          <div className={stadioStyles.backgroundTop}></div>
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
            info={content.impactSection.info}
            company={content.impactSection.company}
            companyText={content.impactSection.companyText}
          />
          <div className={stadioStyles.line}></div>
          <MoreProjects
            containerStyles={stadioStyles.moreProjects}
            projects={moreProjects}
            isMobile={isMobile}
          />
          <TestimonialsCarousel
            testimonials={TestimonialsList}
            isMobile={isMobile}
          />
          <Definition />
          <Contact />
          <Footer />
          <MobileMenu />
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
