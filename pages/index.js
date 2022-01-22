import { useEffect } from "react";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Companies from "../components/Companies/Companies";
import Projects from "../components/Projects/Projects";
import Experiences from "../components/Experiences/Experiences";
import TestimonialsCarousel from "../components/TestimonialsCarousel/TestimonialsCarousel";
import Definition from "../components/Definition/Definition";
import SeoConfig from "../components/SeoConfig/SeoConfig";
import Contact from "../components/Contact/Contact";
import TestimonialsList from "../content/testimonials.json";
import { visitPage } from "../analytics/events";
import styles from "../styles/Home.module.css";
import { isMobile } from "../utils";

const Home = ({ isMobile }) => {
  useEffect(() => {
    visitPage("Home viewed");
  }, []);

  return (
    <div>
      <SeoConfig
        title="Carlos Pérez"
        description="Carlos Pérez | @01Comandos - Product Designer and UI & UX Designer"
      />
      <main className="pageContainer">
        <Hero />
        <div className={styles.verticalLine}></div>
        <Companies />

        <Projects isMobile={isMobile} lightTheme={true} limit={3} />
        <Experiences />
        <TestimonialsCarousel
          testimonials={TestimonialsList}
          isMobile={isMobile}
          background={"white"}
        />
        <Definition />
        <Contact />
      </main>
    </div>
  );
};

export const getServerSideProps = async ({ req }) => {
  return {
    props: {
      isMobile: isMobile(req),
    },
  };
};

export default Home;
