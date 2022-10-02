export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

export interface ITodoList {
  items: ITodo[];
  removeTodo: (id: number) => void;
	completeTodo: (id: number) => void;
}