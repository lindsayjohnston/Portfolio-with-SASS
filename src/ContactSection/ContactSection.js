import React from 'react';
import styles from './ContactSection.module.scss';
import ContactCard from './ContactCard/ContactCard';
import linkedInIcon from "/Users/lindsayjohnston/Desktop/Programming/portfolio-with-sass/src/assets/LinkedIn_white_icon.png";
import emailIcon from "/Users/lindsayjohnston/Desktop/Programming/portfolio-with-sass/src/assets/Email_white_icon.png";
import gitHubIcon from "/Users/lindsayjohnston/Desktop/Programming/portfolio-with-sass/src/assets/Github_white_icon.png";

const socialsArray= [["LinkedIn", linkedInIcon], ["E-mail", emailIcon], ["GitHub", gitHubIcon]];


const contactSection = (props) => (

    <div className={styles.ContactSection}>
       
        <div className={styles.Content}>
            <h1>Let's Connect</h1>
            <div className={styles.Cards}>
                {socialsArray.map(item =>(
                    <ContactCard icon={item[1]} label= {item[0]}/>
                ))}

            </div>
            
        </div>

        <footer>Copyright 2020-Lindsay Johnston </footer>
    </div>
);

export default contactSection;