const arrowButton = ({ styles, onclick = () => {} }) => (
    <div className={styles} onClick={onclick}>
      <img src="/icons/up.svg" />
    </div>
);

export default arrowButton;
