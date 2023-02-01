import React from "react";
import {FaTrashAlt} from 'react-icons/fa';
import stlyes from './Todo.module.css';

function Todo({todo, onUpdate, onDelete}) {

  const {status, text} = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status});
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className={stlyes.todo}>
      <input className={stlyes.checkbox} type="checkbox" id="checkbox" onChange={handleChange} checked={status === 'completed'} />
      <label className={stlyes.text} htmlFor="checkbox">{text}</label>
      <span className={stlyes.icon}><button className={stlyes.button} onClick={handleDelete}><FaTrashAlt /></button></span>
    </li>
  );
}
export default Todo;
