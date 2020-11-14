import React from 'react';
import styles from './ContactSection.module.scss';
import ContactCard from './ContactCard/ContactCard';

const contactSection = (props) => (

    <div className={styles.ContactSection}>
       
        <div className={styles.Content}>
            <h1>Contact</h1>
            <div className={styles.Cards}>
                <ContactCard />
                <ContactCard />
                <ContactCard />

            </div>

        </div>


    </div>
);

export default contactSection;