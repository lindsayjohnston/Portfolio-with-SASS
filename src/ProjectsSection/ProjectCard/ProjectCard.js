import React from "react";
import styles from "./ProjectCard.module.scss";

const projectCard = (props) => {
    let cardContainerStyles = `${styles.ProjectCardContainer}`;
    if (props.lastCard) {
        cardContainerStyles = `${styles.ProjectCardContainer} ${styles.LastCardContainer}`
    }
    return (
        <div className={cardContainerStyles}>
            <div className={styles.InnerCard}>
                <div className={styles.CardTop}>
                    THIS IS A CARD TOP
                </div>
                <div className={styles.CardBottom}>
                    THIS IS A CARD BOTTOM
                 </div>

            </div>

        </div>
    )
};

export default projectCard;