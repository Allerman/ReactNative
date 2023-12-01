// screens/HomeScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('firstReact\assets\poppy.jpg')}
        style={{ width: 100, height: 100, marginBottom: 10 }}
      />
      <Text>Thayssa Alexandre</Text>
    </View>
  );
};

export default HomeScreen;
