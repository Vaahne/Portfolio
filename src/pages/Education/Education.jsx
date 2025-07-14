import styles from './Education.module.css'

export default function Education(){
    return <>
        <div className={styles.education}>
            <h3>EDUCATION</h3>
            <div>
                <h3>Per Scholas <span>2025</span></h3>
                <strong>Software Development Program</strong>
                <p>Learning full-stack web development with a focus on front-end and back-end technologies including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Emphasis on real-world projects, teamwork, and industry best practices.</p>

            </div>
            <div>
                <h3>GMRIT <span>2007–2011</span></h3>
                <strong>Bachelor’s Degree in Computer Science and Engineering</strong>
                <p>  Built a strong foundation in programming, data structures, algorithms, databases, object-oriented design, and software engineering principles. Gained hands-on experience with Java, SQL, and software development methodologies through academic projects and labs.</p>

            </div>
        </div>
     </>
}