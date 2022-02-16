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
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SquircleView } from 'react-native-figma-squircle'
import SheetResume from './src/Components/SheetResume';

const App: () => Node = () => {

  return (
    <Provider store={store}>
      <View style={{
        backgroundColor: "rgb(99,11,11)",
        flex: 15
        }}>
        <Text
            style={{marginTop: 10, fontSize: 60, textAlign: "center", fontFamily: "Ace_Records"}}> 
            Characters
          </Text>
      </View>
      <SafeAreaView style={{
        flexDirection: "column",
        alignItems: "center",
        flex: 85,
        }}>
        <SheetResume name={"Doraka"} lvl={6} class={"Bard"} race={"Humain"}/>
        <SheetResume name={"Islandzi"} lvl={6} class={"Rodeur"} race={"Elf"}/>
        <TouchableOpacity
          style={{top:360, left: 140}}
        >
          <Image
            style={styles.tinyLogo}
            source={require("./Ressources/floating.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  MidleText: {
    fontSize: 16,
    color: "black",
    fontFamily: "Ace_Records"
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
});

export default App;
