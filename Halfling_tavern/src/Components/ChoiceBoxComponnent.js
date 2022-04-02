import React ,{ useState } from 'react';
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
  } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-dropdown-picker';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

export function ChoiceBox({title, desc}) {
    const [isSelected, setSelection] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);

    function Check({text}) {
    
        return (
            <View style={{flexDirection: "row", marginTop: 10, alignItems: "flex-start"}}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={{alignSelf: "flex-start"}}
                />
                <Text style={styles.Check}> 
                    {text} 
                </Text>
          </View>
        );
    }

    return (
        <View style={{width: "100%", alignItems: "center", justifyContent: "center", marginTop: 10, marginBottom: 10}}>
            <View style={{
                width: "80%",
                backgroundColor: "grey",
                alignItems: "center", justifyContent: "center",
            }}>
                <Text style={styles.Title}>
                    {title}
                </Text>
            </View>
            <View style={{
                width: "80%",
                backgroundColor: "#090F2E",
                alignItems: "center", justifyContent: "center",
            }}>
                <Text style={styles.Desc}>
                    {desc}
                </Text>
                <DropDownPicker
                    style={{width: "65%", marginLeft: "15%", marginTop: 10}}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    textStyle={styles.Check}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Desc: {
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Libertine",
        color: "black", marginTop: 20,
        textAlign: "center",
        color: "white"
    },
    Check: {
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Libertine",
        color: "black",
        textAlign: "center"
    },
    Title: {
        fontSize: 40,
        textAlign: "center",
        fontFamily: "dungeon",
        marginTop: 20,
        textAlign: "center"
    },
  });

//const mapStateToProps = (state) => state;
//export default connect(mapStateToProps)(ButtonIcon);
export default ChoiceBox;