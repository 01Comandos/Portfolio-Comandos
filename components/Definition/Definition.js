import Link from "next/link";
import styles from "./Definition.module.css";
import { trackEvent } from "../../analytics/events";
import LazyImage from "../LazyImage/LazyImage";

const Definition = () => {
  return (
    <>
      <section className={`${styles.container} padding-x`}>
        <LazyImage
          className={styles.logo}
          src="/logo/logo-white.svg"
          alt="Comandos Logotipo"
          width={192}
          height={42}
        />
        <div>
          <p className={styles.description}>
            Comandos has more than 10 years of experience creating innovate
            products through human-centered design. The most effective team of
            designers and developers to achieve the maximum potential of your
            idea.
          </p>
          <Link
            href="/contact"
            onClick={() => trackEvent("Contact CTA clicked")}
          >
            <div className={styles.knowMore}>
              <span>I want to know more</span>
              <LazyImage src="/icons/icon-arrow.svg" alt="icon-arrow" />
            </div>
          </Link>
        </div>
      </section>
      <div className={styles.horizontalLine}></div>
    </>
  );
};

export default Definition;
