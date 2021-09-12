import Head from "next/head";
import ContactForm from "../components/ContactForm/ContactForm";
import TestimonialsCarousel from "../components/TestimonialsCarousel/TestimonialsCarousel";
import TestimonialsList from "../content/testimonials.json";
import { useEffect } from 'react';
import { isMobile } from "../utils";
import { visitPage } from "../analytics/events";
import styles from "../styles/Contact.module.css";

const Contact = ({ isMobile }) => {
  useEffect(() => {
    visitPage('Contact page viewed');
  }, []);

  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Carlos Pérez | @01Comandos - Product Designer and UI & UX Designer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.contactPage} pageContainer`}>
        <section className={`${styles.heroContainer} padding-x`}>
          <figure>
            <img src="/images/contact-hero.png" alt="Contact hero image" />
          </figure>
          <div>
            <h1 className={styles.heroTitle}>
              Let's <span>Talk</span>.
            </h1>
            <p className={styles.heroDescription}>
              Let us know who you are and what you’re up to.
            </p>
            {/* <h3 className={styles.heroSubtitle}>check out my methodology ></h3> */}
          </div>
        </section>
        <ContactForm />
        <TestimonialsCarousel testimonials={TestimonialsList} color="info" isMobile={isMobile} />
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

export default Contact;
