import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./ContactMe.module.css";
import { trackEvent } from "@/analytics/events";

function ContactMe({ containerStyles }) {
  const router = useRouter();
  const { pathname } = router;
  const [emailPlaceholder, setEmailPlaceholder] = useState("Your email");
  const [email, setEmail] = useState("");
  const container = `${containerStyles} ${styles.container}`;

  const redirectToContactPage = () => {
    if (!email.length) {
      setEmailPlaceholder("Please, set your email");
      return;
    }
    trackEvent('Contact from project', { pathname });
    router.push({ pathname: '/contact', query: { email } })
  };

  const handleInputChange = (event) => {
    setEmailPlaceholder("Your email");
    setEmail(event.target.value);
  };

  return (
    <div className={container}>
      <input
        className={styles.input}
        type="email"
        placeholder={emailPlaceholder}
        name="email"
        onChange={handleInputChange}
        required
      />
      <button
        type="submit"
        className={styles.submit}
        onClick={redirectToContactPage}
      >
        Contact
      </button>
    </div>
  );
}

export default ContactMe;
