import React from "react";
import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

function TodoList() {

	const [list, setList] = useState([
		{id:1, text:"장보기", status:"active"},
		{id:2, text:"공부하기", status:"active"},
	]);

	// 새로운 할일을 받아서 setList에 추가
	const handleAdd = (todo) => {
		setList([...list, todo])
	}
	// 상태를 업데이트 
	const handleUpdate = (item)  => {
		setList(list.map(todo => todo.id === item.id ? item : todo));
	}
	// 삭제
	const handleDelete = (item)  => {
		setList(list.filter(todo => todo.id !== item.id));
	}

  return (
		<div>
		 	<ul>
				{list.map((item) => (
					<Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
				))}
			</ul>
			<AddTodo onAdd={handleAdd} />
		</div>
  );
}
export default TodoList;
