export interface AllTasks {
  done: Task[];
  toDo: Task[];
}

export interface Task {
  title: string;
  isDone: boolean;
}
