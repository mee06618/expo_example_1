import React from "react";
import { View } from "react-native";
import Temp from "./Temp";
import Write from "./write.js";
import List from "./List.js";
import tw from "tailwind-react-native-classnames";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View style={tw`h-full `}>
      <List />
      <Temp style={tw`w-12 h-12 mr-5 ml-auto mb-48 mt-auto`} />
    </View>
  );
}

function WriteScreen() {
  return (
    <View style={tw`h-full `}>
      <Write />
      <Temp style={tw`w-12 h-12 mr-5 ml-auto mb-48 mt-auto`} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Write"
          component={WriteScreen}
          options={{
            title: "글쓰기",
            headerStyle: {
              backgroundColor: "#A09187",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
