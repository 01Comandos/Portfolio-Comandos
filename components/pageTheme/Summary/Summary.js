import classNames from 'classnames';
import styles from './Summary.module.css';

function Summary({
  projectName,
  description,
  picture,
  details,
  theme,
  background,
  hasLine,
}) {
  return (
    <div
      style={{ background }}
      className={classNames({
        [styles.container]: true,
        'padding-x': true,
        [styles[theme]]: true,
        [styles.hasLine]: !hasLine,
      })}>
      <>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}></div>
        {hasLine && (
          <div
            className={classNames({
              horizontalLine: true,
              [styles.line]: true,
            })}></div>
        )}
      </>
      <figure className={styles.figure}>
        <div className="aspect_ratio aspect_ratio--569by673">
          <img
            className={classNames(
              styles.picture,
              'aspect_ratio__item',
              'object_fit_cover'
            )}
            src={picture}
            alt={projectName}
          />
        </div>
      </figure>
      <ul
        className={classNames(styles.details, { [styles.hasLine]: !hasLine })}>
        {Object.keys(details).map((key, index) => (
          <li key={index} className={styles.detail}>
            <strong className={styles.detailName}>{key}</strong>
            {details[key].map((detail, idx) => (
              <span key={idx} className={styles.detailContent}>
                {detail}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Summary;
