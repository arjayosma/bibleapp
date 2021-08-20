import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import BookSelector from '../components/book-selector';
import HeaderTitle from '../components/header-title';
import VerseItem from '../components/verse-item';

import {getBibleChapter} from '../utils/api';

export default () => {
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = async selection => {
    setTitle(selection);
    setContent(null);
    setLoading(true);
    const response = await getBibleChapter(selection);
    setContent(response.verses);
    setLoading(false);
  };

  const renderVerse = ({item: {text, verse}, index}) => {
    return <VerseItem key={index} text={text} verse={verse} />;
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.header}>
        <HeaderTitle title="Bible App" />
        <BookSelector onSelect={handleSelect} />
      </View>
      <View
        style={[styles.container, content === null && styles.emptyContainer]}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : content ? (
          <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
              data={content}
              keyExtractor={({verse}) => `${verse}`}
              renderItem={renderVerse}
              style={styles.verseContainer}
            />
          </View>
        ) : (
          <Text style={styles.mutedText}>Select a book and chapter</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Safe area view styles
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 30,
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
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  mutedText: {
    color: '#999',
  },
  verseContainer: {
    paddingHorizontal: 30,
  },
});
