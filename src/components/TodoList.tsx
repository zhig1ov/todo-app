import React, { FC, useState } from "react";
import TodoItem  from "./TodoItem";
import styles from "../styles/index.module.scss";
import { useStore } from "../helpers/use-store";
import { useObserver } from "mobx-react-lite";

const TodoList: FC = () => {
	const todoList = useStore();
	const [ filterBtn, setFilterBtn ] = useState('all');

	return useObserver(() => (
		<div>
			<div className={styles.filter}>
				<button className={filterBtn === 'all' ? styles.active : ''} onClick={() => setFilterBtn("all")}>Все</button>
				<button className={filterBtn === 'open' ? styles.active : ''} onClick={() => setFilterBtn("open")}>Невыполненные</button>
				<button className={filterBtn === 'close' ? styles.active : ''} onClick={() => setFilterBtn("close")}>Выполненные</button>
			</div>
			<div className={styles.tasksWrapper}>
				{filterBtn === 'open' ?
					todoList.openTodos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
				: 
				filterBtn === "close" ?
					todoList.finishedTodos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
				:
					todoList.todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
				}
			</div>
		</div>)
	)
};

export default TodoList;
