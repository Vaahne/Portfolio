import styles from "./Projects.module.css"
import purplegramHome from "../../assets/images/purplegram/homePage.png"
import trivia from "../../assets/images/Trivia.png"
import todo from "../../assets/images/Todo.png"
import recipe from "../../assets/images/recipe.png"
import weather from "../../assets/images/weather/weather.png"
import externalApi from "../../assets/images/externalApi.png"

export default function Projects(){

    const projects =[ {"VITE_PURPLEGRAM":"Purplegram"},
                    {"VITE_TRIVIA":"Trivia"},
                    {"VITE_RECIPE":"Recipe Blog"},
                    {"VITE_TODO":"Todo List"},
                    {"VITE_WEATHER":"Weather API"},
                    {"VITE_EXTERNALAPI":"External API"}];
    const images = [purplegramHome,trivia,recipe,todo,weather,externalApi];

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
        {/* <div className={styles.project}>
            <a href={import.meta.env.VITE_PURPLEGRAM} target="_blank">Purplegram</a>
            <a href={import.meta.env.VITE_PURPLEGRAM} target="_blank"><img className={styles.img} src={purplegramHome} alt="Purplegram Home"/></a>
        </div> */}
        {/* <div className={styles.project}>
            <a href={import.meta.env.VITE_TRIVIA} target="_blank">Trivia</a>
            <a href={import.meta.env.VITE_TRIVIA} target="_blank"><img className={styles.img} src={trivia} alt="Trivia Home"/></a>
        </div>
        <div className={styles.project}>
            <a href={import.meta.env.VITE_RECIPE} target="_blank">Recipe Blog</a>
        </div>
        <div className={styles.project}>
            <a href={import.meta.env.VITE_TODO} target="_blank">Todo List</a>
            <a href={import.meta.env.VITE_TODO} target="_blank"><img className={styles.img} src={todo} alt="Todo"/></a>
        </div>
        <div className={styles.project}>
            <a href={import.meta.env.VITE_WEATHER} target="_blank">Weather API</a>
            <a href={import.meta.env.VITE_WEATHER} target="_blank"><img className={styles.img} src={weather} alt="Weather"/></a>
        </div>
         <div className={styles.project}>
            <a href={import.meta.env.VITE_EXTERNALAPI} target="_blank">External API</a>
        </div> */}
    </div>
    </>
}