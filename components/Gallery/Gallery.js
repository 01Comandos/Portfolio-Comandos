import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./Gallery.module.css";
import LazyImage from "../LazyImage/LazyImage";

function Gallery({ photos = [], containerStyles }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => swipe(1),
    onSwipedRight: () => swipe(-1),
    preventDefaultTouchmoveEvent: true,
  });

  const swipe = (value) => {
    const newIndex = currentIndex + value;
    if (newIndex === -1) {
      setCurrentIndex(photos.length - 1);
    } else if (newIndex === photos.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className={`${styles.container} ${containerStyles}`}>
      <div
        className={styles.photos}
        {...handlers}
        style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
      >
        {photos.map((photo, idx) => (
          <LazyImage
            className={`${styles.photo} ${
              currentIndex === idx ? styles.active : ""
            }`}
            src={photo}
            alt="Gallery photo"
          />
        ))}
      </div>
      <span className={styles.counter}>
        {currentIndex + 1}/{photos.length}
      </span>
    </div>
  );
}

export default Gallery;
