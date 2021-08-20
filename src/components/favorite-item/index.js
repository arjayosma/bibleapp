import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default ({onPress, title, verse}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.verse}>{verse}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 0.5,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  verse: {
    color: '#333',
  },
});
