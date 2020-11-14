import React from "react";
import styles from "./ContactCard.module.scss";
import linkedInIcon from "/Users/lindsayjohnston/Desktop/Programming/portfolio-with-sass/src/assets/LinkedIn_white_icon.png";

const contactCard = (props) => (
        <div className={styles.ContactCardContainer}>
            <div className={styles.IconContainer}>
                <img src={linkedInIcon}></img>
            </div>
            <div className={styles.Label}>Label</div>
        </div>
    )
;

export default contactCard;