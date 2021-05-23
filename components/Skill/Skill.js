import styles from "./Skill.module.css"

const Skill = ({ icon, skill, description }) => (
  <div className={styles.container}>
    <img src={icon} className={styles.icon} />
    <h4 className={styles.title}>{skill}</h4>
    <p className={styles.description}>{description}</p>
  </div>
);

export default Skill;