import Head from "next/head";
import Hero from "../components/Hero/Hero";
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
      <main>
        <Hero />
      </main>
    </div>
  );
}
