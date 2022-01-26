import classNames from 'classnames';
import styles from './PartnersSection.module.css';

function PartnersSection({
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
      className={classNames(styles.partnersSection, styles[theme])}>
      <div className={classNames([styles.container], [styles[theme]])}>
        <div className={styles.backgroundContainer}>
          <div className={styles.backgroundTop}></div>
          <div className={styles.backgroundBottom}></div>
        </div>
        <h4
          style={{ color: titleColor }}
          className={classNames(styles.title, {
            [styles.titleSmall]: titleSmall,
          })}>
          {title}
        </h4>
        <div className={styles.imagesContainer}>
          {images.map((item, index) => (
            <div key={index}>
              <img className={styles.image} src={item} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;
