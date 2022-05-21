import classNames from "classnames";
import styles from "./Icon.module.css";
import LazyImage from "../../LazyImage/LazyImage";

function Icon({ path, color }) {
  return (
    <LazyImage
      src={`/images/icons/${path}`}
      className={classNames({
        [styles.icon]: true,
        [styles.secondary]: color === "secondary",
        [styles.white]: color === "white",
        [styles.gray]: color === "gray",
        [styles.dark]: color === "dark",
      })}
      alt="icon"
    />
  );
}

export default Icon;
