import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity
  } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
var array = [{id: 1, race: "Elf"}, {id: 2, race: "Human"}, {id: 3, race: "Dwarf"}, {id: 4, race: "Gnome"}]

export function Box({title, desc}) {
    return (
        <View style={{width: "100%", alignItems: "center", justifyContent: "center", marginTop: 20}}>
            <View style={{
                width: "80%",
                backgroundColor: "grey",
                alignItems: "center", justifyContent: "center",
            }}>
                <Text style={{fontSize: 40, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center"}}>
                    {title}
                </Text>
            </View>
            <View style={{
                width: "80%",
                backgroundColor: "white",
                alignItems: "center", justifyContent: "center",
            }}>
                <Text style={{fontSize: 25, textAlign: "center", fontFamily: "Libertine", color: "black", marginTop: 20, textAlign: "center"}}>
                    {desc}
                </Text>
            </View>
        </View>
    );
}

export function RaceComponnent({id, race}) {
    return (
        <ScrollView style={{
            backgroundColor: "#032033"
            }}>
            <Image
                style={{width: '100%', resizeMode: "stretch"}}
                source={require("../../Ressources/elves.jpg")}
            />
            <Text style={{fontSize: 60, textAlign: "center", fontFamily: "dungeon", marginTop: 20}}>
                {race}
            </Text>
            <Box title={"Agilite elfique"} desc={"Bonus 2 en dexterte"}/>
            <Box title={"Oreille d'elf"} desc={"Vous avez des rgandes oreille et puvez entendre des son loin"}/>
        </ScrollView>
    );
}

export function Race(props) {
    return (
      <View>
        <Carousel
            style={{width: '100%'}}
            data={array}
            keyExtractor={(item) => item.id}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            renderItem={({ item }) => (
                <RaceComponnent race={item.race}/>
            )}
        />
      </View>
    );
  }

export default Race;