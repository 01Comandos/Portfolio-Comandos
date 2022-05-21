import { useState } from "react";
import classNames from "classnames";
import ContactMe from "@/components/ContactMe/ContactMe";
import styles from "./Hero.module.css";
import Modal from "react-modal";
import { trackEvent } from "../../../analytics/events";
import LazyImage from "../../LazyImage/LazyImage";

function Hero({
  logo,
  picture,
  project,
  projectId,
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
    document.body.style.overflow = modalState ? "initial" : "hidden";
  };

  return (
    <section
      style={{ background }}
      className={classNames({
        [styles.container]: true,
        [styles[theme]]: true,
      })}
    >
      <figure
        className={`${styles.figureVideo} ${
          !urlVideo && styles[`figureVideo--not_video`]
        }`}
        onClick={() => {
          toggleModalState();
          trackEvent(`Projects: ${projectId} open modal carousel clicked`);
        }}
      >
        {urlVideo && (
          <span className={styles.figureProjectVideoInfo}>
            <LazyImage src="/icons/icon-play.svg" alt="play" />
            Play video
          </span>
        )}
        <div className={styles.figureProjectInfo}>
          <h2
            className={classNames(styles.projectName, {
              [styles.showNameDesktop]: showNameDesktop,
            })}
          >
            {project}
          </h2>
          <span className={styles.projectSlogan}>{subtitle}</span>
        </div>
        <LazyImage src={picture} className={styles.imageVideo} alt={project} />
      </figure>
      <div className={styles.textSection}>
        <div className={styles.titleProjectInfo}>
          {!logo && (
            <h2 className={classNames(styles.projectName)}>{project}</h2>
          )}
          {logo && (
            <figure className={styles.logo}>
              <LazyImage src={logo} alt="logo" />
            </figure>
          )}
          <span className={styles.projectSlogan}>{subtitle}</span>
        </div>
        <h1 className={classNames(styles.title)}>{title}</h1>
        {withContact && <ContactMe containerStyles={styles.contactMe} />}
        <div
          className={classNames([styles.verticalLine], [styles[theme]])}
        ></div>
      </div>

      <Modal
        overlayClassName={styles.overlay}
        className={styles.modal}
        isOpen={modalState}
        ariaHideApp={false}
      >
        <div className={styles.close} onClick={toggleModalState}>
          <LazyImage src="/icons/close.svg" alt="close-icon" />
        </div>
        <div className={styles.videoContainer}>
          <div className={`aspect_ratio aspect_ratio--16by9 ${styles.video}`}>
            <iframe
              className={`aspect_ratio__item ${styles.videoItem}`}
              src={urlVideo}
              allowFullScreen
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default Hero;
