import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "@formspree/react";
import styles from "./ContactForm.module.css";

const messagePlaceholder = `(500 characters max) Due to the Stripe LLC legacy of greed around the globe, they’re about to be taught a lesson in the real user of power... you will be witnesses. Also, we wanted to set up a simple institutional website for our organization that supports our existing CMS and maybe links to our Patreon.`;

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xvodabnn");
  const router = useRouter();

  useEffect(() => {
    if (state.succeeded) {
      router.push("/contact-send");
    }
  }, [state]);

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.container} id="form-top">
      <form className={styles.form} onSubmit={handleSubmit}>
        <section>
          <h2 className={styles.title}>Who are you?</h2>
          <p className={styles.description}>
            The more details you include, the easier it will be for us to get
            back to you.
          </p>
        </section>
        <section className={styles.basicInfo}>
          <label htmlFor="name">
            My name is <small>REQUIRED</small>
          </label>
          <input
            placeholder="Ex.: Antonio De La Rosa"
            id="name"
            type="text"
            name="name"
            required
          />

          <label htmlFor="email">
            My email is <small>REQUIRED</small>
          </label>
          <input
            id="email"
            placeholder="Ex.: a.delarosa@mycompany.com"
            type="email"
            name="email"
            required
          />

          <label htmlFor="company">I’m working for the following company</label>
          <input type="text" placeholder="Company name" name="company" />

          <label htmlFor="role">My role is</label>
          <input type="text" placeholder="Ex.: Product Manager" name="role" />

          <label htmlFor="need">I’m in need of a</label>
          <select name="need">
            <option>Mobile App</option>
            <option>Web App</option>
            <option>Product Design</option>
            <option>MVP</option>
            <option>Other</option>
          </select>

          <label htmlFor="budget">My budget is around</label>
          <select placeholder="Range of budget" name="budget">
            <option>Less than $ 5.000</option>
            <option>$ 5.000 to $ 10.000</option>
            <option>$ 10.000 to $ 50.000</option>
            <option>Greater than $ 50.000</option>
          </select>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.messageContainer}>
          <h2 className={`${styles.title} ${styles.message}`}>
            What’s on your mind? <small>REQUIRED</small>
          </h2>
          <textarea
            name="message"
            maxLength="500"
            placeholder={messagePlaceholder}
            required
          />
        </section>

        <section className={styles.optionsContainer}>
          <div className={styles.goBack}>
            <img src="/icons/green-up.svg" alt="Up arrow" className={styles.iconDesktop} />
            <a className={styles.goBackText} href="#form-top">
              Go back to the top of the form
            </a>
            <img src="/icons/up.svg" alt="Up arrow" className={styles.iconMobile} />
          </div>

          <button
            className={styles.send}
            type="submit"
            disabled={state.submitting}
          >
            Send
          </button>
        </section>
      </form>
    </section>
  );
};

export default ContactForm;
