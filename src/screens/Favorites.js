import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import FavoriteItem from '../components/favorite-item';
import HeaderTitle from '../components/header-title';

export default () => {
  const {favorites} = useSelector(state => state.favoritesReducer);
  const [loading, setLoading] = useState(false);
  console.log(favorites);

  const renderFavorites = ({item, index}) => {
    console.log(item);
    return <FavoriteItem key={index} title={item.id} verse={item.text} />;
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
        {loading ? (
          <ActivityIndicator size="large" />
        ) : favorites.length ? (
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
