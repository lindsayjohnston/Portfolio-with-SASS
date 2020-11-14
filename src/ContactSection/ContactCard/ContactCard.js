import React from "react";
import styles from "./ContactCard.module.scss";
import linkedInIcon from "/Users/lindsayjohnston/Desktop/Programming/portfolio-with-sass/src/assets/LinkedIn_white_icon.png";

const contactCard = (props) => (
        <div className={styles.ContactCardContainer}>
            <div className={styles.IconContainer}>
                <img src={props.icon}></img>
            </div>
            <div className={styles.Label}>{props.label}</div>
        </div>
    )
;

export default contactCard;