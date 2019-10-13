import React from "react";
import {
    View,Text, StyleSheet
} from "react-native";

function Empty (props){
return(
    <View style={styles.container}>
        <Text style={styles.container}>{props.text}</Text>
    </View>
)
}

const styles = StyleSheet.create({
container:{
    padding:9,
},
text:{
    fontSize:16
}
})
export default Empty