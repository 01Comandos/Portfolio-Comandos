import Link from 'next/link';
import styles from './Project.module.css';
import { trackEvent } from '../../analytics/events';
import { useState } from 'react';
import classNames from 'classnames';

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
        <div
          className={classNames(
            'aspect_ratio',
            'aspect_ratio--380by307',
            styles['aspect_ratio--380by307']
          )}>
          <img
            src={pictures.mobile}
            className={classNames(styles.pictureMobile, 'aspect_ratio__item')}
          />
        </div>
        <figure className={styles.figurePicture}>
          <div
            className={classNames(
              'aspect_ratio',
              'aspect_ratio--402by486',
              styles['aspect_ratio--402by486']
            )}>
            <img
              src={pictures.desktop}
              className={`aspect_ratio__item  ${styles.picture} ${
                isHover ? styles.animation : null
              }`}
            />
          </div>
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
