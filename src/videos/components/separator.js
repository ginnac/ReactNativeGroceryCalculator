import React from "react";
import {View, Text, StyleSheet} from "react-native";

function Separator(props){

    return(
        <View style={[styles.separator,{ borderTopColor: (props.color) ? props.color : "#eaeaea"}]}>
           
        </View>
    )
}

const styles = StyleSheet.create({
 separator:{
     borderTopWidth: 1,
     marginBottom:10,
     marginTop: 10
 }
})


export default Separator