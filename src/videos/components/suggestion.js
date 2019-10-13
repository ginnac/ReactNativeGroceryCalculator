import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Suggestion(props) {
    return (
        <View style={styles.container}>

            <View style={styles.left}>
                <Image style={styles.cover}
                source = {{uri:`https://spoonacular.com/recipeImages/${props.image}`}} />
                <View style={styles.add}>
               <Text style={styles.addText}>+</Text> 
            </View>
            </View>

            <View style={styles.right}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.min}>Ready in {props.readyInMinutes} min </Text>
                <Text style={styles.servings}>Servings {props.servings}</Text>
            </View>
            
        </View>
    )


}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
    },
    cover:{
        height:100,
        width:150,
        resizeMode: "contain"
    },
    right:{
        paddingLeft:10,
        paddingRight:150,
        justifyContent: "space-between",
    },
    left:{

    },
    title:{
        fontSize:18,
        color: "#44546b"
    },
    min:{
       backgroundColor: "black",
       paddingVertical:4,
       color:"white",
       fontSize:11,
       borderRadius:5,
       overflow:"hidden",
       paddingHorizontal:6,
       alignSelf:"flex-start" 



    },
    servings:{
        color:"#6b6b6b",
        fontSize: 14, 
        fontWeight: "bold",

    },
    add:{
        position: "absolute",
        left: 0,
        top: 0, 
        backgroundColor: "yellow",
        paddingHorizontal: 7, 
        paddingVertical:7,
    },

    genreText:{
        fontSize:11
    }
}) 

export default Suggestion