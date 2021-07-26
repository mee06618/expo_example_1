import * as React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import tw from 'tailwind-react-native-classnames';
const abc = () => (
  <TouchableRipple style={tw`bg-blue-100 h-full`}
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
    <Text>Press anywhere</Text>
  </TouchableRipple>
);

export default abc;