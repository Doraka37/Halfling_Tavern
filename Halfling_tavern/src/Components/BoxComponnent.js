import React from 'react';
import {
    Text,
    View,
    Dimensions
  } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
var array = [{id: 0, race: "Elf"}, {id: 1, race: "Human"}, {id: 2, race: "Dwarf"}, {id: 3, race: "Gnome"}]
var Image_array = [require("../../Ressources/elves.jpg"), require("../../Ressources/human.jpg"), require("../../Ressources/dwarf.jpg"), require("../../Ressources/gnome.png")]

export function Box({title, desc}) {
    return (
        <View style={{width: "100%", alignItems: "center", justifyContent: "center", marginTop: 10, marginBottom: 10}}>
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

//const mapStateToProps = (state) => state;
//export default connect(mapStateToProps)(ButtonIcon);
export default Box;