import styles from './Certificate.module.css'
export default function Certificate(){
    const certificates = ["VITE_REACT_CERTIFICATE","VITE_SOFTWAREENGINEER_CERTIFICATE","VITE_JAVASCRIPT_BASIC_CERTIFICATE",
                          "VITE_JAVASCRIPT_INTERMEDIATE_CERTIFICATE","VITE_RESTAPI_CERTIFICATE","VITE_SQL_BASIC_CERTIFICATE",
                        "VITE_SQL_INTERMEDIATE_CERTIFICATE","VITE_JAVA_BASIC_CERTIFICATE","VITE_IT_AUTOMATION_WITH_PYTHON","VITE_AUTOMATING_REAL_WORLD_TASKS_WITH_PYTHON","VITE_CRASH_COURSE_PYTHON","VITE_INTRODUCTION_GIT_GITHUB","VITE_TROUBLESHOOTINH_DEBUGGING","VITE_PYTHON_INTERACT_OS","VITE_LINUX_AND_SQL","VITE_SQL_JOINS","VITE_ART_OF_VISUALIZATION"];
    const tech = ["REACT","Software Engineer","JavaScript","JavaScript Intermediate","REST API","SQL","SQL Intermediate","Java","IT Automation With Python","Automating Real World Tasks with Python","Python","GitHub","Troubleshooting and Debugging","Python Interacts OS","Linux and SQL","SQL Joins","Share Data Through Art of Visualization"]
    return <>
        <section className={styles.certifications}>
  <h2>Certifications</h2>
  <ul className={styles.certificates}>
        {certificates.map((c,i)=>{
            if(i>7)
                return <li>
                    <strong>Coursera Certifed in {tech[i]}</strong>
                    <a href={import.meta.env[c]} target="_blank">View Credential</a>
                </li>
            else
                return <li>
                    <strong>HackerRank Certified in {tech[i]}</strong>
                    <a href={import.meta.env[c]} target="_blank">View Credential</a>
                </li>
        })}
  </ul>
</section>

    </>
}