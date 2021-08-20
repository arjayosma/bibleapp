import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Modal from 'react-native-modal';

import books from '../../data/bible-books.json';
import BookListItem from '../book-list-item';

export default ({onSelect}) => {
  const {height} = useWindowDimensions();
  const [selected, setSelected] = useState('Select a Book');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(null);
  const [showModal, setModalState] = useState(false);

  const handleOnScroll = event => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };

  const handleSelect = chapter => {
    const {name} = books[selectedIndex];
    const selection = `${name} ${chapter}`;
    onSelect(selection);
    setSelected(selection);
    toggleModal();
  };

  const renderBook = ({item: book, index}) => {
    return (
      <BookListItem
        key={index}
        book={book.name}
        chapters={book.chapters}
        onSelect={handleSelect}
        selected={selectedIndex === index}
        toggleChapters={() => setSelectedIndex(index)}
      />
    );
  };

  const toggleModal = () => {
    setModalState(!showModal);
  };

  return (
    <>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.container}>
          <Text style={styles.text}>{selected}</Text>
        </View>
      </TouchableOpacity>
      <Modal
        isVisible={showModal}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        propagateSwipe={true}
        scrollOffset={scrollOffset}
        scrollOffsetMax={100}
        style={styles.modal}>
        <View style={[styles.scrollableModal, {height: height * 0.8}]}>
          <Text style={styles.modalTitle}>
            Select a Book and a Chapter to read
          </Text>
          <FlatList
            data={books}
            onScroll={handleOnScroll}
            renderItem={renderBook}
            scrollEventThrottle={16}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.15,
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollableModal: {
    backgroundColor: '#fff',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 20,
  },
  text: {
    backgroundColor: '#ddd',
    borderRadius: 50,
    color: '#666',
    fontSize: 12,
    letterSpacing: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
