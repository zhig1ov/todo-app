import React, { FC, useState } from "react";
import TodoItem  from "./TodoItem";
import { ITodoList } from "../types/data";
import styles from "../styles/index.module.scss"

const TodoList: FC<ITodoList> = (props) => {
	const { items, removeTodo, completeTodo } = props;


	return <div className={styles.tasksWrapper}>


			{props.items.map(todo => 
				<TodoItem key={todo.id}
				completeTodo={completeTodo} 
				removeTodo={removeTodo} 
				{...todo} />)}


	</div>
}

export default TodoList;