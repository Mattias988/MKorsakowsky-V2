import styles from "./backgroundBlobs.module.scss";

export default function BackgroundBlobs() {
    return (
        <div className={styles.backgroundBlobs}>
            <div className={`${styles.blob} ${styles.first}`} />
            <div className={`${styles.blob} ${styles.second}`} />
        </div>
    );
}
