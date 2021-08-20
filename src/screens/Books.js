import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import BookSelector from '../components/book-selector';
import HeaderTitle from '../components/header-title';

export default () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.header}>
        <HeaderTitle title="Bible App" />
        <BookSelector />
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <Text>asdasd</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Safe area view styles
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
  },
  // Screen container styles
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  // App header styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
