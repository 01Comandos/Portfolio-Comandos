import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Companies from "../components/Companies/Companies";
import Projects from "../components/Projects/Projects";
import Expertise from "../components/Expertise/Expertise";
import TestimonialsCarousel from "../components/TestimonialsCarousel/TestimonialsCarousel";
import Definition from "../components/Definition/Definition";
import Contact from "../components/Contact/Contact";
import TestimonialsList from "../content/testimonials.json"
import { isMobile } from "../utils";
import styles from "../styles/Home.module.css";

const Home = ({ isMobile }) => {
  return (
    <div>
      <Head>
        <title>Carlos Pérez</title>
        <meta
          name="description"
          content="Carlos Pérez | @01Comandos - Product Designer and UI & UX Designer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pageContainer">
        <Hero />
        <div className={styles.verticalLine}></div>
        <Companies />
        <div className={styles.verticalLine}></div>
        <Projects isMobile={isMobile} />
        <div className={styles.verticalLine}></div>
        <Expertise />
        <TestimonialsCarousel testimonials={TestimonialsList} />
        <Definition />
        <Contact />
      </main>
    </div>
  );
};

export const getStaticProps = async ({ req }) => {
  return {
    props: {
      isMobile: isMobile(req),
    },
  };
};

export default Home;
