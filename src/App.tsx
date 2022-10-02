import React, {FC, useState,useRef, useEffect} from "react";
import { ITodo } from "./types/data";
import TodoList from "./components/TodoList";
import styles from "./styles/index.module.scss"



export const App: FC = () => {
    const [ value, setValue ] = useState('');
    const [ todos, setTodos ] = useState<ITodo[]>([]);
		const [ filtered, setFiltered ] = useState(todos);
		const [ filterBtn, setFilterBtn ] = useState('all')

    const addTodo = () => {
			if (value) {
				setTodos([...todos, {
					id: Date.now(),
					title: value,
					complete: false
			}]);
			}
      setValue('');
    };

		const removeTodo = (id: number): void=> {
			setTodos(todos.filter((todo: ITodo) => todo.id !== id));
		};

		function sortByIsComplete(newTodosArray: ITodo[]) {
			const newTodosArraySorted = newTodosArray.sort((a, b) => {
				if (a.complete === false) return -1;
				if (a.complete === true) return 1;
				return 0;
			});
			return newTodosArraySorted;
		}

		const completeTodo = (id: number): void => {
			const newTodosArray = todos.map((todo: ITodo) => {
				if (todo.id === id) todo.complete = !todo.complete;
				return todo;
			});
			setTodos(sortByIsComplete(newTodosArray));
		};

    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key === 'Enter') addTodo();
    }

    useEffect(() => {
      if(inputRef.current) inputRef.current.focus();
			setFiltered(todos);
    }, [todos]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
			setValue(e.target.value);
    };

		const todoFilter = (status: any, activeBtn: string) => {
			if (status === "all") {
				setFiltered(todos);
			} else {
				let newTodos = [...todos].filter(todo => todo.complete === status);
				setFiltered(newTodos);
			}
			setFilterBtn(activeBtn);
		};


    return <div className={styles.container}>
				<p className={styles.header}>ToDo List</p>
        <div className={styles.head}>
					<input value={value} onChange={handleChange} ref={inputRef} onKeyDown={handleKeyDown} placeholder='Что нужно сделать?' className={styles.input}></input>
					<button onClick={addTodo}>Добавить</button>
        </div>
				<div className={styles.filter}>
						<button className={filterBtn === 'all' ? styles.active : ''} onClick={() => todoFilter("all", "all")}>Все</button>
						<button className={filterBtn === 'open' ? styles.active : ''} onClick={() => todoFilter(false, "open")}>Невыполненные</button>
						<button className={filterBtn === 'close' ? styles.active : ''} onClick={() => todoFilter(true, "close")}>Выполненные</button>
					</div>
        <TodoList items={filtered} removeTodo={removeTodo} completeTodo={completeTodo}/>
    </div>
}