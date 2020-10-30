import React from 'react';
import styles from './Navbar.module.scss';

const navbar = (props) =>(
    <div className={styles.Navbar} >
        <div className={styles.LogoCircle}>
            <a href="#Top">L</a>
        </div>
        <ul>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#AboutMe">About Me</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>     
    </div>
);

export default navbar;
