import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

 const  ContactSend = () => {
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
      <main className={`main ${styles.contactSendContainer}`}>
        <h1 className={styles.title}>We will talk <span>very soon</span></h1>
        <p className={styles.message}>I will write yo you shortly to make an appointment and get to know us.</p>
        <Link href="/">
          <button className={`black ${styles.goHome}`}>Return to home</button>
        </Link>        
      </main>
    </div>
  );
}

export default ContactSend;
