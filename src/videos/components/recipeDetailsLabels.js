import React from "react";
import {
    View, Text, StyleSheet
} from "react-native";

function detailsLayout(props){
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
            color:"black",
            fontWeight:"bold",
            fontSize:16,
            marginBottom:10,
            marginLeft:10,
    }

})
export default detailsLayout