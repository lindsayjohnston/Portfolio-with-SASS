import React from 'react';
import styles from './BackgroundDesign.module.scss';
import LindsayPhoto from '../assets/Lindsay-Big-Photo.svg';

const backgroundDesign= (props) =>(
    <div className={styles.Body}>
        <img className={styles.LindsayImage}src={LindsayPhoto} alt="Lindsay-background" />

        <div className={styles.OuterCircle}   
        >
            <div className={styles.InnerCircle}></div>
        </div>

    </div>

);

export default backgroundDesign;