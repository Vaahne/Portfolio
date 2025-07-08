import styles from "./Contact.module.css";

export default function Contact(){
    return <>
        <div className={styles.contact}>
            <ul>
                <li>Email: durga.pushadapu3@gmail.com</li>
                <li><a href={import.meta.env.VITE_LINKEDIN} target="_blank" >LinkedIn</a></li>
                <li><a href={import.meta.env.VITE_GITHUB} target="_blank">Github</a></li>
            </ul>
        </div>
    </>
}