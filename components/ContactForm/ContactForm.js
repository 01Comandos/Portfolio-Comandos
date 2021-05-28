import styles from "./ContactForm.module.css";

const messagePlaceholder = `(500 characters max) Due to the Stripe LLC legacy of greed around the globe, they’re about to be taught a lesson in the real user of power... you will be witnesses. Also, we wanted to set up a simple institutional website for our organization that supports our existing CMS and maybe links to our Patreon.`;

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Who are you?</h2>
      <p className={styles.description}>
        The more details you include, the easier it will be for us to get back
        to you.
      </p>
      <form className={styles.form}>
        <label for="name">My name is</label>
        <input placeholder="Ex.: Antonio De La Rosa" type="text" name="name" />

        <label for="email">My email is</label>
        <input placeholder="Ex.: a.delarosa@mycompany.com" type="email" name="email" />

        <label for="company">I’m working for the following company</label>
        <input type="text" placeholder="Company name" name="company" />

        <label for="role">My role is</label>
        <input type="text" placeholder="Ex.: Product Manager" name="role" />

        <label for="need">I’m in need of a</label>
        <input type="text" placeholder="Ex.: Web / Mobile App" name="need" />

        <label for="budget">My budget is around</label>
        <input type="number" placeholder="Range of budget" name="budget" />

        <div className={styles.divider}></div>

        <h2 className={`${styles.title} ${styles.message}`}>What’s on your mind?</h2>
        <textarea name="message" maxlength="500" placeholder={messagePlaceholder} />

        <div className={styles.goBack}>
          <span className={styles.goBackText}>Go back to the top of the form</span>
          <img src="/icons/up.svg" alt="Up arrow" className={styles.icon} />
        </div>

        <button className={styles.send} type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
