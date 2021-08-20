import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

export default ({highlighted, text, verse}) => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
      <Text>
        <View style={styles.verseNumber}>
          <Text style={styles.number}>{verse}</Text>
        </View>
        <Text style={[styles.text, highlighted && styles.highlighted]}>
          {'\t'}
          {text}
        </Text>
      </Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  highlighted: {
    backgroundColor: '#f1c40f',
  },
  number: {
    color: '#666',
    fontSize: 14,
  },
  text: {
    color: '#333',
    fontSize: 18,
    textAlign: 'justify',
  },
  verseNumber: {
    marginRight: 5,
  },
});
