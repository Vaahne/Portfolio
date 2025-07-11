import { useState } from "react"
import styles from "./Collapsable.module.css"
export default function Collapsable({title,children,defaultOpen=false}){
    const[isOpen,setIsOpen] = useState(defaultOpen);
    return (
        <div className={styles.collapsable}>
            <div className={styles.header} onClick={(e)=>{
                e.stopPropagation();
                setIsOpen(!isOpen)}}>
                <h4>{title}</h4>
                <span>{isOpen ? "˅":"˄"}</span>
            </div>
            {isOpen && (<div className={styles.content}>{children}</div>)}
        </div>)
}

{/* <details className={styles.collapsable} >
            
            <summary>{title}</summary>
            <div className={styles.content}>{children}</div>
        </details> */}