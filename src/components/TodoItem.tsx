import React from "react";
import styles from "../styles/index.module.scss";
import { IProps } from "../types/data";
import { useStore } from "../helpers/use-store";

const TodoItem = ({todo}: IProps) => {
	const todoList = useStore();

	return (
	<div className={styles.task}>
		<div>{todo.title}</div>
		<div>
			<input type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.complete}></input>
			<button className={styles.removeButton} onClick={() => todoList.removeTodo(todo)}>X</button>
		</div>
	</div>
	)
};

export default TodoItem;
