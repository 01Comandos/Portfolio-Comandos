import styles from "./Project.module.css"

const Project = ({ pictures, name, description }) => (
  <div className={styles.container}>
    <img src={pictures.mobile} className={styles.pictureMobile} />
    <img src={pictures.desktop} className={styles.picture} />
    <h4 className={styles.title}>{name}</h4>
    <p className={styles.description}>{description}</p>
  </div>
);

export default Project;