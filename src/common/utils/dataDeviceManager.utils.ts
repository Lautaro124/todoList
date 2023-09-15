import { TaskType } from '@common/enum/taskType.enum';
import { Task } from '@common/interface/task.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (type: TaskType, tasks: Task[]) => {
  try {
    const dataParse = JSON.stringify(tasks);
    await AsyncStorage.setItem(type, dataParse);
  } catch (err) {
    console.error(err);
  }
};

export const getData = async (type: TaskType): Promise<Task[] | undefined> => {
  try {
    const data = await AsyncStorage.getItem(type);
    if (data) {
      const tasks: Task[] = JSON.parse(data);
      return tasks;
    }
    return [];
  } catch (err) {
    console.error(err);
  }
};
