import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
  } from 'react-native';

import Box from '../BoxComponnent';
import ChoiceBox from '../ChoiceBoxComponnent';
import { TextComp } from '../../Pages/Class';

var Image_array = [require("../../../Ressources/Half-Elf.png"), require("../../../Ressources/human.jpg"), require("../../../Ressources/dwarf.jpg"), require("../../../Ressources/gnome.png")]

function Barbarian({clas, race, navigation}) {
    return (
        <View style={{
            flex: 100
            }}>
            <ScrollView style={{
                backgroundColor: "#032033",
                flex: 80
                }}>
                <Image
                    style={{width: '100%', resizeMode: "stretch"}}
                    source={require("../../../Ressources/guerrier.jpg")}
                />
                <Text style={{fontSize: 60, textAlign: "center", fontFamily: "dungeon", marginTop: 20}}>
                    {clas}
                </Text>
                <View style={{
                    width: "100%",
                    alignItems: "center", justifyContent: "center", marginBottom: 20
                }}>
                    <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center"}}>
                        A fierce warrior of primitive background who can enter a battle rage
                    </Text>
                </View>
                <TextComp title={"Hit dice:"} desc={"1d20"}/>
                <TextComp title={"Primary Ability:"} desc={"Strength"}/>
                <TextComp title={"Saves:"} desc={"Strength & Constitution"}/>
                { race == "Half-Elf"
                    ? <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", marginTop: 10, marginBottom: 10}}>
                        This class works well with the the race you have chosen
                    </Text>
                    : null
                }
                <Box title={"Rage"} desc={"You have advantage on Strength checks and Strength saving throws."}/>
                <Box title={"Unarmored Defense"} desc={"While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."}/>
            </ScrollView>
            <View style={{
                flex: 0.1
            }}>
                <TouchableOpacity>
                <View style={{
                    backgroundColor: "#330606",
                }}>
                    <Text style={{fontSize: 60, textAlign: "center", fontFamily: "dungeon", marginTop: 10}}>
                        Choisir cette classe
                    </Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Barbarian;