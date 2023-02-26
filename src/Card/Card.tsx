import { styles } from "./Card.css";

export const Card = (props:any) => {
    const {title,details,hasBorder} = props;
    return (
        <div className={styles.cardWrapper}>
        <div className={styles.cardContainer}>
            <div className={styles.cardTitle}>{title}</div>
            <div className={styles.cardInfo}>{details}</div>
        </div>
        {hasBorder && (
            <div className={styles.border}></div>
        )}
        </div>
    )
}