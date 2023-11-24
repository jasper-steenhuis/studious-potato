import React from "react";
import { useState } from "react";

type task ={
  id: number,
  title: string,
  completed?: boolean;
};



const ListInput = () =>{
  const [inputString, setInput] = useState("");
  let [taskList, setTaskList] = useState<task>();
  const handleChange = (e) =>{
    e.preventDefault();
    setInput(e.target.value);
  }
  let id=0;
  const handleSubmit = (e) =>{
    let newTask: task = {id: id, title: inputString, completed: false};
    setTaskList([newTask, ...taskList]);
    e.preventDefault();
    setInput("");
  }
  
  return (
    <div>
        <input type="text" name="taskInput" value={inputString} placeholder="Enter taskname" onChange={handleChange}/>
        <button onClick={handleSubmit}>Add</button>
        <ul>  
              {taskList?.map(task => 
                <li>task.title</li>)}
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
