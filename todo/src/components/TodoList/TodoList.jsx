import React from "react";
import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

function TodoList({filter}) {

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

	// status에 따른 노출 변경
	const filtered = getFilterdList(list, filter);

	function getFilterdList(list, filter) {
		if(filter === 'all') return list;
		return list.filter((itme) => itme.status === filter);
	}

  return (
		<>
		 	<ul>
				{filtered.map((item) => (
					<Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
				))}
			</ul>
			<AddTodo onAdd={handleAdd} />
		</>
  );
}
export default TodoList;
