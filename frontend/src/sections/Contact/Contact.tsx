import TitleAndDesc from "@/components/TitleAndDesc/TitleAndDesc";
import styles from "./Contact.module.scss";
import ContactItem from "@/components/ContactItem/ContactItem";
import {contactItemsData} from "@/data/contactItemData";
import {contactItemTitleAndDesc} from "@/data/contactItemTitleAndDesc";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Contact() {
    const {title, description} = contactItemTitleAndDesc;

    return (
        <section className={styles.contactContainer} id="contact">
            <TitleAndDesc title={title} description={description}/>

            <main className={styles.mainInfoContainer}>
                <div className={styles.contactLeftContainer}>
                    <div className={styles.contentLeft}>
                        <h2 className={styles.mainInfoTitle}>Get in Touch</h2>
                        <p className={styles.mainInfoDescription}>
                            I'm open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                    </div>

                    <div className={styles.contactItems}>
                        {contactItemsData.map((contactItemsData, index) => (
                            <ContactItem
                                key={index}
                                contactItemTitle={contactItemsData.contactItemTitle}
                                contactItemDescription={contactItemsData.contactItemDescription}
                                icon={contactItemsData.icon}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.contactFormContainer}>
                    <ContactForm />
                </div>
            </main>

        </section>
    )
}