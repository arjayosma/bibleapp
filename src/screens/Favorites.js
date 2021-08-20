import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import FavoriteItem from '../components/favorite-item';
import HeaderTitle from '../components/header-title';
import {setSelectedChapter} from '../redux/actions/books';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const {favorites} = useSelector(state => state.favoritesReducer);

  const onPress = (selection, index) => {
    dispatch(setSelectedChapter(selection));
    navigation.navigate('BooksScreen', {scrollTo: index});
  };

  const renderFavorites = ({item, index}) => {
    return (
      <FavoriteItem
        key={index}
        onPress={() => onPress(item.chapter, item.index)}
        title={item.id}
        verse={item.text}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.header}>
        <HeaderTitle title="Favorites" />
      </View>
      <View
        style={[
          styles.container,
          favorites.length === 0 && styles.emptyContainer,
        ]}>
        {favorites.length ? (
          <FlatList
            data={favorites}
            keyExtractor={({id}) => `${id}`}
            renderItem={renderFavorites}
            style={styles.verseContainer}
          />
        ) : (
          <Text style={styles.mutedText}>
            Highlight a verse on the specific bible chapter
          </Text>
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
  mutedText: {
    color: '#999',
  },
});
