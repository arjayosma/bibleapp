import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigation from './tabs';

export default () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};
