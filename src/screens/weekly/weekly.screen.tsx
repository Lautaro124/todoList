import React from 'react';
import ScreenGenerator from '@common/components/screenGenerator/screenGenerator.components';
import { TaskType } from '@common/enum/taskType.enum';

const WeelyScreen = () => {
  return <ScreenGenerator taskType={TaskType.weekly} />;
};

export default WeelyScreen;
