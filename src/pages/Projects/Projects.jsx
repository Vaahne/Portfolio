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

    return <>
    <div className={styles.projects}>

        {projects.map((p,i)=>{
                const [key,value] = Object.entries(p)[0];
            return <div className={styles.project}>
                <a href={import.meta.env[key]} target="_blank">{value}</a>
                <a href={import.meta.env[key]} target="_blank">
                    <img className={styles.img} src={images[i]} alt={value}/>
                </a>
            </div>
        })}
    </div>
    </>
}