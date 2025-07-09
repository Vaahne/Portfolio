import styles from "./About.module.css"
import profilePic from "../../assets/images/Durga.jpg"
export default function About(){
    return <>
        <div className={styles.about}>
          <img className={styles.profilePic} src={profilePic} alt="Profile Pic"/>
          <div className={styles.details}>
                <div class="box grey smallFont" id="box2">
                    <p><strong>Name:</strong>Durga Pushadapu</p>
                    <p><strong>Dob:</strong>June 5</p>
                    <p><strong>Address:</strong>Denver,Colorado</p>
                    <p><strong>Phone</strong>+1720-492-4744</p>
                    <p><strong>Email:</strong>durga.pushadapu3@gmail.com</p>
                    <p><strong>Website:</strong><a href="https://www.linkedin.com/in/durga-p-b228aa2b4/" target="_blank">Linkedin</a></p>
                    <p><strong>GitHub:</strong><a href="https://github.com/Vaahne?tab=repositories" target="_blank">GitHub</a></p>
                </div>
          </div>
           <section class="content_box" id="section2">
            <div class="bar1 emp">
                <h3>EMPLOYMENT</h3>
            </div>
            <div class="textArea">
                <p class="org emp mediumFont">Tata Consultancy Services<span class="date grey">2011-2015</span></p>
                <p class="subtitle" >Systems Engineer </p>             
            </div>
            <p class="desc grey smallFont">4 years of Experience as a QA Tester and in Support Team using Selenium ,Java, MySQL.</p>
            <hr/>
            <div class="textArea">
                <p class="org emp mediumFont">Red Hawk Ridge<span class="date grey">2023-present</span></p>
                <p class="subtitle" >Educator</p>             
            </div>
            <p class="desc grey smallFont">Experienced in developing lesson plans, maintaining attendance records, assisting parents with CCAP login, and ensuring compliance with school policies. </p>
            <div class="bar1 edu">
                <h3 class="status">EDUCATION</h3>
            </div>
            <div class="textArea">
                <p class="org edu mediumFont">Per Scholas <span class="date grey">Feb 2025-present</span></p>
                <p class="subtitle" >Learner</p>             
            </div>
            <p class="desc grey smallFont">Learning MERN Stack Software Developement course which includes : Html , Css , Javascript, React , Express, Node.js , MongoDb
                  
            </p>
                <hr/>
                <div class="textArea">
                    <p class="org edu mediumFont"> GMRIT<span class="date grey">2007-2011</span></p>
                    <p class="subtitle" >Bachelor Degree</p>             
                </div>
            <p class="desc grey smallFont">Bachelor’s degree in Computer Science with a strong foundation in programming, data structures, algorithms, databases, and software development. </p>         
            </section>
        </div>
    </>
}