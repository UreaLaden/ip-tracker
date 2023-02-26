import { styles } from "./Card.css";

export const Card = (props:any) => {
    const {title,details} = props;
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardTitle}>{title}</div>
            <div className={styles.cardInfo}>{details}</div>
        </div>
    )
}