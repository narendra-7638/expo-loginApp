import React from "react";
import {StyleSheet, View, TextInput, Text} from "react-native";


export default ({navigation}) => {
    return (
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
            <Text style={{ color: "white" }}>Already have account? 
            <Text 
            style={{ color: "red" }} 
            onPress={ () => navigation.navigate('Login')}>SignIn</Text></Text>
          </View>
          <View></View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    middleSeg: {
        flex: 2
      },
      middleTop: {
        flex: 3
      },
      inputView: {
        flex: 1,
        borderColor: "white",
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 1,
        marginTop: 1
      },
      middleBottom: {
        flex: 2,
      }
})