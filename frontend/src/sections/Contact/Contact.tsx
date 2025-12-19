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

            <main className={styles.contactMain}>
                <div className={styles.contactItemsContainer}>
                    {contactItemsData.map((contactItemsData, index) => (
                        <ContactItem
                            key={index}
                            contactItemTitle={contactItemsData.contactItemTitle}
                            contactItemDescription={contactItemsData.contactItemDescription}
                            icon={contactItemsData.icon}
                        />
                    ))}
                </div>

                <div className={styles.contactFormContainer}>
                    <ContactForm />
                </div>
            </main>

        </section>
    )
}