import React, { useState } from "react";

import Task from "./Task";

function  Test() { 

    const [x, setX]= useState([{"sid": 1, "sname": "rishabh", "sresult": "fail"}, {"sid": 2, "sname": "mani", "sresult": "pass"}]);
    function deleteData(id){
        console.log(id);
        setX(x=> x.filter( y => y.sid != id))
    }

    return (
  <ul>
    <div>
         <Task sdata= {x} func= {deleteData}/>
    </div>
    </ul>
        )
}

export default Test
