import React from 'react';
import styles from './AboutSection.module.scss';

const aboutSection = (props) => (
    <div className={styles.AboutSection}>
        <div className={styles.Circle}></div>
        <div className={styles.DescriptionDiv}>
            <h1>About Me</h1>
            <div className={styles.Description}>
                <h1>Lindsay K. Johnston</h1>
                <h2>I am a <span className={styles.SpanPrimary}>web developer </span>with an eye for design. I like to build websites using JavaScript, React, SASS, Node.js, and Firebase.</h2>
            </div>

        </div>

    </div>
);

export default aboutSection;