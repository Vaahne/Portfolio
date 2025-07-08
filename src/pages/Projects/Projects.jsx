import styles from "./Projects.module.css"

export default function Projects(){
    return <>
    <div className={styles.projects}>
        <div className={styles.project}>
            <a href={import.meta.env.VITE_PURPLEGRAM} target="_blank">Purplegram</a>
        </div>
        <div className={styles.project}>
            <a href={import.meta.env.VITE_TRIVIA} target="_blank">Trivia</a>
        </div>
        <div className={styles.project}>
            <a href={import.meta.env.VITE_RECIPE} target="_blank">Recipe Blog</a>
        </div>
        <div className={styles.project}>
            <a href={import.meta.env.VITE_TODO} target="_blank">Todo List</a>
        </div>
        <div className={styles.project}>
            <a href={import.meta.env.VITE_WEATHER} target="_blank">Weather API</a>
        </div>
         <div className={styles.project}>
            <a href={import.meta.env.VITE_EXTERNALAPI} target="_blank">External API</a>
        </div>
    </div>
    </>
}