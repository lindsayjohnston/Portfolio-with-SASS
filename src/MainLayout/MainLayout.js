import React from 'react';
import styles from './MainLayout.module.scss';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import BackgroundDesign from '../BackgroundDesign/BackgroundDesign';

const mainLayout = (props)=>(
    <main className={styles.MainLayout}>
       <BackgroundDesign/>
       <WelcomeSection/>
       <ProjectsSection/>
    </main>
);


export default mainLayout;