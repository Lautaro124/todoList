import Header from '@common/components/header/header.components';
import ListItem from '@common/components/listItem/listItem.components';
import React from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTask } from '@common/hooks/useTask.hooks';
import { TaskType } from '@common/enum/taskType.enum';
import styles from './screenGenerator.style';

interface ScreenGeneratorProps {
  taskType: TaskType;
}

function ScreenGenerator({ taskType }: ScreenGeneratorProps) {
  const { tasks, changeTaskState, addNewTask, isToDo, setIsToDo } =
    useTask(taskType);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header
        taskType={taskType}
        onAddTask={addNewTask}
        setIsToDo={setIsToDo}
        isToDo={isToDo}
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{taskType}</Text>
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

export default ScreenGenerator;
