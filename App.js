import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,TouchableNativeFeedback} from 'react-native';
import ContactNavigator from './navigator/newContact';
import {createStore,combineReducers} from 'redux';
import searchReducer from './store/reducers/addContact';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
  search : searchReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (<Provider store={store}><ContactNavigator/></Provider>);
}

const styles = StyleSheet.create({
  container: {
  },
});
