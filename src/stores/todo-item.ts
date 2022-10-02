import { action, makeObservable, observable } from "mobx";

export default class TodoItemStore {
  id = Date.now();

  @observable title: string = '';
  @observable complete: boolean = false;

  constructor(text: string) {
    makeObservable(this);
    this.title = text;
  }

  @action
  toggleIsDone = () => {
    this.complete = !this.complete;
  }
}
