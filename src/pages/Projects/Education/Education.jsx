import styles from './Education.module.css'

export default function Education(){
    return <>
        <div className={styles.education}>
            <div>
                <h3>Per Scholas</h3>
                <p >Software Development</p>
                <p>Learning MERN Stack Software Developement course which includes : Html , Css , Javascript, React , Express, Node.js , MongoDb</p>
            </div>
            <div>
                <h3>GMRIT</h3>
                <p>Bachelor Degree</p>
                <p>Bachelor’s degree in Computer Science with a strong foundation in programming, data structures, algorithms, databases, and software development. </p>
            </div>
        </div>
     </>
}