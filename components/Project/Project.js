import { useState } from "react";
import styles from "./Project.module.css";

const Project = ({ isMobile, pictures, name, description }) => {
  const [isIconVisible, setIconVisibility] = useState(false);

  return (
    <div className={styles.container}>
      <img src={pictures.mobile} className={styles.pictureMobile} />
      <img
        src={pictures.desktop}
        className={styles.picture}
        onMouseEnter={() => setIconVisibility(true)}
        onMouseLeave={() => setIconVisibility(false)}
      />
      <h4 className={styles.title}>{name}</h4>
      <div className={styles.textContainer}>
        <p className={styles.description}>{description}</p>
        {(isMobile || isIconVisible) && <img src="/icons/icon-arrow.svg" />}
      </div>
    </div>
  );
};

export default Project;
