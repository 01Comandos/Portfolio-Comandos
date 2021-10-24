import classNames from "classnames";
import styles from "./ImageSection.module.css";

function ImageSection({
    containerStyles = {},
    projectName,
    picture,
    title,
    description,
    isReverse }) {
  return (
    <div className={classNames({
        [styles.container]: true,
        'padding-x': true,
        [styles.defaultContainer]: !isReverse,
        [styles.reverseContainer]: isReverse,
        [containerStyles]: true
    })}>
      <figure className={styles.figure}>
        <img src={picture} alt={projectName} className={styles.picture} />
      </figure>
      <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default ImageSection;
