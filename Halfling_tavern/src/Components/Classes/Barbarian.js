import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
  } from 'react-native';

import Box from '../BoxComponnent';
import BoxList from '../BoxComponnentList';
import ChoiceBoxList from '../ChoiceBoxComponnentList';
import {TextComp} from '../../Pages/Class'
import ClassBottom from '../ClassBottom';
import infos from "../../../Ressources/jsons/barbarian.json"

var Image_array = [require("../../../Ressources/Half-Elf.png"), require("../../../Ressources/human.jpg"), require("../../../Ressources/dwarf.jpg"), require("../../../Ressources/gnome.png")]

function Barbarian({clas, race, navigation}) {
    return (
        <View style={{
            flex: 100,
            backgroundColor: "#032033",
            alignItems: "center", justifyContent: "center",
            }}>
            <ScrollView style={{
                backgroundColor: "#032033",
                flex: 80
                }}>
                <Image
                    style={{width: '100%', resizeMode: "stretch"}}
                    source={require("../../../Ressources/guerrier.jpg")}
                />
                <Text style={{fontSize: 60, textAlign: "center", fontFamily: "dungeon", marginTop: 20, color: "white"}}>
                    {clas}
                </Text>
                <View style={{
                    width: "100%",
                    alignItems: "center", justifyContent: "center", marginBottom: 20
                }}>
                    <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", marginTop: 20, textAlign: "center", color: "white"}}>
                        A fierce warrior of primitive background who can enter a battle rage
                    </Text>
                </View>
                <TextComp title={"Hit dice:"} desc={"1d20"}/>
                <TextComp title={"Primary Ability:"} desc={"Strength"}/>
                <TextComp title={"Saves:"} desc={"Strength & Constitution"}/>
                { race == "Half-Elf"
                    ? <Text style={{fontSize: 30, textAlign: "center", fontFamily: "dungeon", marginTop: 10, marginBottom: 10, color: "white"}}>
                        This class works well with the the race you have chosen
                    </Text>
                    : null
                }
                <Box title={infos.rage.title} desc={infos.rage.description}/>
                <Box title={infos.UnarmoredDefense.title} desc={infos.UnarmoredDefense.description}/>
                <Box title={infos.RecklessAttack.title} desc={infos.RecklessAttack.description}/>
                <BoxList title={infos.HitPoints.title} desc={infos.HitPoints.description}/>
                <ChoiceBoxList title={infos.Proficiencies.title} desc={infos.Proficiencies.description} nb={2} choices={[{checked: true, label: 'French', value: 'French'}, {checked: false, label: 'D', value: 'D'},  {checked: false, label: 'D2', value: 'D2'},  {checked: false, label: 'D3', value: 'D3'}]}/>
            </ScrollView>
            <ClassBottom clas={clas} navigation={navigation}/>
        </View>
    );
}

export default Barbarian;