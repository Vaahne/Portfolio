import styles from "./About.module.css"
import profilePic from "../../assets/images/Durga.jpg"
import Collapsable from "../../components/collapsable/Collapsable"
import {FaGithub,FaLinkedin} from "react-icons/fa";
export default function About(){
    return <>
        <div className={styles.aboutContainer}>
            <div className={styles.about}>
                <div className={styles.profileSection}>
                    <img className={styles.profilePic} src={profilePic} alt="Profile Pic"/>
                        <div className={styles.details}>
                            <div className={`${styles.box}`}>
                                <p><strong>Name:</strong>Durga Pushadapu</p>
                                <p><strong>Location:</strong>Denver,Colorado</p>
                                <p><strong>Email:</strong>durga.pushadapu3@gmail.com  </p>
                                <p className={styles.iconParent}>
                                    <a href={import.meta.env.VITE_LINKEDIN} target="_blank" >
                                        <FaLinkedin className={styles.icon}/>
                                    </a>
                                    <a href={import.meta.env.VITE_GITHUB} target="_blank">
                                        <FaGithub className={styles.icon}/>
                                    </a>
                                </p>
                            </div>
                     </div>
                </div>
                <section className={styles.about1}>
                    <h2>About Me</h2>
                    <p>I'm a Full Stack Developer with hands-on experience in the MERN stack. I enjoy building clean, responsive web apps that solve real problems.</p>

                    <p>My journey started in QA and support at TCS. Later, I transitioned into development through the ActivateWork bootcamp, where I built projects like <strong>Purplegram</strong>.
                    </p>

                    <p>
                        I focus on writing modular code, creating smooth user experiences, and learning new tools. I value teamwork, curiosity, and clean design.
                    </p>
            </section>
        </div>
    </div>
    </>
}