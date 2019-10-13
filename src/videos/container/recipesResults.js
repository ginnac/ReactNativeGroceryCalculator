import React, {Component} from 'react';
import {
    FlatList,
    Text
} from "react-native";
import Layout from "../components/suggestion-layout";
import Empty from "../components/empty";
import Separator from "../components/separator";
import Suggestion from "../components/suggestion"

export default class SugesstionList extends Component{
   renderEmpty =() => <Empty text="There is no mathing results"/>
   ItemSeparator =() => <Separator/> 
   renderItem = ({item}) => {
       return(
       <Suggestion {...item} />
       )
   }
   render(){
     

        return(

            <Layout title = "Recommended for you">
            <FlatList data={this.props.list}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent = {this.ItemSeparator}
                renderItem={this.renderItem}/>
            </Layout>

        )
    }
}
