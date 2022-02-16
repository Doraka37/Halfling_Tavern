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
} from 'react-native';
import { SquircleView } from 'react-native-figma-squircle'

const App: () => Node = () => {

  return (
    <Provider store={store}>
      <SafeAreaView style={{
        flexDirection: "column",
        alignItems: "center"
        }}>
        <SquircleView
          style={{ width: "90%", height: 130 }}
          squircleParams={{
            cornerSmoothing: 0.7,
            cornerRadius: 30,
            fillColor: 'pink',
          }}
        >
          <Text
            style={{marginTop: 10, fontSize: 25, textAlign: "center"}}> 
            Doraka 
          </Text>
          <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center"
            }}>
            <Text
              style={styles.MidleText}> 
              lvl: 4 
            </Text>
            <Text
              style={styles.MidleText}> 
              Bard
            </Text>
            <Text
              style={styles.MidleText}> 
              Elf
            </Text>
          </View>
          <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center"
            }}>
              <Image
                style={styles.tinyLogo}
                source={require("./Ressources/amsterdam_city.jpg")}
              />
              <Image
                style={styles.tinyLogo}
                source={require("./Ressources/amsterdam_city.jpg")}
              />
              <Image
                style={styles.tinyLogo}
                source={require("./Ressources/amsterdam_city.jpg")}
              />
          </View>
        </SquircleView>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  MidleText: {
    fontSize: 16,
    color: "black",
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
});

export default App;
