import styles from "./Testimonials.module.css";

const testimonialsList = [
  {
    title: "Impacting teams, products and thousands of people",
    feedback:
      "“Carlos is THE definition of state-of-the art design. The bar is never too high for Carlos, and he pushes his teammates to constantly try harder. Carlos displays a lot of customer obsession and is a very gifted UX/UI designer that I would love to work again with. Congrats for fighting for excellence!”",
    customer: {
      name: "Valentin Vermersch",
      picture: "/images/customer-1.png",
      position: "Angel Investor | GM @Deliverect",
    },
  },
];

const Testimonials = ({ color = "tertiary" }) => {
  return (
    <section className={`${styles.container} ${styles[`${color}Container`]}`}>
      {testimonialsList.map((testimonial, index) => (
        <div key={index}>
          <h3 className={styles.title}>{testimonial.title}</h3>
          <p className={styles.text}>{testimonial.feedback}</p>
          <div className={styles.customers}>
            <img className={styles.customerPicture} src={testimonial.customer.picture} alt={testimonial.customer.name} />
            <div className={styles.customerInfo}>
              <span className={styles.customerName}>{testimonial.customer.name}</span>
              <span className={styles.customerPosition}>{testimonial.customer.position}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
