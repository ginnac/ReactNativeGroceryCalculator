import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import API from '../../../utils/API';

function Suggestion(props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.cover} source={{uri: `${props.image}`}} />
        <View style={styles.add}>
          <Button
            style={styles.button}
            id={props.id}
            onPress={() => props.seeDetails(props.id)}
            title={props.id===props.theId ? "-" : "+"}
            color="orange"
            accessibilityLabel="Chicken">
          </Button>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.min}>Ready in {props.readyInMinutes} min </Text>
        <Text style={styles.servings}>Servings {props.servings}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  cover: {
    height: 100,
    width: 150,
    resizeMode: 'contain',
  },
  right: {
    paddingLeft: 10,
    paddingRight: 150,
    justifyContent: 'space-between',
  },
  left: {},
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  min: {
    backgroundColor: 'black',
    paddingVertical: 4,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
  },
  servings: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  add: {
    position: 'absolute',
    left: 0,
    top: 0,
  },

  genreText: {
    fontSize: 11,
  },
  button: {
    width: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
});

export default Suggestion;
