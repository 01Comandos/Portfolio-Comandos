import styles from "./Project.module.css"

const Project = ({ picture, name, description }) => (
  <div className={styles.container}>
    <img src={picture} className={styles.picture} />
    <h4 className={styles.title}>{name}</h4>
    <p className={styles.description}>{description}</p>
  </div>
);

export default Project;