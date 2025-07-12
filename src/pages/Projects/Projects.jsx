import styles from "./Projects.module.css"
import purplegramHome from "../../assets/images/purplegram/homePage.png"
import trivia from "../../assets/images/Trivia.png"
import todo from "../../assets/images/Todo.png"
import recipe from "../../assets/images/recipe.png"
import weather from "../../assets/images/weather/weather.png"
import externalApi from "../../assets/images/externalApi.png"
import guessNum from "../../assets/images/guessNumber.png"

export default function Projects(){

    const projects =[ {"VITE_PURPLEGRAM":"Purplegram"},
                    {"VITE_TRIVIA":"Trivia"},
                    {"VITE_RECIPE":"Recipe Blog"},
                    {"VITE_TODO":"Todo List"},
                    {"VITE_WEATHER":"Weather API"},
                    {"VITE_EXTERNALAPI":"External API"},
                    {"VITE_GUESSNUMBER":"Guess the number"}];
    const images = [purplegramHome,trivia,recipe,todo,weather,externalApi,guessNum];
    const description = ["MERN Stack(MongoDB, Express, React, Node.js),JWT,CSS",
                         "React,REST API,CSS Module","Html, CSS, JS, Responsive Design",
                         "JS, CSS, Local Storage",
                         "JS OpenWeather API,Fetch API, CSS",
                         "REACT, AXIOS, CRUD, External REST API",
                         "JS, DOM Manipualtion, CSS"];
    const summaries = [
  "A social media app built with MERN stack and JWT authentication.",
  "A trivia quiz app using React and external REST API.",
  "A responsive recipe blog built with HTML, CSS, and JavaScript.",
  "A simple todo list app with local storage support.",
  "A weather dashboard using OpenWeather API and JS.",
  "A CRUD app consuming external REST APIs with React and Axios.",
  "A number guessing game using vanilla JavaScript."
];

    return <>
    <div className={styles.projects}>

        {projects.map((p,i)=>{
                const [key,value] = Object.entries(p)[0];
            return <div className={styles.project}>
                <div className={styles.projectDetails}>
                    <h4 className={styles.title}>
                        <a href={import.meta.env[key]} target="_blank">{value}</a>
                    </h4>
                    {/* <h4 style={{textAlign:'center'}}>{value}</h4> */}
                    <p className={styles.summary}>{summaries[i]}</p>
                    <div className={styles.links}>
                        <a href={import.meta.env[key]} target="_blank" className={styles.link}>Live Demo</a>
                        <a href={import.meta.env[`${key}_GITHUB`]} target="_blank" className={styles.link}>View Code</a>
                    </div>
                </div>
                <a href={import.meta.env[key]} target="_blank">
                    <img className={styles.img} src={images[i]} alt={value}/>
                </a>
                <p className={styles.desc}>Technologies : </p>
                    <div className={styles.techList}>
                        {description[i].split(",").map((tech, index) => (
                            <span key={index} className={styles.techTag}>{tech.trim()}</span>
                        ))}
                    </div>
            </div>
        })}
    </div>
    </>
}