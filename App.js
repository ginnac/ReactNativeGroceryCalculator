/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


// const instructions = Platform.select({
// 	ios:"Press Cmd+R to reload,\n" +
// 	"Cmd+D or shake for dev menu",
// 	android: "Double tap R on your Keyboard to reload \n" +
// 	"Shake or press menu button for dev menu"
// })


import React, {Component} from 'react';
import {
  Text,
  TextInput,
  Button
} from 'react-native';

import Home from "./src/screens/containers/home";
import Eader from "./src/sections/components/header";
import API from "./utils/API";
import SuggestionList from "./src/videos/container/recipesResults";



export default class App extends Component{

	constructor(props){
		super(props)
	
	}

	state = {
		recipeId: [],
		firstList: [],
		list: [],
		sectionTitle: "Recommended for you",
		keyword: "",
		recipeData: {
			ingredients: [],
			instructions: "",
			calories: "",
			source: ""
		},
		recipeKey: "",

	}

	

	async componentDidMount(){
	 const suggestionResults = await API.getSuggestion("chicken");
		console.log(suggestionResults);
		this.setState({
			list: suggestionResults,
		});

		
	}

	
	handleSubmit = async (event) => {
		event.preventDefault();
		
		const suggestionResults = await API.getSuggestion(this.state.keyword);
		console.log(suggestionResults);
		this.setState({
			firstList: suggestionResults,
			keyword: "",
			sectionTitle: "Search results"
		});

		
		const ingredientsArray =  this.state.firstList.map(recipe => {
			recipe = `${recipe.id}`;

			return recipe;
		});

		this.setState({
			recipeId: ingredientsArray.join(",")

		})

		console.log(this.state.recipeId);


	
		const details = await API.getBulkDetails(this.state.recipeId);
        console.log(details);
		
		this.setState({
			list: details,
			keyword: "",
			sectionTitle: "Search results"
		});

	   
	  };

	render() {
		return (
		
			<Home>
			<Eader>
				<Text style={{color:"white"}}>Login</Text>
			</Eader>

			<TextInput
       			value={this.state.keyword}
				onChangeText={editedText =>
					this.setState({ keyword: editedText }) 
				}
       			name="keyword"
       			placeholder="keyword">
       		</TextInput>
     		<Button
       			onPress={this.handleSubmit}
  				title="Search"
  				color="black"
  				accessibilityLabel="Chicken">
     		</Button>
			
			
				<SuggestionList
					list = {this.state.list}
					sectionTitle = {this.state.sectionTitle}/>
			</Home>		
		


		);
	}
}



