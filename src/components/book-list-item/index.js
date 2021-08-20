import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default ({book, chapters}) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.container}>
        <Text style={styles.bookTitle}>{book}</Text>
        <Text style={styles.bookChapters}>{chapters} Chapter(s)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookChapters: {
    color: '#666',
    fontSize: 12,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  listItem: {
    marginBottom: 5,
  },
});
