import classNames from "classnames";
import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import ArrowButton from "../ArrowButton/ArrowButton";
import styles from "./TestimonialsCarousel.module.css";
import LazyImage from "../LazyImage/LazyImage";

const DELAY = 8000;

const TestimonialCarousel = ({
  testimonials,
  color = "tertiary",
  isMobile,
  background,
}) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const handlers = useSwipeable({
    onSwipedLeft: () => (isMobile ? swipe(1) : null),
    onSwipedRight: () => (isMobile ? swipe(-1) : null),
    preventDefaultTouchmoveEvent: true,
  });

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const swipe = (value) => {
    const newIndex = index + value;
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
    <section style={{ background, paddingBottom: 80 }}>
      <div
        className={`${styles.container} ${
          styles[`${color}Container`]
        } padding-x`}
      >
        <h3 className={styles.title}>
          Impacting teams, products and thousands of people
        </h3>
        <div
          className={styles.slideshowSlider}
          {...handlers}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {testimonials.map((testimonial, idx) => (
            <article
              key={idx}
              className={`${styles.slide} ${
                index === idx ? styles.active : ""
              }`}
            >
              {index === idx && (
                <ArrowButton
                  styles={styles.arrowLeft}
                  onclick={() => {
                    swipe(-1);
                  }}
                />
              )}
              <div className={styles.slideContent}>
                <p className={styles.text}>{testimonial.feedback}</p>
                <div className={styles.customers}>
                  <LazyImage
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
              {index === idx && (
                <ArrowButton
                  styles={styles.arrowRight}
                  onclick={() => {
                    swipe(1);
                  }}
                />
              )}
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
      </div>
    </section>
  );
};

export default TestimonialCarousel;
