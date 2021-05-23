import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Companies from "../components/Companies/Companies";
import Projects from "../components/Projects/Projects";
import Expertise from "../components/Expertise/Expertise";
import Testimonials from "../components/Testimonials/Testimonials";
import Definition from "../components/Definition/Definition";
import Contact from "../components/Contact/Contact";
import styles from "../styles/Home.module.css";

export default function Home() {
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
      <main className={styles.container}>
        <Hero />
        <div className={styles.verticalLine}></div>
        <Companies />
        <div className={styles.verticalLine}></div>
        <Projects />
        <div className={styles.verticalLine}></div>
        <Expertise />
        <Testimonials />
        <Definition />
        <Contact />
      </main>
    </div>
  );
}
