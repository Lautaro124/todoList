import { Task } from '@common/interface/task.interface';

export const filterTask = (toDoList: boolean, tasks: Task[]) =>
  tasks.filter(task => task.isDone === !toDoList);
