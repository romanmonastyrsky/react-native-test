import React, { useCallback, useState, useRef } from 'react';
import {
  ScrollView,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getList, setDetailsInfo } from '../../stores/data/dataSlice';
import { USER_UPDATE_TIME, UPDATE_TIME } from '../../constants/constants';
import ListElements from '../../components/ListElements';
import ROUTER from '../../constants/router';



const ListScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.data.list)
  const isUpdating = useSelector((state) => state.data.isLoadingList)

  const [isUserCanUpdate, setIsUserCanUpdate] = useState(false);
  const timer = useRef(null);

  const startTimer = () => {
    clearTimeout(timer.current);
    const newTimer = setTimeout(() => {
      setIsUserCanUpdate(true);
    }, USER_UPDATE_TIME);
    timer.current = newTimer;
  }

  const updateList = () => {
    setIsUserCanUpdate(false);
    dispatch(getList());
    startTimer();
  }

  useFocusEffect(
    useCallback(() => {
      updateList();
      const interval = setInterval(() => {
        updateList();
      }, UPDATE_TIME);

      return () => {
        clearInterval(interval);
        clearTimeout(timer.current);
      };
    }, [])
  ) 

  const handleRefresh = useCallback(() => updateList(), []);

  const handlePress = useCallback((id) => {
    dispatch(setDetailsInfo(id));
    navigation.navigate(ROUTER.details);
  }, [navigation]);

  return (
    <ScrollView
      style={styles.screen}
      refreshControl={
        <RefreshControl
          enabled={isUserCanUpdate}
          refreshing={isUpdating}
          onRefresh={handleRefresh}
        />
      }
      >
      {list.map(el => (
        <ListElements
          key={el.id}
          id={el.id}
          avatar={el.actor.avatar_url}
          name={el.repo.name}
          login={el.actor.login}
          onPress={handlePress}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'black',
    padding: 10,
  },
});

export default ListScreen;
