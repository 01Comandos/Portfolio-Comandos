import Image from 'next/image';
import { useState } from 'react';
import classNames from 'classnames';
import ContactMe from '@/components/ContactMe/ContactMe';
import styles from './Hero.module.css';
import Modal from 'react-modal';
import { trackEvent } from '../../../analytics/events';

function Hero({
  logo,
  picture,
  project,
  subtitle,
  title,
  withContact,
  theme,
  background,
  urlVideo,
  showNameDesktop,
}) {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => {
    setModalState(!modalState);
    document.body.style.overflow = modalState ? 'initial' : 'hidden';
  };

  return (
    <section
      style={{ background }}
      className={classNames({
        [styles.container]: true,
        [styles[theme]]: true,
      })}>
      <figure className={styles.figureVideo}>
        {urlVideo && (
          <span
            onClick={() => {
              toggleModalState();
              trackEvent('Open modal carousel clicked');
            }}
            className={styles.figureProjectVideoInfo}>
            <img src="/icons/icon-play.svg" alt="play" />
            Play video
          </span>
        )}
        <div className={styles.figureProjectInfo}>
          <h2
            className={classNames(styles.projectName, {
              [styles.showNameDesktop]: showNameDesktop,
            })}>
            {project}
          </h2>
          <span className={styles.projectSlogan}>{subtitle}</span>
        </div>
        <img src={picture} className={styles.imageVideo} />
      </figure>
      <div className={styles.textSection}>
        <div className={styles.titleProjectInfo}>
          {!logo && (
            <h2 className={classNames(styles.projectName)}>{project}</h2>
          )}
          {logo && (
            <figure className={styles.logo}>
              <img src={logo} />
            </figure>
          )}
          <span className={styles.projectSlogan}>{subtitle}</span>
        </div>
        <h1 className={classNames(styles.title)}>{title}</h1>
        {withContact && <ContactMe containerStyles={styles.contactMe} />}
        <div
          className={classNames([styles.verticalLine], [styles[theme]])}></div>
      </div>

      <Modal
        overlayClassName={styles.overlay}
        className={styles.modal}
        isOpen={modalState}
        ariaHideApp={false}>
        <div className={styles.close} onClick={toggleModalState}>
          <img src="/icons/close.svg" alt="" />
        </div>
        <div className={styles.videoContainer}>
          <div className="aspect_ratio aspect_ratio--16by9">
            <iframe
              className="aspect_ratio__item object_fit_cover"
              width="85%"
              height="85%"
              src={urlVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default Hero;
