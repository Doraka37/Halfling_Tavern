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
import Box from '../Components/BoxComponnent';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
var array = [{id: 0, clas: "Guerrier"}, {id: 1, clas: "Sorcier"}, {id: 2, clas: "Barde"}, {id: 3, clas: "Rodeur"}]
var Image_array = [require("../../Ressources/guerrier.jpg"), require("../../Ressources/sorcier.jpg"), require("../../Ressources/dwarf.jpg"), require("../../Ressources/gnome.png")]


export function ClassComponnent({id, clas}) {
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
                    source={Image_array[id]}
                />
                <Text style={{fontSize: 60, textAlign: "center", fontFamily: "dungeon", marginTop: 20}}>
                    {clas}
                </Text>
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

export function Class(props) {
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
                <ClassComponnent clas={item.clas} id={item.id}/>
            )}
        />
      </View>
    );
  }

export default Class;