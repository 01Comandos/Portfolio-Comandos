import React from 'react';
import { useState } from 'react';
import Slider from 'react-touch-drag-slider';
import Modal from 'react-modal';
import styles from './ModalCarousel.module.css';

const ModalCarousel = ({ items }) => {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => setModalState(!modalState);

  // carousel

  const [index, setIndex] = useState(0);

  const setFinishedIndex = (i) => {
    setIndex(i);
  };

  const next = () => {
    if (index < items.length - 1) setIndex(index + 1);
  };

  const previous = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={items[index]}
        onClick={toggleModalState}
      />
      <div className={styles.imagesCounter}>
        {index + 1} / {items.length}
      </div>

      <Modal
        overlayClassName={styles.overlay}
        className={styles.modal}
        isOpen={modalState}
        ariaHideApp={false}>
        <div className={styles.close} onClick={toggleModalState}>
          <img src="/icons/close.svg" alt="" />
        </div>
        {index === 0 ? (
          ''
        ) : (
          <div
            className={`${styles.button} ${styles['button--left']}`}
            onClick={previous}>
            <img src="/images/arrow.png" alt="arrow" />
          </div>
        )}
        {index === items.length - 1 ? (
          ''
        ) : (
          <div
            className={`${styles.button} ${styles['button--right']}`}
            onClick={next}>
            <img src="/images/arrow.png" alt="arrow" />
          </div>
        )}
        <Slider
          onSlideComplete={setFinishedIndex}
          activeIndex={index}
          threshHold={100}
          transition={0.5}
          scaleOnDrag={true}>
          {items.map((url, index) => (
            <img src={url} key={index} />
          ))}
        </Slider>
      </Modal>
    </div>
  );
};

export default ModalCarousel;
