import React from "react";
import { useState } from "react";
import styles from './style.module.css'

function  Test() { 
    
    const [x, setX] = useState([{"sid": 1, "sname": "rishabh", "sresult": "fail"}, {"sid": 2, "sname": "mani", "sresult": "pass"}]); //pass empty array

    function deleteData(id){
        console.log(id);
        setX(x=> x.filter( y => y.sid != id))
    }
    return (
  <ul>
    <div>
         {x.map( ({sid, sname, sresult}) => 
            { 
                return <li key ={sid} className={sresult == "pass"? styles.Passstyle: styles.Failstyle}>{sid+ " "+ sname}  <button onClick={()=>deleteData(sid)}>Delete</button></li>
            }
        )}      
    </div>
    </ul>
        )
}

export default Test