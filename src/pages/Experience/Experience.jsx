import styles from './Experience.module.css'

export default function Experience(){
    return <>
        <div className={styles.experience}>
            <h3>EXPERIENCE </h3>
            <div>
                <h4>ActivateWork powered by Per Scholas<span>2025</span></h4>
                <p>Developed Purplegram, a full-stack web application using the MERN stack (MongoDB, Express, React, Node.js). Applied modern best practices in responsive UI design, RESTful APIs, and database management to deliver a scalable and maintainable solution.</p>
            </div>
            <div>
                <h4>Tata Consultancy Services<span>2011-2015</span></h4>
                <p>Four years of experience as a QA Tester and Support Engineer, specializing in automated testing with Selenium, Java programming, and MySQL database management. Designed and maintained test automation frameworks, performed root cause analysis, and resolved client issues to improve software quality.</p>
            </div>
            <div>
                <h4>Red Hawk Ridge<span>2023-2025</span></h4>
                <p>Developed and implemented lesson plans, maintained accurate attendance records, and provided parental support with CCAP system access. Ensured classroom compliance with school policies, fostering a safe and engaging learning environment.</p>
            </div>
        </div>
    </>
}