import React from 'react';
import { useState } from 'react';
import Slider from 'react-touch-drag-slider';
import Modal from 'react-modal';
import styles from './ModalCarousel.module.css';
import classNames from 'classnames';

const ModalCarousel = ({ items }) => {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => {
    setModalState(!modalState);
    document.body.style.overflowY = modalState ? 'initial' : 'hidden';
  };

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

  const reset = () => {
    setIndex(0);
  };

  return (
    <div className={styles.container}>
      <div className="aspect_ratio aspect_ratio--569by673">
        <img
          className={classNames(
            styles.image,
            'aspect_ratio__item',
            'object_fit_cover'
          )}
          src={items[0]}
          onClick={toggleModalState}
        />
        <div className={styles.imagesCounter}>
          {0 + 1} / {items.length}
        </div>
      </div>

      <Modal
        overlayClassName={styles.overlay}
        className={styles.modal}
        isOpen={modalState}
        ariaHideApp={false}>
        <div
          className={styles.close}
          onClick={() => {
            toggleModalState();
            reset();
          }}>
          <img src="/icons/close.svg" alt="" />
        </div>
        {index === 0 ? (
          ''
        ) : (
          <div
            className={`${styles.button} ${styles['button--left']}`}
            onClick={previous}>
            <img src="/icons/arrow-left.svg" alt="arrow" />
          </div>
        )}
        {index === items.length - 1 ? (
          ''
        ) : (
          <div
            className={`${styles.button} ${styles['button--right']}`}
            onClick={next}>
            <img src="/icons/arrow-right.svg" alt="arrow" />
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
