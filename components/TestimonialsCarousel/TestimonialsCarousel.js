import { useState, useEffect, useRef } from "react";
import ArrowButton from "../ArrowButton/ArrowButton";
import styles from "./TestimonialsCarousel.module.css";

const DELAY = 8000;

const TestimonialCarousel = ({
  testimonials,
  color = "tertiary"
}) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const swipe = (newIndex) => {
    if (newIndex === -1) {
      setIndex(testimonials.length - 1);
    } else if (newIndex === testimonials.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      DELAY
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <section
      className={`${styles.container} ${styles[`${color}Container`]} padding-x`}
    >
      <h3 className={styles.title}>
        Impacting teams, products and thousands of people
      </h3>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {testimonials.map((testimonial, idx) => (
          <article
            key={idx}
            className={`${styles.slide} ${index === idx ? styles.active : ""}`}
          >
            {index === idx && (
              <ArrowButton
                styles={styles.arrowLeft}
                onclick={() => {
                  swipe(idx - 1);
                }}
              />
            )}
            <div className={styles.slideContent}>
              <p className={styles.text}>{testimonial.feedback}</p>
              <div className={styles.customers}>
                <img
                  className={styles.customerPicture}
                  src={testimonial.customer.picture}
                  alt={testimonial.customer.name}
                />
                <div className={styles.customerInfo}>
                  <span className={styles.customerName}>
                    {testimonial.customer.name}
                  </span>
                  <span className={styles.customerPosition}>
                    {testimonial.customer.position}
                  </span>
                </div>
              </div>
            </div>
            {index === idx && <ArrowButton styles={styles.arrowRight} onclick={() => {
                  swipe(idx + 1);
                }} />}
          </article>
        ))}
      </div>

      <div className={styles.slideshowDots}>
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`${styles.slideshowDot}${
              index === idx ? " " + styles.active : ""
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
