import React from "react";
import { useState } from "react";
const ListInput = () =>{
  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="taskInput" placeholder="Enter taskname" />
        <button>Add</button>
      </form>
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
