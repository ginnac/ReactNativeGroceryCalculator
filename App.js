/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {
//   Platform,
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Image
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const instructions = Platform.select({
// 	ios:"Press Cmd+R to reload,\n" +
// 	"Cmd+D or shake for dev menu",
// 	android: "Double tap R on your Keyboard to reload \n" +
// 	"Shake or press menu button for dev menu"
// })


import React, {Component} from 'react';
import {
  Text
} from 'react-native';

import Home from "./src/screens/containers/home";
import Eader from "./src/sections/components/header";

import SuggestionList from "./src/videos/container/recipesResults";



export default class App extends Component{

	constructor(props){
		super(props)
	}

	render() {
		return (
			
		<Home>
			<Eader>
				<Text style={{color:"white"}}>Login</Text>
			</Eader>
			
			<Text>Buscador</Text>
			<Text>Categorias</Text>
			<Text>Sugges</Text>
			<SuggestionList/>
		</Home>	


		);
	}
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		flexDirection: "column",
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: Platform.select({
// 			ios:'red',
// 			android:"purple"})
// 	},
// 	instructions: {
// 		textAlign: 'center',
// 		color: '#333333',
// 		marginBottom: 5
// 	},
	
// });

