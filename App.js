/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Todo from './src/components/Todo';
import store from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  store.subscribe(() => console.log('storeState', store.getState()));
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <Todo />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
