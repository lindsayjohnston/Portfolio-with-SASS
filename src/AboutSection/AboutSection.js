import React from 'react';
import styles from './AboutSection.module.scss';
import lindsayPhoto from '../assets/bartlett_photo.jpg';

const aboutSection = (props) => (
    <div className={styles.AboutSection}>
        <div className={styles.Circle} ></div>
        <div className={styles.Content}>
            <h1>About</h1>
            <div className={styles.Container}>
                <div className={styles.Placeholder}></div>
                <div className={styles.AboutMeText}>
                <p> My work experiences have varied greatly: from the non-profit sector to the service industry, from education to my most current role as creative director for a rock-and-roll band. The common threads that weave through all of my professional experiences are creativity and innovation. Whether I am creating a teaching strategy, an app or a t-shirt design, I am always looking to improve upon prior work and present the project in an engaging and professional way. I strive to communicate directly and honestly, work efficiently, and push for female representation in historically male-dominated fields.</p>

            </div>

            </div>
           


        </div>


    </div>
);

export default aboutSection;