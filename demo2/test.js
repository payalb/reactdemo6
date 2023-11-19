import React from "react";

import Task from "./Task";

function  Test() { 
    const x = [{"sid": 1, "sname": "rishabh", "sresult": "fail"}, {"sid": 2, "sname": "mani", "sresult": "pass"}]; //pass empty array


    

    return (
  <ul>
    <div>
         <Task sdata= {x}/>
    </div>
    </ul>
        )
}

export default Test
