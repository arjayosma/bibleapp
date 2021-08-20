import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import BookSelector from '../components/book-selector';
import HeaderTitle from '../components/header-title';
import VerseItem from '../components/verse-item';

import {fetchBibleChapter} from '../redux/actions/books';
import {toggleFavoriteVerse} from '../redux/actions/favorites';

export default () => {
  const dispatch = useDispatch();
  const {selectedChapter, verses} = useSelector(state => state.booksReducer);
  const {favorites} = useSelector(state => state.favoritesReducer);
  const [loading, setLoading] = useState(false);
  const [highlighted, setHighlighted] = useState([]);

  const handleSelect = selection => {
    setLoading(true);
    dispatch(fetchBibleChapter(selection)).then(() => setLoading(false));
  };

  const renderVerse = ({item: {text, verse}, index}) => {
    return (
      <VerseItem
        key={index}
        highlighted={highlighted.includes(index)}
        onHighlight={() => toggleHighlight(verse)}
        text={text}
        verse={verse}
      />
    );
  };

  const toggleHighlight = verse => {
    const count = favorites.length;
    const key = `${selectedChapter}:${verse}`;
    const newList = favorites.filter(({id}) => id !== key);

    if (newList.length === count) {
      const verseDetails = {
        chapter: selectedChapter,
        id: key,
        index: verse - 1,
        text: verses[verse - 1].text,
        verse,
      };
      newList.push(verseDetails);
    }

    dispatch(toggleFavoriteVerse(newList));
  };

  useEffect(() => {
    if (favorites) {
      const versesToHighlight = [];
      favorites.forEach(({chapter, index}) => {
        if (chapter === selectedChapter) {
          versesToHighlight.push(index);
        }
      });
      setHighlighted([...versesToHighlight]);
    }
  }, [favorites, selectedChapter, setHighlighted]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.header}>
        <HeaderTitle title="Bible App" />
        <BookSelector onSelect={handleSelect} />
      </View>
      <View
        style={[
          styles.container,
          selectedChapter === null && styles.emptyContainer,
        ]}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : selectedChapter ? (
          <View>
            <Text style={styles.title}>{selectedChapter}</Text>
            <FlatList
              data={verses}
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
