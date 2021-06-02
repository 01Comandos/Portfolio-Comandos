import Head from "next/head";
import ContactForm from "../components/ContactForm/ContactForm";
import Testimonials from "../components/Testimonials/Testimonials";
import styles from "../styles/Contact.module.css";

 const  Contact = () => {
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
      <main className={styles.container}>
        <section className={styles.heroContainer}>
          <figure>
            <img src="/images/contact-hero.png" alt="Contact hero image" />
          </figure>
          <div>
            <h1 className={styles.heroTitle}>Let's <span>Talk</span>.</h1>
            <p className={styles.heroDescription}>Let us know who you are and what you’re up to.</p>
            <h3 className={styles.heroSubtitle}>check out my methodology ></h3>
          </div>
        </section>
        <ContactForm />
        {/* <Testimonials /> */}
      </main>
    </div>
  );
}

export default Contact;
