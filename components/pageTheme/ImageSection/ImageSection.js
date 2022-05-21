import classNames from "classnames";
import styles from "./ImageSection.module.css";
import LazyImage from "../../LazyImage/LazyImage";

function ImageSection({
  projectName,
  picture,
  title,
  description,
  isReverse,
  comment,
  background,
  theme,
  hasBackgrounTop,
}) {
  return (
    <div
      style={{ background }}
      className={classNames({
        [styles.container]: true,
        [styles[theme]]: true,
        "padding-x": true,
        [styles.hasCommente]: comment.hasCommente,
        [styles.defaultContainer]: !isReverse,
        [styles.reverseContainer]: isReverse,
      })}
    >
      {hasBackgrounTop && <div className={styles.backgroundTop}></div>}
      <figure className={styles.figure}>
        <div className="aspect_ratio aspect_ratio--569by673">
          <LazyImage
            src={picture}
            alt={projectName}
            className={classNames(
              styles.picture,
              "aspect_ratio__item",
              "object_fit_cover"
            )}
          />
        </div>
      </figure>
      {comment.hasCommente && (
        <LazyImage
          className={styles.logo}
          src="/icons/icon-section.svg"
          alt="logo"
        />
      )}
      <h3
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      <p className={styles.description}>{description}</p>
      {comment.hasCommente && (
        <>
          <p className={classNames(styles.comment, [styles[theme]])}>
            "{comment.text}"
          </p>
          <div className={classNames(styles.person, [styles[theme]])}>
            <LazyImage
              className={classNames(styles.personImage)}
              src={comment.person.image}
              alt={comment.name}
            />
            <p className={classNames(styles.personName)}>
              {comment.person.name}
            </p>
            <p
              className={classNames(styles.personDescription, [styles[theme]])}
            >
              {comment.person.description}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ImageSection;
