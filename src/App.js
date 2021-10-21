import React from 'react';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './screen/List/ListScreen';
import DetailsScreen from './screen/Details/DetailsScreen'
import ROUTER from './constants/router';
import { StatusBar } from 'react-native';

const App = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <Provider store={store}>
      <NavigationContainer theme={DarkTheme}>
        <StatusBar hidden={false} backgroundColor="black" translucent={true}/>
        <Stack.Navigator initialRouteName={ROUTER.eventList}>
          <Stack.Screen name={ROUTER.eventList} component={ListScreen} />
          <Stack.Screen name={ROUTER.details} component={DetailsScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
   </Provider>
  );
};

export default App;
