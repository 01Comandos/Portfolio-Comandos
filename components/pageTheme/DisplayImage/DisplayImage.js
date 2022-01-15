import classNames from 'classnames';
import styles from './DisplayImage.module.css';

function DisplayImage({ image }) {
  return (
    <>
      <img className={styles.image} src={image} alt={image} />
    </>
  );
}

export default DisplayImage;
