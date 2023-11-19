import React from "react";
import styles from './style.module.css'

function Task(props) {
   
    return (props.sdata.map( ({sid, sname, sresult}) => 
    { 
        return <li key ={sid} className={sresult == "pass"? styles.Passstyle: styles.Failstyle}>{sid+ " "+ sname}  <button onClick={()=>props.func(sid)}>Delete</button></li>
    }
    ))   
}

export default Task;