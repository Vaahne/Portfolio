import styles from './Certificate.module.css'
export default function Certificate(){
    const certificates = ["VITE_REACT_CERTIFICATE","VITE_SOFTWAREENGINEER_CERTIFICATE","VITE_JAVASCRIPT_BASIC_CERTIFICATE",
                          "VITE_JAVASCRIPT_INTERMEDIATE_CERTIFICATE","VITE_RESTAPI_CERTIFICATE","VITE_SQL_BASIC_CERTIFICATE",
                        "VITE_SQL_INTERMEDIATE_CERTIFICATE","VITE_JAVA_BASIC_CERTIFICATE"];
    const tech = ["REACT","Software Engineer","JavaScript","JavaScript Intermediate","REST API","SQL","SQL Intermediate","Java"]
    return <>
        <section className={styles.certifications}>
  <h2>Certifications</h2>
  <ul className={styles.certificates}>
        {certificates.map((c,i)=>{
            return <li>
                <strong>HackerRank Certified in {tech[i]}</strong>
                <a href={import.meta.env[c]} target="_blank">View Credential</a>
            </li>
        })}
  </ul>
</section>

    </>
}