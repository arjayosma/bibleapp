import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import Navigation from './src/routes';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default App;
