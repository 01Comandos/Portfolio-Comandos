import styles from "./FullscreenModal.module.css";
import LazyImage from "../LazyImage/LazyImage";

function FullscreenModal({
  children,
  containerStyles,
  handleClose,
  visibility = false,
}) {
  const innerStyles = {
    display: visibility ? "block" : "none",
  };

  return (
    <div
      className={`${styles.container} ${containerStyles}`}
      style={innerStyles}
    >
      <LazyImage
        src="/icons/close.svg"
        onClick={handleClose}
        className={styles.buttonClose}
        alt="close-icon"
      />
      {children}
    </div>
  );
}

export default FullscreenModal;
