import * as React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import tw from 'tailwind-react-native-classnames';
const abc = () => (
    <View style={tw`h-full `}>
  <TouchableRipple style={tw`w-12 h-12 mr-5 ml-auto mb-48 mt-auto rounded-full bg-red-300`}
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
    <Text></Text>
  </TouchableRipple>
  </View>
);

export default abc;