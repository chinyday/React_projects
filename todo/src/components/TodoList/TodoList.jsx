import React from "react";
import { useState } from "react";

function TodoList() {

	const [list, setList] = useState([
		{id:1, text:"장보기", status:"active"},
		{id:2, text:"공부하기", status:"active"},
	]);

  return (
		<div>
		 	<ul>
				{list.map((item, index)=>{
					return <li key={index}>{item.text}</li>;
				})}
			</ul>
		</div>
  );
}
export default TodoList;
