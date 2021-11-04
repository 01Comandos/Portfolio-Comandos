import classNames from "classnames";
import styles from "./Icon.module.css";

function Icon({ path, color }) {
  return (
    <img
      src={`/images/icons/${path}`}
      className={classNames({
        [styles.icon]: true,
        [styles.secondary]: color === 'secondary',
        [styles.white]: color === 'white',
        [styles.gray]: color === 'gray',
      })}
    />
  );
}

export default Icon;
