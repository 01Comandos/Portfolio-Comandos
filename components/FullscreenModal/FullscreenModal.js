import styles from './FullscreenModal.module.css';

function FullscreenModal({ children, containerStyles, handleClose, visibility = false }) {
    const innerStyles = {
        display: visibility ? 'block' : 'none'
    };

    return (
        <div className={`${styles.container} ${containerStyles}`} style={innerStyles}>
            <img src='/icons/close.svg' onClick={handleClose} className={styles.buttonClose} />
            {children}
        </div>
    );
}

export default FullscreenModal;
