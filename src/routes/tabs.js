import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Books from '../screens/Books';
import Favorites from '../screens/Favorites';

const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();

const tabScreens = [
  {
    component: Books,
    initialParams: {
      scrollTo: 0,
    },
    name: 'BooksScreen',
    options: {
      tabBarIcon: ({color, focused}) => (
        <Ionicons
          color={color}
          name={focused ? 'bookmarks' : 'bookmarks-outline'}
          size={24}
        />
      ),
      tabBarLabel: 'Books',
    },
  },
  {
    component: Favorites,
    initialParams: {
      scrollTo: 0,
    },
    name: 'FavoritesScreen',
    options: {
      tabBarIcon: ({color, focused}) => (
        <Ionicons
          color={color}
          name={focused ? 'heart' : 'heart-outline'}
          size={24}
        />
      ),
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
        initialParams={screen.initialParams}
        options={screen.options}
      />
    ));

  return (
    <TabNavigator
      initialRouteName="BooksScreen"
      screenOptions={{
        headerShown: false,
      }}>
      {renderTabs()}
    </TabNavigator>
  );
};
