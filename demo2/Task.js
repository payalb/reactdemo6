import React from "react";
import styles from './style.module.css'
import { useState } from "react";

function Task(props) {
    const [x, setX] = useState(props.sdata); //pass empty array


       function deleteData(id){
        console.log(id);
        setX(x=> x.filter( y => y.sid != id))
    }
    return (x.map( ({sid, sname, sresult}) => 
    { 
        return <li key ={sid} className={sresult == "pass"? styles.Passstyle: styles.Failstyle}>{sid+ " "+ sname}  <button onClick={()=>deleteData(sid)}>Delete</button></li>
    }
    ))   
}

export default Task;