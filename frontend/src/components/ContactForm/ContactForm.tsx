import styles from './ContactForm.module.scss'

export default function ContactForm() {
    return (
        <div className={styles.contactForm}>
            <form className={styles.form}>
                <input type="text" name="name" placeholder="Your Name" required className={styles.input} />
                <input type="email" name="email" placeholder="Your Email" required className={styles.input} />
                <textarea name="message" placeholder="Your Message" required className={styles.textarea}></textarea>
                <button type="submit" className={styles.button}>Send Message</button>
            </form>
        </div>
    )
}