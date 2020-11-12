import React from 'react';
import styles from './ProjectsSection.module.scss';
import ProjectCard from './ProjectCard/ProjectCard';

const projectsSection = (props) => (

    <div className={styles.ProjectsSection}>
        <div className={styles.Circle}></div>
        <div className={styles.Content}>
            <h1>Projects</h1>
            {/* <div className={styles.Cards}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard lastCard="true"/>

            </div> */}

        </div>


    </div>
);

export default projectsSection;