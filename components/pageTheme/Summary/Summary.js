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
        {/* <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}></p> */}
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
        <img className={styles.picture} src={picture} alt={projectName} />
      </figure>
      <ul className={styles.details}>
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
