

import  React, {Component} from 'react';
import { View } from 'react-native';
import Header from './Header';
import Temp from './Temp';

class App extends Component {
  render() {
      return (  
          <View>
              <Header/>
              <Temp/>
          </View>
      );
  }
}

export default App;