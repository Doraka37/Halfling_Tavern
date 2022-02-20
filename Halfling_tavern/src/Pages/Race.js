import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Box from '../Components/BoxComponnent';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
var array = [{id: 0, race: "Elf"}, {id: 1, race: "Human"}, {id: 2, race: "Dwarf"}, {id: 3, race: "Gnome"}]
var Image_array = [require("../../Ressources/elves.jpg"), require("../../Ressources/human.jpg"), require("../../Ressources/dwarf.jpg"), require("../../Ressources/gnome.png")]

export function RaceComponnent({id, race, navigation}) {
    return (
        <View style={{
            flex: 100,
            backgroundColor: "#032033",
            }}>
            <ScrollView style={{
                backgroundColor: "#032033",
                flex: 80
                }}>
                <Image
                    style={{width: '100%', resizeMode: "stretch"}}
                    source={Image_array[id]}
                />
                <Text style={{fontSize: 60, textAlign: "center", fontFamily: "dungeon", marginTop: 20}}>
                    {race}
                </Text>
                <Box title={"Agilite elfique"} desc={"Bonus 2 en dexterte"}/>
                <Box title={"Oreille d'elf"} desc={"Vous avez des rgandes oreille et puvez entendre des son loin"}/>
            </ScrollView>
            <View style={{
                flex: 0.1,
                backgroundColor: "#032033",
                alignItems: "center", justifyContent: "center",
                marginBottom: 10,
                width: "100%",
            }}>
                <TouchableOpacity style={{
                        backgroundColor: "#330606",
                        width: "80%",
                    }}
                    onPress={() =>
                        navigation.navigate('Class')
                }>
                    <View style={{
                        backgroundColor: "#330606",
                        width: "100%",
                    }}>
                        <Text style={{fontSize: 60, fontFamily: "dungeon", marginTop: -10, textAlign: "center"}}>
                            Choisir cette race
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export function Race(props) {
    return (
      <View style={{
        flex: 100
    }}>
        <Carousel
            style={{flex: 100}}
            data={array}
            keyExtractor={(item) => item.id}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            renderItem={({ item }) => (
                <RaceComponnent race={item.race} id={item.id} navigation={props.navigation}/>
            )}
        />
      </View>
    );
  }

export default Race;