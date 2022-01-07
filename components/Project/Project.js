import Link from 'next/link';
import styles from './Project.module.css';
import { trackEvent } from '../../analytics/events';
import { useState } from 'react';

const Project = ({
  isMobile,
  pictures,
  name,
  description,
  slug,
  lightTheme,
}) => {
  const [isHover, setHover] = useState(false);

  return (
    <Link
      href={`/p/${slug}`}
      onClick={() => trackEvent('Project clicked', { project: name })}>
      <article
        className={`${styles.container} ${
          lightTheme ? styles['container--light'] : null
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <img src={pictures.mobile} className={styles.pictureMobile} />
        <figure className={styles.figurePicture}>
          <img
            src={pictures.desktop}
            className={`${styles.picture} ${isHover ? styles.animation : null}`}
          />
        </figure>
        <h4 className={styles.title}>{name}</h4>
        <div
          className={`${styles.textContainer} ${
            lightTheme ? styles['textContainer--light'] : null
          }`}>
          <p className={styles.description}>{description}</p>
          <img src="/icons/icon-arrow.svg" />
        </div>
      </article>
    </Link>
  );
};

export default Project;
