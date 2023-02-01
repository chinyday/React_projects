import React, { useState, useEffect } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css"

function TodoList({filter}) {

	const [list, setList] = useState(readLocalStorage);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

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

  function readLocalStorage() {
    const todos = localStorage.getItem('list');
    return todos ? JSON.parse(todos) : [];
  }
  

  return (
		<section className={styles.container}>
		 	<ul className={styles.list}>
				{filtered.map((item) => (
					<Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
				))}
			</ul>
			<AddTodo onAdd={handleAdd} />
		</section>
  );
}
export default TodoList;