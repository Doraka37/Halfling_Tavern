import React from 'react';
import {
    Text,
    View,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
  } from 'react-native';
import Box from './BoxComponnent';
import ChoiceBox from './ChoiceBoxComponnent';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
var Image_array = [require("../../Ressources/Half-Elf.png"), require("../../Ressources/human.jpg"), require("../../Ressources/dwarf.jpg"), require("../../Ressources/gnome.png")]

function Half_Elf({id, race, navigation}) {
    return (
        <View style={{
            flex: 100,
            backgroundColor: "#032033",
            alignItems: "center", justifyContent: "center",
            }}>
            <ScrollView style={{
                backgroundColor: "#032033",
                flex: 80,
                }}
                contentContainerStyle={{alignItems: "center", justifyContent: "center",}}>
                <Image
                    style={{width: '100%', resizeMode: "contain"}}
                    source={Image_array[id]}
                />
                <Text style={{fontSize: 60, textAlign: "center", fontFamily: "dungeon", marginTop: 20}}>
                    {race}
                </Text>
                <View style={{
                    width: "100%",
                    alignItems: "center", justifyContent: "center", marginBottom: 20
                }}>
                    <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center"}}>
                        Half-elves combine what some say are the best qualities of their elf and human parents.
                    </Text>
                </View>
                <Box title={"Ability Score Increase"} desc={"Your Charisma score increases by 2, and two other ability scores of your choice increase by 1."}/>
                <Box title={"Darkvision"} desc={"Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."}/>
                <Box title={"Fey Ancestry"} desc={"You have advantage on saving throws against being charmed, and magic can’t put you to sleep."}/>
                <Box title={"Skill Versatility"} desc={"You gain proficiency in two skills of your choice."}/>
                <ChoiceBox title={"Languages"} desc={"You can speak, read, and write Common, Elvish, and one extra language of your choice."}/>
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

export function RaceComponnent({id, race, navigation}) {
    switch(id){
        case 0:
            return <Half_Elf race={race} id={id} navigation={navigation}/>
        case 1:
            return <View style={{
                backgroundColor: "#330606",
                width: "100%",
            }}>
                <Text style={{fontSize: 60, fontFamily: "dungeon", marginTop: -10, textAlign: "center"}}>
                    Choisir cette race2
                </Text>
            </View>
        default:
            return <View style={{
                backgroundColor: "#330606",
                width: "100%",
            }}>
                <Text style={{fontSize: 60, fontFamily: "dungeon", marginTop: -10, textAlign: "center"}}>
                    Choisir cette race3
                </Text>
            </View>
    }
}

//const mapStateToProps = (state) => state;
//export default connect(mapStateToProps)(ButtonIcon);
export default RaceComponnent;