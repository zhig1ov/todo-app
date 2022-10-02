import React, { FC } from "react";
import TodoList from "./components/TodoList";
import styles from "./styles/index.module.scss";
import TodoNew from "./components/TodoNew";
import { observer } from "mobx-react-lite";

const App: FC = () => {
  return (
		<div className={styles.container}>
			<p className={styles.header}>ToDo List</p>
				<TodoNew />
				<TodoList />
		</div>
	)
}

export default observer(App);
