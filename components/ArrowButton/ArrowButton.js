import LazyImage from "../LazyImage/LazyImage";

const arrowButton = ({ styles, onclick = () => {} }) => (
  <div className={styles} onClick={onclick}>
    <LazyImage src="/icons/up.svg" alt="arrow-up-icon" />
  </div>
);

export default arrowButton;
