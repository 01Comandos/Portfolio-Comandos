// import React from 'react';
// import { useState } from 'react';
// import Slider from 'react-touch-drag-slider';
// import Modal from 'react-modal';
// // import styles from '../styles/Test.module.css';
// // import Modal from 'react-modal';

// const Pagetest = () => {
//   const images = [
//     { url: '/images/projects/stadio/stadio-01.png', title: 'image' },
//     { url: '/images/projects/stadio/stadio-02.png', title: 'image' },
//     { url: '/images/projects/stadio/stadio-03.png', title: 'image' },
//     { url: '/images/projects/stadio/stadio-04.png', title: 'image' },
//   ];
//   const [modalState, setModalState] = useState(true);

//   const toggleModalState = () => setModalState(!modalState);

//   // carousel

//   const [index, setIndex] = useState(1);

//   const next = () => {
//     if (index < images.length - 1) setIndex(index + 1);
//     console.log('+1');
//   };

//   const previous = () => {
//     if (index > 0) setIndex(index - 1);
//     console.log('-1');
//   };

//   return (
//     <section className={styles.section}>
//       <button onClick={toggleModalState}>Open Modal</button>

//       <Modal
//         overlayClassName={styles.overlay}
//         className={styles.modal}
//         isOpen={modalState}
//         ariaHideApp={false}>
//         <button className={styles.close} onClick={toggleModalState}>
//           X
//         </button>
//         <button
//           className={`${styles.button} ${styles['button--left']}`}
//           onClick={previous}>
//           〈
//         </button>
//         <button
//           className={`${styles.button} ${styles['button--right']}`}
//           onClick={next}>
//           〉
//         </button>
//         <Slider
//           activeIndex={index}
//           threshHold={100}
//           transition={0.5}
//           scaleOnDrag={true}>
//           {images.map(({ url, title }, index) => (
//             <img src={url} key={index} alt={title} />
//           ))}
//         </Slider>
//       </Modal>
//     </section>
//   );
// };

// export default Pagetest;
