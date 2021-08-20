import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default ({title}) => {
  return <Text style={styles.headerTitle}>{title}</Text>;
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: -1.5,
  },
});
