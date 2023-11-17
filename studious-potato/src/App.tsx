import React from "react";
import { useState } from "react";
const ListInput = () =>{
  const [inputString, setInput] = useState("");
  const [taskList, setTaskList] = useState([{}]);
  const handleChange = (e) =>{
    e.preventDefault();
    setInput(e.target.value);
  }
  const handleSubmit = (e) =>{
    setTaskList([{title: inputString}, ...taskList ]);
    e.preventDefault();
    setInput("");
  }
  return (
    <div>
        <input type="text" name="taskInput" placeholder="Enter taskname" onChange={handleChange}/>
        <button onClick={handleSubmit}>Add</button>
        <ul>  
        {taskList.map(task => 
          <li>{task.title}</li>
        )}
        </ul>
    </div>
  );
}

const App = () => {
  return(
    <div>
      <ListInput />
    </div>
  );
}

export default App;
