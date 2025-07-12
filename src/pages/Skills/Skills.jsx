import styles from './Skills.module.css'

export default function Skills(){
    return <>
        <div className={styles.skills}>
             <ul className={styles.prog}>                    
                    <li className={styles.skillItem}>
                        <label>REACT</label>
                        <div className={`${styles.progressbar} ${styles.react}`}>80%</div>
                    </li>
                    <li className={styles.skillItem}>
                        <label>EXPRESS</label>
                        <div className={`${styles.progressbar} ${styles.express}`}>80%</div>
                    </li>
                    <li className={styles.skillItem}>
                        <label>NODE</label>
                        <div className={`${styles.progressbar} ${styles.node}`}>80%</div>
                    </li>
                    <li className={styles.skillItem}>
                        <label>JS</label>
                        <div className={`${styles.progressbar} ${styles.js}`}>80%</div>
                    </li>
                    <li className={styles.skillItem}>
                        <label>HTML</label>
                        <div className={`${styles.progressbar} ${styles.html}`}>90%</div>
                    </li>
                    <li className={styles.skillItem}>
                        <label>CSS</label>
                        <div className={`${styles.progressbar} ${styles.css}`}>80%</div>
                    </li>
                    <li className={styles.skillItem}>
                        <label>JAVA</label> 
                        <div className={`${styles.progressbar} ${styles.java}`}>80%</div>
                    </li>
                    <li className={styles.skillItem}>
                        <label>DEVOPS TOOLS</label>
                        <div className={`${styles.progressbar} ${styles.devops}`}>70%</div>
                    </li>
                    <li className={styles.skillItem}>
                        <label>Python</label>
                        <div className={`${styles.progressbar} ${styles.python}`}>80%</div>
                    </li>
                    <li className={styles.skillItem}>
                        <label>MONGODB</label>
                        <div className={`${styles.progressbar} ${styles.mongodb}`}>70%</div>
                    </li>
                    <li className={styles.skillItem}>
                        <label>MySQL</label>
                        <div className={`${styles.progressbar} ${styles.mysql}`}>80%</div>
                    </li>
                    <li className={styles.skillItem}>
                        <label>Selenium</label>
                        <div className={`${styles.progressbar} ${styles.selenium}`}>80%</div>
                    </li>                    
 
                </ul>
        </div>
    </>
}