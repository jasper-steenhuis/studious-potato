import React from "react";
import { useState } from "react";

type task ={
  id: number,
  title: string,
  completed: boolean;
};



const ListInput = () =>{
  const [inputString, setInput] = useState("");
  let [taskList, setTaskList] = useState<task[]>([]);
  let [index, setIndex] = useState(0);
  const handleChange = (e) =>{
    e.preventDefault();
    setInput(e.target.value);
  }
  
  const addTask = (e) =>{
    setIndex(index=>index+1);
    let newTask: task = {id: index , title: inputString, completed: false};
    setTaskList([newTask, ...taskList]);
    e.preventDefault();
    setInput("");
  }
  const completeTask = (task => {
    const list = [...taskList];
    const taks = list.find(t => t.id === task.id);
    if(taks !== undefined){
      taks.completed = !taks.completed;
    }
    setTaskList(list);
  })

  return (
    <div>
        <input type="text" name="taskInput" value={inputString} placeholder="Enter taskname" onChange={handleChange}/>
        <button onClick={addTask}>Add</button>
        <ul>  
              {taskList.map(task => 
                <li>
                  <p style={{
                    textDecorationLine: task.completed ? 'line-through' : 'none'
                  }}>{task.title} {task.completed}</p>
                  <button onClick={() => {setTaskList(taskList.filter(t => t.id !== task.id))}}>delete</button>
                  <button onClick={() => {completeTask(task)}}>complete</button>
                </li>)}
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
