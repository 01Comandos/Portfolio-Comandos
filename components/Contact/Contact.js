import styles from "./Contact.module.css"

const Contact = () => {
  return <div className={styles.container}>
    <h2 className={styles.title}>Let’s <span>talk</span></h2>
    <p className={styles.text}>Let us know who you are and what you’re up to.</p>
    <button className={`black ${styles.contactButton}`}>Contact</button>
  </div>
};

export default Contact;