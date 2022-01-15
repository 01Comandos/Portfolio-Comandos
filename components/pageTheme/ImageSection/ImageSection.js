import classNames from 'classnames';
import styles from './ImageSection.module.css';

function ImageSection({
  projectName,
  picture,
  title,
  description,
  isReverse,
  comment,
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
        [styles.hasCommente]: comment.hasCommente,
        [styles.defaultContainer]: !isReverse,
        [styles.reverseContainer]: isReverse,
      })}>
      <figure className={styles.figure}>
        <img src={picture} alt={projectName} className={styles.picture} />
      </figure>
      {comment.hasCommente && (
        <img className={styles.logo} src="/icons/icon-section.svg" alt="logo" />
      )}
      <h3
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}></h3>
      <p className={styles.description}>{description}</p>
      {comment.hasCommente && (
        <>
          <p className={classNames(styles.comment, [styles[theme]])}>
            {comment.text}
          </p>
          <div className={classNames(styles.person, [styles[theme]])}>
            <img
              className={classNames(styles.personImage)}
              src={comment.person.image}
              alt={comment.name}
            />
            <p className={classNames(styles.personName)}>
              {comment.person.name}
            </p>
            <p
              className={classNames(styles.personDescription, [styles[theme]])}>
              {comment.person.description}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ImageSection;
