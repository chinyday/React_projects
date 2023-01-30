import React from "react";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

function AddTodo({onAdd}) {

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if(input.trim().length === 0){
      return;
    }
    onAdd({id:uuidv4(), text:input, status: "active"});
    setInput('');
  }

  return (
		<form onSubmit={handleSubmit}>
			<input onChange={handleChange} value={input} type="text" placeholder="add to do"/>
			<button>add</button>
		</form>
  );
}
export default AddTodo;
