import React from "react";
import { useState } from "react";
const ListInput = () =>{
  const [inputString, setInput] = useState("");
  const handleChange = (e) =>{
    e.preventDefault();
    setInput(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="taskInput" placeholder="Enter taskname" onChange={handleChange}/>
        <button>Add</button>
      </form>
      {inputString}
    </div>
  );
}
const List = () =>{
  return(
    <div>
      
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
