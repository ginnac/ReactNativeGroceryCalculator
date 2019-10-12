import React, {Component} from 'react';
import {
    FlatList,
    Text
} from "react-native";

export default class SugesstionList extends Component{
   
    render(){
        const list=[
            {
                title:"ginna",
                key: "1"
            },
            {
                title:"campbell",
                key: "2"
            }
        ]
        return(
            <FlatList data={list}
            renderItem={({item}) => 
            <Text>{item.key}</Text>}/>

        )
    }
}
