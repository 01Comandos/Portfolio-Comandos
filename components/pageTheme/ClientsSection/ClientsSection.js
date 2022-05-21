import classNames from "classnames";
import styles from "./ClientsSection.module.css";
import LazyImage from "../../LazyImage/LazyImage";

function ClientsSection({
  title,
  images,
  background,
  theme,
  titleSmall,
  titleColor,
}) {
  return (
    <div
      style={{ background }}
      className={classNames({
        [styles.container]: true,
        [styles[theme]]: true,
      })}
    >
      <h4
        style={{ color: titleColor }}
        className={classNames(styles.title, {
          [styles.titleSmall]: titleSmall,
        })}
      >
        {title}
      </h4>
      <div className={styles.imagesContainer}>
        {images.map((item, index) => (
          <div key={index}>
            <LazyImage
              className={styles.image}
              src={item}
              key={index}
              alt={title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientsSection;
