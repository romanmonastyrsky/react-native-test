import React, { useEffect } from 'react';
import { 
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
 } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { clearDetailsInfo } from '../../stores/data/dataSlice';

const DetailsScreen = () => {
  const dispatch = useDispatch()
  const detailsInfo = useSelector((state) => state.data.detailsInfo)
  useEffect(() => {
    return () => {
      dispatch(clearDetailsInfo());
    }
  }, [])

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.detailInfo}>
        <Image 
          style={styles.avatar}
          source={{ uri: detailsInfo.actor.avatar_url }}
        />
        <Text style={styles.author}>
          {detailsInfo.actor.login}
        </Text>
        <View>
          <View style={styles.informationRow}>
            <Text style={styles.text}>ID:</Text>
            <Text style={[styles.text, styles.textRight]}>{detailsInfo.id}</Text>
          </View>
          <View style={styles.informationRow}>
            <Text style={styles.text}>Repository:</Text>
            <Text style={[styles.text, styles.textRight]}>{detailsInfo.repo.name}</Text>
          </View>
          <View style={styles.informationRow}>
            <Text style={styles.text}>Type:</Text>
            <Text style={[styles.text, styles.textRight]}>{detailsInfo.type}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'black',
    padding: 10,
  },
  detailInfo: {
  },
  avatar: {
    alignSelf: 'center',
    width: 150, 
    height: 150,
    borderRadius: 100,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fdd835',
    flex: 1,
  },
  textRight: {
    textAlign: 'right',
  },
  informationRow: {
    flex: 1,
    flexDirection: 'row',
  },
  author: {
    fontSize: 22,
    fontWeight: '500',
    color: '#fdd835',
    flex: 1,
    marginVertical: 30,
    textAlign: 'center',
  }
});

export default DetailsScreen;