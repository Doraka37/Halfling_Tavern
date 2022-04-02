import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
  } from 'react-native';

var Image_array = [require("../../Ressources/Half-Elf.png"), require("../../Ressources/human.jpg"), require("../../Ressources/dwarf.jpg"), require("../../Ressources/gnome.png")]

function RaceBottom({id, race, navigation}) {
    return (
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
                    navigation.navigate('Class', {
                        race: race,
                        raceId: id
                      })
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
    );
}

export default RaceBottom;