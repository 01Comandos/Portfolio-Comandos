import Head from 'next/head';
import { useRouter } from 'next/router';
import ContactForm from '../components/ContactForm/ContactForm';
import TestimonialsCarousel from '../components/TestimonialsCarousel/TestimonialsCarousel';
import TestimonialsList from '../content/testimonials.json';
import { useEffect } from 'react';
import { isMobile } from '../utils';
import { visitPage } from '../analytics/events';
import styles from '../styles/Contact.module.css';
import SeoConfig from '@/components/SeoConfig/SeoConfig';

const Contact = ({ isMobile }) => {
  const router = useRouter();
  const { email } = router.query;

  useEffect(() => {
    visitPage('Contact page viewed');
    // console.log(router);
  }, []);

  return (
    <div>
      <SeoConfig
        title="Contact Comandos"
        description="Contact Comandos to create amazing products. Whenever you want you can write us to make an appointment."
      />
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
        <ContactForm email={email} />
        <TestimonialsCarousel
          testimonials={TestimonialsList}
          isMobile={isMobile}
          background={'white'}
        />
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
