import React from 'react';
import styles from './MainLayout.module.scss';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import BackgroundDesign from '../BackgroundDesign/BackgroundDesign';
import AboutSection from '../AboutSection/AboutSection';
import ContactSection from '../ContactSection/ContactSection';

const mainLayout = (props)=>(
    <main className={styles.MainLayout}>
       <BackgroundDesign/>
       <WelcomeSection/>
       <ProjectsSection/>
       <AboutSection/>
       <ContactSection/>
    </main>
);


export default mainLayout;