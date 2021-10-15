import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

import Assets from "./assets"

// const imagePath = { uri: "https://reactjs.org/logo-og.png" };
const imagePath = Image.resolveAssetSource(Assets.favicon)

export default function App() {
  return (
    <View style={styles.container}>
      {/* Top Segment */}
      <View style={styles.topSeg}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>

      {/* Middle Segment */}
      <View style={styles.middleSeg}>

        <View style={styles.middleTop}>
          <View style={styles.inputView}>
            <TextInput placeholderTextColor="white" style={styles.inputText} placeholder="Fullname" />
          </View>
          <View style={styles.inputView}>
            <TextInput placeholderTextColor="white" style={styles.inputText} placeholder="Username" />
          </View>
          <View style={styles.inputView}>
            <TextInput placeholderTextColor="white" style={styles.inputText} placeholder="Email" />
          </View>
          <View style={styles.inputView}>
            <TextInput placeholderTextColor="white" style={styles.inputText} placeholder="Password" />
          </View>
          <View style={styles.inputView}>
            <TextInput placeholderTextColor="white" style={styles.inputText} placeholder="Confirm Password" />
          </View>
        </View>

        <View style={styles.middleBottom}>
          <View style={{}}>
            <Text style={{ color: "white" }}>Already have account? <Text style={{ color: "red" }}>SignIn</Text></Text>
          </View>
          <View></View>
        </View>



      </View>

      {/* Bottom Segment */}
      <View style={styles.bottomSeg}>
        <View style={{ bottom: 0 }}><Button title="Create An Account" /></View>
      </View>

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
  middleSeg: {
    flex: 2
  },
  bottomSeg: {
    flex: 1,
    alignContent: "center"
  },
  headerText: {
    color: "white",
    fontSize: 40
  },
  inputView: {
    flex: 1,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 1,
    marginTop: 1
  },
  inputText: {
    color: "white",
    fontSize: 20,
  },
  middleTop: {
    flex: 3
  },
  middleBottom: {
    flex: 2,

  }
});
