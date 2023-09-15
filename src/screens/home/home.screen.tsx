import Header from '@common/components/header/header.components';
import ListItem from '@common/components/listItem/listItem.components';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from './home.style';
import { ScrollView } from 'react-native-gesture-handler';
import { Task } from '@common/interface/task.interface';
import { filterTask } from './utils/filterTask.utils';

function HomeScreen() {
  const [isToDo, setIsToDo] = useState(true);
  const [tasks, setTask] = useState<Task[]>([
    {
      title: 'Barrer',
      isDone: false,
    },
  ]);

  const changeState = (index: number, task: Task) => {
    const newTasks = tasks.map((currentTask, currentIndex) => {
      if (currentIndex === index) {
        return {
          title: task.title,
          isDone: !task.isDone,
        };
      }
      return currentTask;
    });

    setTask(newTasks);
  };

  return (
    <View style={styles.container}>
      <Header isToDo={isToDo} setIsToDo={setIsToDo} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Diary</Text>
        <ScrollView style={styles.scrollViewContainer}>
          {filterTask(isToDo, tasks).map((task, index) => (
            <ListItem
              key={index}
              title={task.title}
              isDone={task.isDone}
              changeState={() => {
                changeState(index, task);
              }}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;
