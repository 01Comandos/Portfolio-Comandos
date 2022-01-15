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
import PartnersSection from '@/components/pageTheme/PartnersSection/PartnersSection';
import DisplayImage from '@/components/pageTheme/DisplayImage/DisplayImage';
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
import classNames from 'classnames';

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
        <Header
          theme={content.theme}
          background={content.header.background}
          buttonStyle={content.theme == 'light' && 'info'}
          withContact={true}
        />
        <main style={{ background: content.background }}>
          <Hero
            theme={content.theme}
            background={content.hero.background}
            withContact={content.hero.hasContact}
            logo={content.logo}
            picture={content.pictures.default}
            project={content.name}
            subtitle={content.subtitle}
            title={content.title}
          />
          {content.sections.map((item, index) => (
            <div key={index}>
              {item.type == 'summary' && (
                <Summary
                  theme={content.theme}
                  projectName={item.name}
                  details={item.details}
                  description={item.description}
                  picture={item.picture}
                  background={item.background}
                  hasLine={item.hasLine}
                />
              )}
              {item.type == 'collapsableSection' && (
                <Collapsable
                  theme={content.theme}
                  isMobile={isMobile}
                  title={item.title}
                  items={item.items}
                  background={item.background}
                  itemBackground={item.itemBackground}
                />
              )}
              {item.type == 'partnersSection' && (
                <PartnersSection
                  theme={content.theme}
                  images={item.images}
                  title={item.title}
                  titleSmall={item.titleSmall}
                />
              )}
              {item.type == 'displayImage' && (
                <DisplayImage theme={content.theme} image={item.image} />
              )}
              {item.type == 'imageSection' && (
                <>
                  {/* <div className={stadioStyles.backgroundTop}></div> */}
                  <ImageSection
                    theme={content.theme}
                    background={item.background}
                    projectName={content.name}
                    description={item.description}
                    title={item.title}
                    picture={item.picture}
                    isReverse={item.reverse}
                    comment={item.comment}
                  />
                </>
              )}
              {item.type == 'impactSection' && (
                <ImpactSection
                  theme={content.theme}
                  background={item.background}
                  projectName={content.name}
                  description={item.description}
                  title={item.title}
                  picture={item.picture}
                  info={item.info}
                  company={item.company}
                  companyText={item.companyText}
                />
              )}
              {item.type == 'line' && (
                <div
                  className={classNames(styles.line, [
                    styles[content.theme],
                  ])}></div>
              )}
            </div>
          ))}
        </main>
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
