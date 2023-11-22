import React, { useState , useRef} from "react"
export const Card = ({name, children})=> {

    const spanInput = useRef("Refresh")
    function handleChange(event){
        setUsername(event.target.value);
    }

    function saveStatus(event){
      setStatus(event.target.value);
  }

    function handleSubmit(event){
        setUsername(event.target.value);
        setStatus(event.target.value);
      
    }

    function clear(){
      setUsername("Name")
      setStatus("false")
      spanInput.current.textContent = status
      
    }
    const [username, setUsername] = useState("Name")
    const [status, setStatus] = useState("false")
    return (

        
        <div className={name}>
          <form onSubmit={handleSubmit}>
            
            <label htmlFor="username"></label>
            <input type = "text" name= "username" id = "username" onChange={(event)=> handleChange(event)} value={username}></input>
            <select onChange={(event)=> saveStatus(event)}>
              <option value = "false">Pending </option>
              <option value = "true">Completed</option>
            </select>
            <br/>
            <span onClick={()=> clear() } ref={spanInput}>Refresh</span>
            {username}
            {status}
            {spanInput.current.textContent}
          </form>

        </div>
    )
}