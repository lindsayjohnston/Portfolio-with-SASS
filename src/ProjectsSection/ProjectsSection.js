import React from 'react';
import styles from './ProjectsSection.module.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import chipotleImage from '../assets/Chipotle_screenshot.png';
import gitHubMapImage from '../assets/GitHub_UserMap_screenshot.png';
import vannaImage from '../assets/Vanna_screenshot.png';

const projectInfo=[
    ["Order Online", chipotleImage, "This site mimics the styling and functionality of the Chipotle website. I used React to create dynamically-populated content cards to showcase each menu item on the website. The site is fully responsive and easily scales to any amount of items or ingredients added to the database. It allows the user tailor the ingredients of their order, add and remove items from their cart, and place an order online.", "https://www.bocaloud.com/" ],
    ["3 APIS, 1 Button", gitHubMapImage, "I used this project to hone my skills with APIs. By querying four different APIs--from Google, GitHub and Geomaps--I used vanilla JavaScript to display an interactive map of cities with their corresponding numbers of GitHub users. With this project I also delved deeper into asynchronous functions, Node.js and Heroku’s config variables feature to protect my API keys.", "https://github-map-real.herokuapp.com/"],
    ["Responsive Design", vannaImage, "The webpage you're looking at was built with React and SASS. In addition to developing websites, I have a knack for writing excellent copy and an eye for design. For another example from my web design portfolio, follow the link above to a site I made with Wix.", "https://www.vannaoh.com/"]
];

const projectsSection = (props) => (

    <div className={styles.ProjectsSection}>
        <div className={styles.Circle}></div>
        <div className={styles.Content}>
            <h1>Projects</h1>
            <div className={styles.Cards}>
              

                {projectInfo.map((item, i, array)=>{
                    if(i === array.length-1){
                        return(<ProjectCard 
                        label= {item[0]}
                        image={item[1]}
                        caption={item[2]}
                        link={item[3]}
                        lastCard="true"/>)
                    } 

                    return(<ProjectCard 
                        label= {item[0]}
                        image={item[1]}
                        caption={item[2]}
                        link={item[3]}
                        />)
                })}

            </div>

        </div>


    </div>
);

export default projectsSection;