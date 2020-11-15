import React from 'react';
import styles from './WelcomeSection.module.scss';

const welcomeSection = (props) => (
    <div className={styles.WelcomeSection}>
        <div className={styles.Intro}>
            <h1>Lindsay K. Johnston</h1>
            <h2>I am a <span className={styles.SpanPrimary}>web developer </span>with an eye for design. I like to build websites using <span className={styles.SpanPrimary}>JavaScript </span>, <span className={styles.SpanPrimary}>React.js</span>, <span className={styles.SpanPrimary}>SASS</span>, and <span className={styles.SpanPrimary}>Node.js</span>.</h2>
        </div>
    </div>
);

export default welcomeSection;