import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity
  } from 'react-native';

import RaceBottom from '../RaceBottom';
import Eladrin from './SubRaces/Eladrin';
import Half_Elf from './Half_Elf';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

var Image_array = [require("../../../Ressources/Half-Elf.png"), require("../../../Ressources/Half-Elf.png"), require("../../../Ressources/dwarf.jpg"), require("../../../Ressources/gnome.png")]
var array = [{id: 0, race: "Half-Elf"}, {id: 1, race: "Elf"}]

function Elf({id, race, navigation}) {

    const [sub, setSub] = useState(0);

    function SubRaceComponnent({id, race, navigation}) {
        switch(sub){
            case 0:
                return <Eladrin race={race} id={id} navigation={navigation}/>
            case 1:
                return <Half_Elf race={race} id={id} navigation={navigation}/>
            default:
                return <View style={{
                    backgroundColor: "#330606",
                    width: "100%",
                }}>
                </View>
        }
    }

    function SubRaceSelec({race, color, id}) {
        return (
            <View style={{
              width: 120, height: 50, backgroundColor: "#090F2E", justifyContent: 'center',
              alignItems: 'center', flexDirection: "row"
            }}>
                <TouchableOpacity
                    onPress={() => setSub(id)}
                >
                    <Text style={{fontSize: 40, fontFamily: "dungeon", textAlign: "center"}}>
                        {race}
                    </Text>
                </TouchableOpacity>
            </View>
          );
    }

    return (
        <SafeAreaView style={{
            flex: 100,
            backgroundColor: "#032033",
            alignItems: "center", justifyContent: "center",
            }}>
            <ScrollView style={{
                backgroundColor: "#032033",
                flex: 80,
                }}
                nestedScrollEnabled={true}
                contentContainerStyle={{alignItems: "center", justifyContent: "center",}}>
                <Text style={{fontSize: 60, textAlign: "center", fontFamily: "dungeon", marginTop: 20}}>
                    {race}
                </Text>
                <View style={{
                    width: "100%",
                    alignItems: "center", justifyContent: "center", marginBottom: 20
                }}>
                    <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center"}}>
                    Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.
                    </Text>
                </View>
                <Text style={{fontSize: 50, textAlign: "center", fontFamily: "dungeon", marginTop: 20}}>
                    This class comport several subraces
                </Text>
                <SafeAreaView style={{flex: 1000, flexDirection: "row"}}>
                    <SubRaceSelec race={"Eladrin"} id={0}/>
                    <SubRaceSelec race={"High-Elf"} id={1}/>
                    <SubRaceSelec race={"Wood-Elf"} id={2}/>
                </SafeAreaView>
                <SubRaceComponnent race={race} id={sub} navigation={navigation}/>
            </ScrollView>
            <RaceBottom race={race} id={id} navigation={navigation}/>
        </SafeAreaView>
    );
}

export default Elf;