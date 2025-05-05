import styles from "./backgroundBlobs.module.scss";

export default function BackgroundBlobs() {
    return (
        <div className={styles.backgroundBlobs}>
            <div className={styles.blob} />
            <div className={`${styles.blob} ${styles.second}`} />
        </div>
    );
}
