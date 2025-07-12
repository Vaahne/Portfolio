import styles from "./Contact.module.css";
import {FaGithub,FaLinkedin} from 'react-icons/fa'

export default function Contact(){
    return <>
        <div className={styles.contact}>
            <h3>Hi, I'm Durga Pushadapu — nice to meet you!  </h3>
            <p className={styles.intro}>
                I'm a Full Stack Developer based in Denver, Colorado, with a passion for building responsive, user-friendly web applications.  
            </p>
            <p className={styles.intro}>
  Whether you're hiring or looking to collaborate on software development or QA testing, feel free to connect with me on <a href={import.meta.env.VITE_LINKEDIN} target="_blank">LinkedIn</a>. I'm always open to exciting opportunities!
</p>

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