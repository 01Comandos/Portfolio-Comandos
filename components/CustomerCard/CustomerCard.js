import styles from './CustomerCard.module.css';

const CustomerCard = ({ photo, name, role, company }) => {
    return (
        <div className={styles.CustomerCardContainer}>
            <img src={photo} className={styles.CustomerCardPhoto} alt={name} />
            <div>
                <span className={styles.CustomerCardName}>{name}</span>
                <span className={styles.CustomerCardRole}>
                    {role} at <strong className={styles.BolderText}>{company}</strong>
                </span>
            </div>
        </div>
    )
};

export default CustomerCard;