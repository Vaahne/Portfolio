import styles from './Experience.module.css'

export default function Experience(){
    return <>
        <div className={styles.experience}>
            <h3>EXPERIENCE</h3>
            <div>
                <h4>ActivateWork powered by Per Scholas</h4>
                <p>Built Purplegram using MERN stack technologies.</p>
            </div>
            <div>
                <h4>Tata Consultancy Services</h4>
                <p>4 years of Experience as a QA Tester and in Support Team using Selenium ,Java, MySQL.</p>
            </div>
            <div>
                <h4>Red Hawk Ridge</h4>
                <p>Experienced in developing lesson plans, maintaining attendance records, assisting parents with CCAP login, and ensuring compliance with school policies.</p>
            </div>
        </div>
    </>
}