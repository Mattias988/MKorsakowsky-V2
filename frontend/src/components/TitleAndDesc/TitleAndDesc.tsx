import {TitleAndDescProps} from "@/types/components";
import styles from "@/components/TitleAndDesc/TitleAndDesc.module.scss";

export default function TitleAndDesc({title , description}: TitleAndDescProps) {

    return (
        <div className={styles.titleWithDescContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.firstTitleLine}/>
                    <h2 className={styles.sectionTitle}>{title}</h2>
                <div className={styles.secondTitleLine}/>
            </div>
            <div className={styles.descContainer}>
                <p className={styles.sectionDesc}>
                    {description}
                </p>
            </div>
        </div>
    )
}