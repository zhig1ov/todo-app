import { action, computed, makeObservable, observable } from "mobx";
import TodoItem from "./todo-item";

export class TodoList {
  @observable.shallow todos: TodoItem[] = [];

  constructor(todos: string[]) {
    makeObservable(this);
    todos.forEach(this.addTodo);
  }

  @action
  addTodo(text: string) {
    this.todos.push(new TodoItem(text));
  }

  @action
  removeTodo(todo: TodoItem) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  @computed
  get finishedTodos(): TodoItem[] {
    return this.todos.filter(todo => todo.complete);
  }

  @computed
  get openTodos(): TodoItem[] {
    return this.todos.filter(todo => !todo.complete);
  }
}
