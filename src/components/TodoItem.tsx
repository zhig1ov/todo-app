import React, { FC } from "react";
import { ITodo } from "../types/data"
import styles from "../styles/index.module.scss"

interface ITodoItem extends ITodo {
	removeTodo: (id: number) => void;
	completeTodo: (id: number) => void;
 }

const TodoItem: FC<ITodoItem> = (props) => {
	const { id, title, complete, removeTodo, completeTodo } = props;

	return <div className={styles.task}>
		<div>{title}</div>
		<div>
			<input type="checkbox" checked={complete} onChange={() => completeTodo(id)}></input>
		<button onClick={() => removeTodo(id)}>X</button>
		</div>
	</div>
}

export default TodoItem;