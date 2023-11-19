import React from "react";
import styles from './style.module.css'

function Task({sdata, func}) {
   
    return (sdata.map( ({sid, sname, sresult}) => 
    { 
        return <li key ={sid} className={sresult == "pass"? styles.Passstyle: styles.Failstyle}>{sid+ " "+ sname}  <button onClick={()=>func(sid)}>Delete</button></li>
    }
    ))   
}

export default Task;