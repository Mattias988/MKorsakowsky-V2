'use client';

import React from 'react';
import styles from './Experience.module.scss';
import { experienceData } from '@/data/timeLineData';
import Timeline from "@/components/Timeline/Timeline/Timeline";
import TitleAndDesc from "@/components/TitleAndDesc/TitleAndDesc";
import {experienceTitleAndDesc} from "@/data/experience";

export default function Experience() {
    const { title, description } = experienceTitleAndDesc;
    return (
        <section className={styles.experienceSection} id="experience">
            <div className={styles.container}>
                <TitleAndDesc title={title} description={description} />

                <Timeline data={experienceData} />
            </div>
        </section>
    );
}