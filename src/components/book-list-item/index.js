import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default ({book, chapters, onSelect, selected, toggleChapters}) => {
  const renderChapterSelection = () => {
    const chapterComponents = [];

    for (let i = 0; i < chapters; i++) {
      const chapter = i + 1;
      const component = (
        <TouchableOpacity
          onPress={() => onSelect(chapter)}
          style={styles.chapter}>
          <Text style={styles.chapterText}>{chapter}</Text>
        </TouchableOpacity>
      );
      chapterComponents.push(component);
    }

    return chapterComponents;
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={toggleChapters}>
        <View style={styles.container}>
          <Text style={styles.bookTitle}>{book}</Text>
          <Text style={styles.bookChapters}>{chapters} Chapter(s)</Text>
        </View>
      </TouchableWithoutFeedback>
      {selected && (
        <View style={styles.chapterContainer}>{renderChapterSelection()}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bookChapters: {
    color: '#666',
    fontSize: 12,
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  chapter: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  chapterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  chapterText: {
    fontSize: 18,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
