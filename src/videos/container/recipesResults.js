import React, {Component} from 'react';
import {
    FlatList,
    Text,
    View,
    Button
} from "react-native";
import Layout from "../components/suggestion-layout";
import Empty from "../components/empty";
import Separator from "../components/separator";
import Suggestion from "../components/suggestion";
import API from "../../../utils/API"

export default class SugesstionList extends React.Component{
    
    constructor(props){
		super(props)
        
        
    }
    
    state = { 
        recipeTitle: "More information",
        recipeKey: "",
        instructions: "",
        recipeData: {
			ingredients: [],
			instructions: "",
			calories: "",
			source: ""
		},
      };


   renderEmpty =() => <Empty text="There is no mathing results"/>
   ItemSeparator =() => <Separator/> 
   keyExtractor=(item) => item.id.toString();


   seeDetails = async ( id) => {
    
    const details = await API.getDetails(id);
        console.log(details);
   
  };

   renderItem = ({item}) => {
       return(
       
       <View>
           <Suggestion {...item}
           seeDetails={this.seeDetails} />

            <Text> Ingredients: </Text>
           <FlatList
                keyExtractor={this.keyExtractor} 
                data={item.extendedIngredients}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent = {this.ItemSeparator}
                renderItem={({item})=>{return (
                    <View >
                        <Text>{item.original}</Text>
                    </View>);}}/>
                     
           <Text> Instructions: </Text> 
           <Text>{item.instructions}</Text>
           <Text> Source: </Text> 
           <Text> {item.sourceUrl}</Text>
       </View>
       
        

       )
   }






   render(){
     

        return(

            <Layout title = {this.props.sectionTitle}>
            <FlatList
                keyExtractor={this.keyExtractor} 
                data={this.props.list}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent = {this.ItemSeparator}
                renderItem={this.renderItem}/>
            </Layout>
             

            

        )
    }
}
