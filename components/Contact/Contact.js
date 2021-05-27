import Link from "next/link";
import styles from "./Contact.module.css"

const Contact = () => {
  return <section className={styles.container}>
    <div className={styles.description}>
      <h2 className={styles.title}>Let’s <span>talk</span></h2>
      <p className={styles.text}>Let us know who you are and what you’re up to.</p>
    </div>
    <Link href="/contact">
      <button className={`black ${styles.contactButton}`}>Contact</button>
    </Link>
  </section>
};

export default Contact;