import React from 'react';
import ScreenGenerator from '@common/components/screenGenerator/screenGenerator.components';
import { TaskType } from '@common/enum/taskType.enum';

const MounthlyScreen = () => {
  return <ScreenGenerator taskType={TaskType.monthly} />;
};

export default MounthlyScreen;
