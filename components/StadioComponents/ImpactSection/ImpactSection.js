import classNames from "classnames";
import styles from "./ImpactSection.module.css";

function ImpactSection({
    containerStyles = null,
    projectName,
    picture,
    title,
    description
 }) {
  return (
    <div className={classNames({
        [styles.container]: true,
        'padding-x': true,
        [containerStyles]: containerStyles ? true : false
    })}>
      <figure className={styles.figure}>
        <img src={picture} alt={projectName} className={styles.picture} />
      </figure>
      <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default ImpactSection;

