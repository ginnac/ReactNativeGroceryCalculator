import React from "react";
import {
    View, Text, StyleSheet
} from "react-native";

function SuggestionListLayout(props){
    return(
        <View style={styles.container}>
            <Text style = {styles.title}>{props.title}</Text>
                {props.children}
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        color:"gray",
        paddingVertical:10,
        flex:1,
    },
    title:{
            color:"red",
            fontWeight:"bold",
            fontSize:18,
            marginBottom:10,
            marginLeft:8,
    }

})
export default SuggestionListLayout