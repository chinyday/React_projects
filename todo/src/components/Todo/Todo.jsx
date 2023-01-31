import React from "react";
import {FaTrashAlt} from 'react-icons/fa';

function Todo({todo, onUpdate, onDelete}) {

  const {status, text} = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status});
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li>
      <input type="checkbox" id="checkbox" onChange={handleChange} checked={status === 'completed'} />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}><FaTrashAlt /></button>
    </li>
  );
}
export default Todo;
