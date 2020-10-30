import React from 'react';
import styles from './MainLayout.module.scss';
import WelcomeSection from '../WelcomeSection/WelcomeSection';

const mainLayout = (props)=>(
    <main className={styles.MainLayout}>
       
       <WelcomeSection/>
       
    </main>
);


export default mainLayout;