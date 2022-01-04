import Link from 'next/link';
import styles from './Project.module.css';
import { trackEvent } from '../../analytics/events';
import { useState } from 'react';

const Project = ({ isMobile, pictures, name, description, url }) => {
  const [isHover, setHover] = useState(false);

  return (
    <Link
      href={`/p/${url}`}
      onClick={() => trackEvent('Project clicked', { project: name })}>
      <article
        className={styles.container}
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
        <div className={styles.textContainer}>
          <p className={styles.description}>{description}</p>
          {!isMobile && <img src="/icons/icon-arrow.svg" />}
        </div>
      </article>
    </Link>
  );
};

export default Project;
