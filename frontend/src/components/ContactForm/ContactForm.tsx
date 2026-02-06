'use client';

import styles from './ContactForm.module.scss';
import { Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            toast.error("EmailJS configuration is missing. Please check .env.local file.");
            console.error("Missing EmailJS keys in .env.local");
            return;
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
                publicKey
            );

            toast.success("Message sent successfully!");
            reset();
        } catch (error) {
            console.error("Failed to send email:", error);
            toast.error("Failed to send message. Please try again.");
        }
    };

    return (
        <div className={styles.contactForm}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your name..."
                        required
                        className={styles.input}
                        {...register("name")}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        required
                        className={styles.input}
                        {...register("email")}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        placeholder="Write whatever you want..."
                        required
                        className={styles.textarea}
                        {...register("message")}
                    ></textarea>
                </div>

                <button type="submit" className={styles.button} disabled={isSubmitting}>
                    {isSubmitting ? <Loader2 className="animate-spin" width={18} /> : <Send width={18} />}
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
}