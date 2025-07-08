import styles from "./About.module.css"
import profilePic from "../../assets/images/Durga.jpg"
export default function About(){
    return <>
        <div className={styles.about}>
          <img src={profilePic} alt="Profile Pic"/>
          <div className={styles.details}>
                
          </div>
        </div>
    </>
}