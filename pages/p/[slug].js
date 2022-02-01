import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

import ImpactSection from "@/components/StadioComponents/ImpactSection/ImpactSection";
import Header from "@/components/Header/Header";
import Hero from "@/components/pageTheme/Hero/Hero";
import Summary from "@/components/pageTheme/Summary/Summary";
import ImageSection from "@/components/pageTheme/ImageSection/ImageSection";
import MoreProjects from "@/components/pageTheme/MoreProjects/MoreProjects";
import Collapsable from "@/components/pageTheme/Collapsable/Collapsable";
import PartnersSection from "@/components/pageTheme/PartnersSection/PartnersSection";
import ClientsSection from "@/components/pageTheme/ClientsSection/ClientsSection";
import DisplayImage from "@/components/pageTheme/DisplayImage/DisplayImage";
import TestimonialsCarousel from "@/components/TestimonialsCarousel/TestimonialsCarousel";
import Footer from "@/components/Footer/Footer";
import Definition from "@/components/Definition/Definition";
import Contact from "@/components/Contact/Contact";
import styles from "@/styles/Pages.module.css";
import stadioStyles from "@/styles/Stadio.module.css";
import projects from "@/content/projects.json";
import TestimonialsList from "@/content/testimonials.json";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import { visitPage } from "@/analytics/events";
import { isMobile } from "../../utils";
import { useState } from "react";
import classNames from "classnames";
import SeoConfig from "../../components/SeoConfig/SeoConfig";

// const moreProjects = projects.filter(
//   (project) =>
//     project.id === 'RebajaTusCuentas' ||
//     project.id === 'mipOSPOS' ||
//     project.id === 'Truorawhatsapp'
// );

const ProjectDetailsPage = ({ isMobile, content, moreProjects }) => {
  // const router = useRouter();
  // const slug = router.query.slug;
  // console.log(slug);

  // // const content = projects.find((project) => project.id === 'Stadio');

  // const [content, setContent] = useState(null);

  // const [moreProjects, setMoreProjects] = useState([]);

  // useEffect(() => {
  //   const projectItem = projects.find(
  //     (projectItem) => projectItem.slug == slug
  //   );
  //   setContent(projectItem);
  //   const items = projects.filter((item) =>
  //     projectItem.moreProjectsSlugs.includes(item.slug)
  //   );
  //   setMoreProjects(items);
  // }, []);

  useEffect(() => {
    if (content) visitPage(`Projects: ${content.id} page viewed`);
  }, []);

  if (!content) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <>
      <SeoConfig
        title={content.seo.title}
        description={content.seo.description}
      />
      <>
        <Header
          theme={content.theme}
          background={content.header.background}
          buttonStyle={content.theme == "light" && "info"}
          withContact={true}
        />
        <main>
          {content.sections.map((item, index) => (
            <div key={`${content.id}-${index}`}>
              {item.type == "hero" && (
                <Hero
                  theme={content.theme}
                  background={item.background}
                  withContact={item.hasContact}
                  logo={content.logo}
                  picture={content.pictures.default}
                  project={content.name}
                  projectId={content.id}
                  subtitle={content.subtitle}
                  title={content.title}
                  urlVideo={item.urlVideo}
                  showNameDesktop={item.showNameDesktop}
                />
              )}
              {item.type == "summary" && (
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
              {item.type == "collapsableSection" && (
                <Collapsable
                  theme={content.theme}
                  isMobile={isMobile}
                  title={item.title}
                  items={item.items}
                  background={item.background}
                  itemBackground={item.itemBackground}
                  id={item.id}
                  projectId={content.id}
                />
              )}
              {item.type == "partnersSection" && (
                <PartnersSection
                  theme={content.theme}
                  images={item.images}
                  title={item.title}
                  titleSmall={item.titleSmall}
                  titleColor={item.titleColor}
                  background={item.background}
                />
              )}
              {item.type == "clientsSection" && (
                <ClientsSection
                  theme={content.theme}
                  images={item.images}
                  title={item.title}
                  titleSmall={item.titleSmall}
                  titleColor={item.titleColor}
                  background={item.background}
                />
              )}
              {item.type == "displayImage" && (
                <DisplayImage theme={content.theme} image={item.image} />
              )}
              {item.type == "imageSection" && (
                <ImageSection
                  theme={content.theme}
                  background={item.background}
                  projectName={content.name}
                  description={item.description}
                  title={item.title}
                  picture={item.picture}
                  isReverse={item.reverse}
                  comment={item.comment}
                  hasBackgrounTop={item.hasBackgrounTop}
                />
              )}
              {item.type == "impactSection" && (
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
              {item.type == "line" && (
                <div
                  className={classNames(styles.container, [
                    styles[content.theme],
                  ])}
                >
                  <div className={styles.line}></div>
                </div>
              )}
            </div>
          ))}
        </main>
        <MoreProjects
          containerStyles={styles.moreProjects}
          projects={moreProjects}
          isMobile={isMobile}
          limit={3}
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

export const getServerSideProps = async ({ req, params }) => {
  const slug = params.slug;
  const content = projects.find((projectItem) => projectItem.slug == slug);
  const moreProjects = projects.filter((item) =>
    content.moreProjectsSlugs.includes(item.slug)
  );

  return {
    props: {
      isMobile: isMobile(req),
      content,
      moreProjects,
    },
  };
};

export default ProjectDetailsPage;
