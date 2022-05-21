import styles from "./Skill.module.css";
import LazyImage from "../LazyImage/LazyImage";

const Skill = ({ icon, skill, items }) => (
  <div className={styles.container}>
    <LazyImage src={icon} className={styles.icon} alt="skill-icon" />
    <h4 className={styles.title}>{skill}</h4>
    <div className={styles.description_container}>
      {items.map((item, index) => (
        <p className={styles.description} key={index}>
          <LazyImage
            src="./icons/check.svg"
            className={styles.check}
            alt="check-icon"
          />
          {item}
        </p>
      ))}
    </div>
  </div>
);

export default Skill;
