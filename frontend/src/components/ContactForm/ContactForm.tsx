import styles from './ContactForm.module.scss'
import {Send} from "lucide-react";

export default function ContactForm() {
    return (
        <div className={styles.contactForm}>
            <form className={styles.form}>

                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your name..."
                        required
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        required
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Write whatever you want..." required className={styles.textarea}></textarea>
                </div>

                <button type="submit" className={styles.button}>
                    <Send width={18}/>
                    Send Message
                </button>

            </form>
        </div>
    )
}