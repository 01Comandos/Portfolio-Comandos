import Link from "next/link";
import styles from "./Project.module.css";
import { trackEvent } from "../../analytics/events";
import { useState } from "react";
import classNames from "classnames";
import LazyImage from "../LazyImage/LazyImage";

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
      onClick={() => trackEvent("Project clicked", { project: name })}
    >
      <article
        className={`${styles.container} ${
          lightTheme ? styles["container--light"] : null
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className={classNames(
            "aspect_ratio",
            "aspect_ratio--380by307",
            styles["aspect_ratio--380by307"]
          )}
        >
          <LazyImage
            src={pictures.mobile}
            className={classNames(styles.pictureMobile, "aspect_ratio__item")}
            alt={name}
          />
        </div>
        <figure className={styles.figurePicture}>
          <div
            className={classNames(
              "aspect_ratio",
              "aspect_ratio--402by486",
              styles["aspect_ratio--402by486"]
            )}
          >
            <LazyImage
              src={pictures.desktop}
              className={`aspect_ratio__item  ${styles.picture} ${
                isHover ? styles.animation : null
              }`}
              alt={name}
            />
          </div>
        </figure>
        <h4 className={styles.title}>{name}</h4>
        <div
          className={`${styles.textContainer} ${
            lightTheme ? styles["textContainer--light"] : null
          }`}
        >
          <p className={styles.description}>{description}</p>
          <LazyImage src="/icons/icon-arrow.svg" />
        </div>
      </article>
    </Link>
  );
};

export default Project;
