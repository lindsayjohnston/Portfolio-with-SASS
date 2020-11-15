import React from "react";
import styles from "./ProjectCard.module.scss";

const projectCard = (props) => {
    let cardContainerStyles = `${styles.ProjectCardContainer}`;
    if (props.lastCard) {
        cardContainerStyles = `${styles.ProjectCardContainer} ${styles.LastCardContainer}`
    }
    return (
        <div className={cardContainerStyles}>
            <a href={props.link} target="_blank">
                <img src={props.image} className={styles.CardTop}></img>
            </a>
            

            <div className={styles.CardBottom}>
                <h2>{props.label}</h2>
                <p>{props.caption}</p>
            </div>
        </div>
    )
};

export default projectCard;