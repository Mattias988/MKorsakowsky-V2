'use client';

import styles from './About.module.scss'
import DescriptionCardsWithIcon from "../../components/InfoCards/DescriptionCardsWithIcon";
import Image from "next/image";
import kittyImage from "@/assets/Kitty.webp";
import { cards } from '@/data/cards';
import {aboutInfo} from "@/data/aboutInfo";
import TitleAndDesc from "@/components/TitleAndDesc/TitleAndDesc";

export default function About() {

    const { title, description, detailedInfo } = aboutInfo;

    return (
        <section id="about" className={styles.aboutSection}>
            <TitleAndDesc title={title} description={description} />

            <div className={styles.contentContainer}>
                <div className={styles.imageContainer}>
                    <Image src={kittyImage} alt="About section coding kitty image" placeholder="blur" className={styles.kittyImage}/>
                </div>

                <div className={styles.textContainer}>
                    <h3 className={styles.sectionTitle}>
                        {detailedInfo.heading}
                    </h3>
                    <p className={styles.sectionDesc}>
                        {detailedInfo.paragraphs[0]}
                        <br/><br/>
                        {detailedInfo.paragraphs[1]}
                    </p>
                </div>
            </div>

            <div className={styles.allCardsContainer}>
                {cards.map((card, index) => (
                    <div key={index} className={styles.cardsContainer}>
                        <DescriptionCardsWithIcon key={index} title={card.title} description={card.description} icon={card.icon} />
                    </div>
                ))}
            </div>
        </section>
    );
}