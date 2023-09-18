import Header from '@common/components/header/header.components';
import ListItem from '@common/components/listItem/listItem.components';
import React, { useEffect } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import styles from './home.style';
import { ScrollView } from 'react-native-gesture-handler';
import { useTask } from '@common/hooks/useTask.hooks';
import { TaskType } from '@common/enum/taskType.enum';

function HomeScreen() {
  const taskType = TaskType.diary;
  const { tasks, changeTaskState, addNewTask, isToDo, setIsToDo } =
    useTask(taskType);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header
        taskType={taskType}
        onAddTask={addNewTask}
        setIsToDo={setIsToDo}
        isToDo={isToDo}
      />
      <View style={styles.bodyContainer}>
        <ScrollView style={styles.scrollViewContainer}>
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              title={task.title}
              isDone={task.isDone}
              changeState={() => {
                changeTaskState(index, task);
              }}
            />
          ))}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

export default HomeScreen;
