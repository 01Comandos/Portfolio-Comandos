import classNames from 'classnames';
import styles from './ResultSection.module.css';

function ResultSection({
  projectName,
  picture,
  title,
  description,
  isReverse,
  background,
  theme,
}) {
  return (
    <div
      style={{ background }}
      className={classNames({
        [styles.container]: true,
        [styles[theme]]: true,
        'padding-x': true,
        [styles.defaultContainer]: !isReverse,
        [styles.reverseContainer]: isReverse,
      })}>
      <figure className={styles.figure}>
        <img src={picture} alt={projectName} className={styles.picture} />
      </figure>
      <h3
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}></h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default ResultSection;
