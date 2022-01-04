import styles from './Skill.module.css';

const Skill = ({ icon, skill, items }) => (
  <div className={styles.container}>
    <img src={icon} className={styles.icon} />
    <h4 className={styles.title}>{skill}</h4>
    <div className={styles.description_container}>
      {items.map((item, index) => (
        <p className={styles.description} key={index}>
          <img src="./icons/check.svg" className={styles.check}></img>
          {item}
        </p>
      ))}
    </div>
  </div>
);

export default Skill;
