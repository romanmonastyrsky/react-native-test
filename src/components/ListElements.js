import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const ListElements = (props) => {
  const {
    id,
    avatar,
    login,
    name,
    onPress,
  } = props;
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => onPress(id)}>
      <Image 
        source={{uri: avatar}}
        style={styles.avatar}
      />
      <View style={styles.information}>
        <Text
          style={styles.author}
          ellipsizeMode="clip"
          numberOfLines={1}
        >
          {login}
        </Text>
        <Text
          style={styles.title}
          numberOfLines={1}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    height: 70,
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#373737',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 50, 
    height: 50,
    borderRadius: 100,
    resizeMode: 'center',
  },
  information: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fdd835',
    flex: 1,
  },
  author: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fdd835',
    flex: 1,
  }
});

export default ListElements;
