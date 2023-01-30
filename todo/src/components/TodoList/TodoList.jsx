import React from "react";
import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";

function TodoList() {

	const [list, setList] = useState([
		{id:1, text:"장보기", status:"active"},
		{id:2, text:"공부하기", status:"active"},
	]);

	// 새로운 할일을 받아서 setList에 추가
	const handleAdd = (todo) => {
		setList([...list, todo])
	}

  return (
		<div>
		 	<ul>
				{list.map((item, index)=>{
					return <li key={index}>{item.text}</li>;
				})}
			</ul>
			<AddTodo onAdd={handleAdd} />
		</div>
  );
}
export default TodoList;
