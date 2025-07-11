import styles from "./Contact.module.css";
import {FaGithub,FaLinkedin} from 'react-icons/fa'

export default function Contact(){
    return <>
        <div className={styles.contact}>
            <ul>
                <li className={styles.email}>
                        <a href="mailto:durga.pushadapu3@gmail.com">durga.pushadapu3@gmail.com</a>
                </li>
                <li className={styles.icons}>
                    <a href={import.meta.env.VITE_LINKEDIN} target="_blank" >
                        <FaLinkedin className={styles.icon}/>
                    </a>
                     <a href={import.meta.env.VITE_GITHUB} target="_blank">
                        <FaGithub className={styles.icon}/>
                    </a>
                </li>
            </ul>
        </div>
    </>
}