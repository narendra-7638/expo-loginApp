import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Signup from "./components/signup";
import Login from "./components/login";
import Assets from "./assets"


const Stack = createNativeStackNavigator();


// const imagePath = { uri: "https://reactjs.org/logo-og.png" };
// const imagePath = Image.resolveAssetSource(Assets.favicon)

export default function App() {
  return (
    <View style={styles.container}>
      {/* Top Segment */}
      <NavigationContainer>
      <View style={styles.topSeg}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>

      {/* Middle Segment */}
      
        <Stack.Navigator>
          <Stack.Screen 
          name="Signup"
          component={Signup}

          />
          <Stack.Screen 
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
      
      

      {/* Bottom Segment */}
      <View style={styles.bottomSeg}>
        <View style={{ bottom: 0 }}><Button title="Create An Account" /></View>
      </View>
      </NavigationContainer>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    top: 30,
    flex: 1,
    backgroundColor: '#212121',
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  topSeg: {
    flex: 1,
    paddingVertical: 10
  },
  
  bottomSeg: {
    flex: 1,
    alignContent: "center"
  },
  headerText: {
    color: "white",
    fontSize: 40
  },
  inputText: {
    color: "white",
    fontSize: 20,
  }  
});
