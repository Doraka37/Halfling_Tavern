/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { Provider } from 'react-redux';
import {store, persistor} from './Store/configureStore';
import {
  SafeAreaView,
  Text,
} from 'react-native';


const App: () => Node = () => {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>
          Hello
        </Text>
      </SafeAreaView>
    </Provider>
  );
};


export default App;
