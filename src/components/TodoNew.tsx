import React, { useState, useRef, useEffect } from 'react';
import { useStore } from "../helpers/use-store";
import { onEnterPress } from "../helpers/use-enter";
import styles from "../styles/index.module.scss";

const TodoNew = () => {
  const [ inputValue, setInputValue ] = useState<string>('');
  const todoList = useStore();

	useEffect(() => {
    if(inputRef.current) inputRef.current.focus();
  }, []);

  const addTodo = () => {
    if(inputValue) {
      todoList.addTodo(inputValue);
      setInputValue('');
    }
  };

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setInputValue(e.target.value);
  };

	const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.head}>
      <input 
        type="text" 
        value={inputValue} 
        ref={inputRef} 
        onKeyDown={onEnterPress(addTodo)} 
        onChange={handleChange} 
        placeholder="Что нужно сделать? "
        className={styles.input}
      />
      <button onClick={addTodo}>Добавить</button>
    </div>
  )
};

export default TodoNew;
