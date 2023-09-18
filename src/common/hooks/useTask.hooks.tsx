import { TaskType } from '@common/enum/taskType.enum';
import { Task } from '@common/interface/task.interface';
import { getData, saveData } from '@common/utils/dataDeviceManager.utils';
import { filterTask } from '@common/utils/filterTask.utils';
import { useEffect, useState } from 'react';

export const useTask = (taskType: TaskType) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isToDo, setIsToDo] = useState<boolean>(true);

  const initTask = async (typeTask: TaskType) => {
    const saveTasks = await getData(typeTask);
    if (saveTasks) {
      setTasks(saveTasks);
    }
  };

  useEffect(() => {
    console.log('Task');
    initTask(taskType);
  }, [taskType]);

  const addNewTask = (task: Task) => {
    setTasks(prevTasks => prevTasks.concat(task));
    saveData(taskType, tasks);
  };

  const changeTaskState = (index: number, task: Task) => {
    const newTasks = tasks.map((currentTask, currentIndex) => {
      if (currentIndex === index) {
        return {
          title: task.title,
          isDone: !task.isDone,
        };
      }
      return currentTask;
    });

    setTasks(newTasks);
  };

  return {
    tasks: filterTask(isToDo, tasks),
    isToDo,
    addNewTask,
    changeTaskState,
    setIsToDo,
  };
};
