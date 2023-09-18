import React from 'react';
import { TaskType } from '@common/enum/taskType.enum';
import ScreenGenerator from '@common/components/screenGenerator/screenGenerator.components';

function HomeScreen() {
  return <ScreenGenerator taskType={TaskType.diary} />;
}

export default HomeScreen;
