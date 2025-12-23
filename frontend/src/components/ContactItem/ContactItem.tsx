import styles from './ContactItem.module.scss'
import {ContactItemProps} from "@/types/components";

export default function ContactItem({icon: Icon, contactItemTitle, contactItemDescription}: ContactItemProps) {

    return (
        <section className={styles.contactItemContainer}>
            <div className={styles.contactItemIcon}><Icon /></div>
            <div className={styles.contactItemInfo}>
                <h3 className={styles.contactItemTitle}>{contactItemTitle}</h3>
                <a href={`mailto:${contactItemDescription}`} className={styles.contactItemDescription}>{contactItemDescription}</a>
            </div>
        </section>
    )
}