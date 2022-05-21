import classNames from "classnames";
import styles from "./DisplayImage.module.css";
import LazyImage from "../../LazyImage/LazyImage";

function DisplayImage({ image }) {
  return (
    <>
      <LazyImage className={styles.image} src={image} alt={image} />
    </>
  );
}

export default DisplayImage;
