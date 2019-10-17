import React from 'react';

import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

function Eader(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://marketplace.canva.com/MAB06ua30xA/1/thumbnail_large/canva-chef-hat--MAB06ua30xA.png',
            }}
            style={{width: 50, height: 50, resizeMode: 'contain'}}
          />

          <View
            style={{alignItems: 'center', flexDirection: 'row', marginLeft: 4}}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                fontStyle: 'italic',
              }}>
              Chef Helper
            </Text>
          </View>

          <View style={styles.right}>{props.children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 11,
    backgroundColor: 'gray',
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Eader;
