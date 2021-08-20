import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Books from '../screens/Books';
import Favorites from '../screens/Favorites';

const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();

const tabScreens = [
  {
    component: Books,
    name: 'BooksScreen',
    options: {
      tabBarLabel: 'Books',
    },
  },
  {
    component: Favorites,
    name: 'FavoritesScreen',
    options: {
      tabBarLabel: 'Favorites',
    },
  },
];

export default () => {
  const renderTabs = () =>
    tabScreens.map((screen, index) => (
      <TabScreen
        key={index}
        component={screen.component}
        name={screen.name}
        options={screen.options}
      />
    ));

  return (
    <TabNavigator initialRouteName="ActivityListScreen">
      {renderTabs()}
    </TabNavigator>
  );
};
